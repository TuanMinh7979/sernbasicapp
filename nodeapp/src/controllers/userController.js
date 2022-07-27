import userService from "../services/userService";

let hdlLogin = async (req, res) => {
  let email = req.body.email;
  let pw = req.body.password;

  if (!email || !pw) {
    return res.status(500).json({
      errCode: 1,
      errMessage: "missing email or password",
    });
  }

  let userData = await userService.hdlUserLogin(email, pw);
  if (userData.errCode !== 0) {
    return res.status(500).json({
      errCode: userData.errCode,
      errMessage: userData.errMessage,
    });
  }
  return res.status(200).json({
    userData: userData.user,
  });
};

let hdlGetAllUser = async (req, res) => {
  let id = req.query.id;
  let users = await userService.getUser(id);

  return res.status(200).json({
    errorCode: 0,
    errMessage: "OK",
    users: users,
  });
};

let hdlCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  console.log(">>>create a new user from service ", message);
  return res.status(200).json(message);
};
module.exports = {
  
  hdlLogin: hdlLogin,
  hdlGetAllUser: hdlGetAllUser,
  hdlCreateNewUser: hdlCreateNewUser,
};
