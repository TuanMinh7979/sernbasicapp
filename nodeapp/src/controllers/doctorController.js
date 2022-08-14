import doctorService from "../services/doctorService";

let getTopDoctorHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 10;
  try {
    let doctors = await doctorService.getTopDoctorHome(+limit);
    return res.status(200).json({
      errorCode: 0,
      errMessage: "OK",
      topDoctors: doctors,
    });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from server",
    });
  }
};

let getAllDoctor = async (req, res) => {
  try {
    let doctors = await doctorService.getAllDoctor();
    console.log("+++++++", doctors);
    return res.status(200).json({
      errorCode: 0,
      errMessage: "OK",
      allDoctor: doctors,
    });
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from server",
    });
  }
};

let saveInfoDoctor = async (req, res) => {
  let data = req.body;
  if (!data || !data.contentHTML || !data.contentMarkDown) {
    return res.status(200).json({
      errorCode: 1,
      errMessage: "Missign parameter",
    });
  }
  try {
     await doctorService.saveInfoDoctor(data);
   
    return res.status(200).json({
      errorCode: 0,
      errMessage: "OK",
    });
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from server",
    });
  }
};
module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctor: getAllDoctor,
  saveInfoDoctor: saveInfoDoctor
};
