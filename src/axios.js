import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-practice-backend.herokuapp.com",
});

export default instance;
