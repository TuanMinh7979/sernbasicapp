import db from "../models/index";
import brcypt from "bcryptjs";
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
module.exports = {
  hdlUserLogin: hdlUserLogin,
};
