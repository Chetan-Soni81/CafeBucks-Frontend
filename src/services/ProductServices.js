import axios from 'axios'

const API_BASE_URL = "http://localhost:3001/"

class ProductService {
    getProducts() {
        return axios.get(API_BASE_URL + 'product/')
    }
}

export default new ProductService()