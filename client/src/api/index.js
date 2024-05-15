import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000' })

// API.interceptors.request.use((req) => {
//     if(localStorage.getItem('Profile')){
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
//     }
//     return req;
// })

export const SIGNUP = (data) => API.post('/user/signup', data);
export const LOGIN = async(data) => API.post('/user/login', data);