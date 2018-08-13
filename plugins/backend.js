import axios from "axios";
export const backend = axios.create({
  baseURL: "http://142.93.80.207/api"
});
