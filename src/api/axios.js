import axios from "axios";

export const privateApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
