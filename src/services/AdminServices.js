import axios from "axios";

const API_BASE_URL = 'http://localhost:3001/'

class AdminServices {
    getAdmin(admin) {
        return axios.get(`${API_BASE_URL}admin/login/?username=${admin.username}&password=${admin.password}`)
    }

    getCategories(){
        return axios.get(`${API_BASE_URL}admin/category`)
    }

    deleteCategory(id) {
        return axios.delete(`${API_BASE_URL}admin/category/delete?_id=${id}`)
    }

    addCategory(category){
        return axios.post(`${API_BASE_URL}admin/category/create`, category)
    }

    getProducts() {
        return axios.get(`${API_BASE_URL}admin/product`)
    }

    addProduct(data) {
        return axios.post(`${API_BASE_URL}admin/product/create`, data, {
            header: {
                'content-type' : 'multipart/form-data'
            }
        })
    }

    deleteProduct (id) {
        return axios.delete(`${API_BASE_URL}admin/product/delete/${id}`)
    }
}

export default new AdminServices()