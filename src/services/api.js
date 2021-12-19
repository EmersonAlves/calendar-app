import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3546/"
})

export default api;