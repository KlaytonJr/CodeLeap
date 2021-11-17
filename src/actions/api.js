import axios from "axios";

const api = axios.create({
  baseURL: "http://dev.codeleap.co.uk",
});

export default api;