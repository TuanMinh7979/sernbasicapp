import axios from "../axios";
const hdlLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};

const getUser = (userId) => {
  return axios.get(`/api/get-all-user?id=${userId}`);
};
export { hdlLoginApi, getUser };
