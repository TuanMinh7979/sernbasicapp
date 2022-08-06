import db from "../models/index";
let getTopDoctorHome = async (limit) => {
  try {
    let users = await db.User.findAll({
      limit: limit,
      where: {roleId:"R2"},
      order: [["createdAt", "DESC"]],
      attributes: {
        exclude: ["password","image"],
      },
    });
    return users;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getTopDoctorHome: getTopDoctorHome,
};
