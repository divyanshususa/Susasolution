import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "https://legalrights-1.onrender.com",
  // baseURL: "http://localhost:5000",
});

export default API;
  