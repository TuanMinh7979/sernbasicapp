import bcrypt from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(">>>>>>>>>>>>>......" + data.password);
      let pass = data.password;
      console.log(pass);
      let hashPwFromBrypt = hashUserPassword(pass);
      console.log(">>>>>><<<<<<" + hashPwFromBrypt);
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
      resolve("ok success careatenewuser");
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll();
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

let hashUserPassword = (pw) => {
  return bcrypt.hashSync(pw, salt);
};

let getUserInfoById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: userId }, raw: true });
      if (user) {
        resolve(user);
      } else {
        resolve([]);
      }
    } catch (e) {
      console.error(e);
    }
  });
};

let updateUserData = (data) => {
  let userId = data.id;

  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: userId } });

      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.phoneNumber = data.phoneNumber;
        await user.save();
        resolve(true);
      } else {
        reject("some thing wrong 1");
      }
    } catch (e) {
      console.error(e);
      reject("some thing wrong 2");
    }
  });
};
let deleteUserById = (idToDel) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: idToDel } });
      await user.destroy();
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
  getUserInfoById: getUserInfoById,
  updateUserData: updateUserData,
  deleteUserById: deleteUserById,
};
