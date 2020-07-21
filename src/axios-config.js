import Axios from 'axios'
import store from './store/index.js'

let token = localStorage.getItem('authorization_token');

export const http = Axios.create({
    baseURL: `http://127.0.0.1:8000/api/v1/`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token,
    }
})