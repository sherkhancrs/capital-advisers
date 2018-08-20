import axios from "axios";
export const backend = axios.create({
  baseURL: "http://195.201.217.12/api"
});
