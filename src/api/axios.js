import axios from "axios";

export const privateApi = axios.create({
  baseURL: "https://salle-around-me.onrender.com/"
  //baseURL: "https://jsonplaceholder.typicode.com/",
});
