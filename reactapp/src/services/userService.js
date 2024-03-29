import axios from "../axios";
const hdlLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getUser = (userId) => {
  return axios.get(`/api/get-all-user?id=${userId}`);
};

const getAllCodeService = (inpType) => {
  return axios.get(`/api/allcode?type=${inpType}`);
};

const createUserService = (data) => {
  return axios.post("/api/create-user", data);
};

const deleteUserService = (userId) => {
  return axios.post("/api/delete-user", {
    data: {
      id: userId,
    },
  });
};
const updateUserService = (user) => {
  return axios.post("/api/update-user", {
    data: {
      user,
    },
  });
};

const getTopDoctorHome = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};

const getAllDoctor = () => {
  return axios.get("/api/get-all-doctor");
};

const saveDetailDoctorService=(data)=>{
  return axios.post('/api/save-info-doctor', data)
}
export {
  hdlLoginApi,
  getUser,
  getAllCodeService,
  deleteUserService,
  createUserService,
  updateUserService,
  getTopDoctorHome,
  getAllDoctor,
  saveDetailDoctorService
};
