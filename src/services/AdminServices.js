import axios from "axios";

const API_BASE_URL = 'http://localhost:3001/'

class AdminServices {
    getAdmin(admin) {
        return axios.get(`${API_BASE_URL}admin/login/?username=${admin.username}&password=${admin.password}`)
    }

    getCategories(){
        return axios.get(`${API_BASE_URL}admin/category`)
    }
}

export default new AdminServices()