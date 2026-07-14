import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
});

export const sendProperty = async (PropertyData) => {

console.log("Sending Property data:", PropertyData);


  const response = await API.post("/addProperty", PropertyData);
  return response.data;
};