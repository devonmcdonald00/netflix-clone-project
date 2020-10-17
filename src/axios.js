import axios from "axios";

//The instance will use the baseURL whenever it is used and you can append the end
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;