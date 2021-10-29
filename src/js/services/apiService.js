import apiConfig from "../config/apiConfig";
import axios from 'axios';


class ApiService {
    constructor(config) {
        this.url = config.url
        this.key = config.key
        this.urlRarity = config.urlRarity
    }

    async items(params){
        try {
            const response = await axios.get(`${this.url}`, {
                headers: {
                    'Content-type': 'application/json',
                    Authorization : `${this.key}`
                },
                params
            })
            return response.data
        } catch (e) {
            console.log(e)
            return Promise.reject(e)
        }
    }
    async rarity() {
        try {
            const response = await axios.get(`${this.urlRarity}`, {
                headers: {
                    'Content-type': 'application/json',
                    Authorization : `${this.key}`
                }
            })
            return response.data
        } catch (e) {
            console.log(e)
            return Promise.reject(e)
        }
    }
}

const api = new ApiService(apiConfig)

export default api