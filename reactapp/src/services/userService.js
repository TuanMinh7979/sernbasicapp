import axios from "../axios";
const hdlLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};
export { hdlLoginApi };
