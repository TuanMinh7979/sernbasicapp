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

  return res.status(200).json(message);
};

let getAllCode = async (req, res) => {
  if (!req.query.type) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing type query param",
    });
  }
  try {
    let data = await userService.getAllCodeService(req.query.type);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Get all code error ", e);
    return res.status(200).json({
      errCode: 2,
      errMessage: "Error from server",
    });
  }
};

let deleteAUserController = async (req, res) => {
  if (!req.body.data) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing data in req.body",
    });
  }
  try {
    let data = await userService.deleteAUserService(req.body.data.id);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Delete error ", e);
    return res.status(200).json({
      errCode: 2,
      errMessage: "Error from server",
    });
  }
};

let updateAUserController = async (req, res) => {
  console.log("__________________UPDATE_______________.......")
  try {
    let data = await userService.updateUserService(req.body.data);
    return res.status(200).json(data);
  } catch (e) {
    console.log("Update error ", e);
    return res.status(200).json({
      errCode: 2,
      errMessage: "Error from server",
    });
  }
};

module.exports = {
  hdlLogin: hdlLogin,
  hdlGetAllUser: hdlGetAllUser,
  hdlCreateNewUser: hdlCreateNewUser,
  getAllCode: getAllCode,
  deleteAUserController: deleteAUserController,
  updateAUserController, updateAUserController
};
