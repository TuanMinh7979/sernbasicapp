import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);
let hashUserPassword = (pw) => {
  return bcrypt.hashSync(pw, salt);
};

let hdlUserLogin = (email, pw) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};

      let isExist = await isEmailExist(email);

      if (isExist) {
        let user = await db.User.findOne({
          where: { email: email },
          attributes: ["email", "password", "roleId"],
        });
        if (user) {
          let check = await brcypt.compareSync(pw, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "OK";
            userData.user = { email: user.email, roleId: user.roleId };
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = "User is not found";
        }
      } else {
        userData.errCode = 2;
        userData.errMessage = "Your's email is not found";
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let isEmailExist = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });

      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = "";
      console.log(":::::", userId);
      if (userId) {
        if (userId === "ALL") {
          data = await db.User.findAll({
            attributes: {
              exclude: ["password"],
            },
          });
        } else {
          data = await db.User.findOne({
            where: { id: userId },
            attributes: {
              exclude: ["password"],
            },
          });
        }
      }

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await isEmailExist(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: "email is existed",
        });
      }
      let pass = data.password;
      let hashPwFromBrypt = hashUserPassword(pass);
      await db.User.create({
        email: data.email,
        password: hashPwFromBrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === 1 ? true : false,
        roleId: data.roleId,
      });
      resolve({
        errCode: 0,
        errMessage: "OK",
      });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  hdlUserLogin: hdlUserLogin,
  getUser: getUser,
  createNewUser: createNewUser,
};
