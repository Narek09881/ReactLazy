import axios from 'axios';

const api = axios.create({
    baseURL: 'https://4businessmen.ru',
    headers: {
        'Content-Type': 'application/json',
    }
})

class Api {
    static getFromApi(){
        return api.get("/wp-json/car/v1/list")
    }
}

export default Api;