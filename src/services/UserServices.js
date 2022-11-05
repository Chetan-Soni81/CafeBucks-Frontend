import axios from "axios";

const API_BASE_URL = "http://localhost:3001/"

class UserServices {
    getUser(user) {
        return axios.get(`${API_BASE_URL}account/login/?username=${user.username}&password=${user.password}`)
    }

    createUser(user) {
        return axios.post(`${API_BASE_URL}account/signup`, user)
    }
}

export default new UserServices()