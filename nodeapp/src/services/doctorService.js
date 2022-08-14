import db from "../models/index";
let getTopDoctorHome = async (limit) => {
  console.log("_________LIMIT IN SERVER SERVICE", limit);
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
        },
        {
          model: db.Allcode,
          as: "genderData",
          attributes: ["valueEn", "valueVi"],
        },
      ],
      raw: true,
      nest: true,
    });

    return users;
  } catch (e) {
    console.log(e);
  }
};

let getAllDoctor = async () => {
  try {
    let doctors = await db.User.findAll({
      where: { roleId: "R2" },
      attributes: {
        exclude: ["password", "image"],
      },
    });
    return doctors;
  } catch (e) {
    console.log(e);
  }
};

let saveInfoDoctor = async(data) => {
  try {
    await db.MarkDown.create({
      contentHTML: data.contentHTML,
      contentMarkDown: data.contentMarkDown,
      description: data.description,
      doctorId: data.doctorId,
    });
    console.log("CREATE MARKDOWN SUCCESS ")
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctor: getAllDoctor,
  saveInfoDoctor: saveInfoDoctor,
};
