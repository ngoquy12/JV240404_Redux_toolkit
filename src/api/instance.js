import axios from "axios";

const BASE_URL = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default BASE_URL;
