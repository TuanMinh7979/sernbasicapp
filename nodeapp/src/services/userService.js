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
          attributes: ["email", "password", "roleId", "firstName", "lastName"],
        });
        if (user) {
          let check = await bcrypt.compareSync(pw, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "OK";
            userData.user = {
              email: user.email,
              roleId: user.roleId,
              firstName: user.firstName,
              lastName: user.lastName,
            };
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
      console.log(">>>>>>>>>>>>>>.data from node app", data);
      await db.User.create({
        email: data.email,
        password: hashPwFromBrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === 1 ? true : false,
        roleId: data.roleId,
        positionId: data.positionId,
        image: data.avatar
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

let getAllCodeService = async (typeInput) => {
  let data = await db.Allcode.findAll({
    where: { type: typeInput },
  });

  return data;
};

let deleteAUserService = (idToDel) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.destroy({ where: { id: idToDel }, truncate: false });
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};

// let updateUserService = (data) => {
//   data = data.user;
//   let userId = data.id;

//   return new Promise(async (resolve, reject) => {
//     try {
//       let user = await db.User.findOne({ where: { id: userId } });

//       if (user) {
//         user.firstName = data.firstName;
//         user.lastName = data.lastName;
//         user.address = data.address;
//         user.phoneNumber = data.phoneNumber;

//         user.gender = data.gender;
//         user.roleId = data.role;
//         user.positionId = data.position;

//         await user.save();
//         resolve(true);
//       } else {
//         reject("some thing wrong 1");
//       }
//     } catch (e) {
//       console.error(e);
//       reject("some thing wrong 2");
//     }
//   });
// };

let updateUserService = async (data) => {
  console.log("__________________UPDATE_service______________.......", data);
  let userData = data.user;
  let userId = userData.id;
  try {
    console.log(">>>>>>>>>>>>>>>>>>>userid ", userId);
    let user = await db.User.findOne({ where: { id: userId } });

    if (user) {
      user.firstName = userData.firstName;
      user.lastName = userData.lastName;
      user.address = userData.address;
      user.phoneNumber = userData.phoneNumber;
      user.gender = userData.gender;
      user.roleId = userData.role;
      user.positionId = userData.position;
      user.image= userData.avatar
      
      await db.User.update({ ...user }, { where: { id: userId } });
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  hdlUserLogin: hdlUserLogin,
  getUser: getUser,
  createNewUser: createNewUser,
  getAllCodeService: getAllCodeService,
  deleteAUserService: deleteAUserService,
  updateUserService: updateUserService,
};
