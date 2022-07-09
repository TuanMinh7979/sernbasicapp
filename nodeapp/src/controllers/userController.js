import userService from "../services/userService";

let hdlLogin = async (req, res) => {
  let email = req.body.email;
  let pw = req.body.password;

  if (!email || !pw) {
    return res.status(500).json({
      errCode: 1,
      message: "missing email or password",
    });
  }

  let userData = await userService.hdlUserLogin(email, pw);
  return res.status(200).json({
    errCode: userData.errCode,
    errMessage: userData.errMessage,
    userData: userData.user ? userData.user : {},
  });
};
module.exports = {
  hdlLogin: hdlLogin,
};
