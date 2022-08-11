import db from "../models/index";
let getTopDoctorHome = async (limit) => {
  console.log("_________LIMIT IN SERVER SERVICE", limit)
  try {
    let users = await db.User.findAll({
      limit: limit,
      where: { roleId: "R2" },
      order: [["createdAt", "DESC"]],
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: db.Allcode,
          as: "positionData",
          attributes: ["valueEn", "valueVi"],
        }
        ,
        {
          model: db.Allcode,
          as: "genderData",
          attributes: ["valueEn", "valueVi"],
        }
      ],
      raw:true,
      nest: true
    });
    
    return users;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getTopDoctorHome: getTopDoctorHome,
};
