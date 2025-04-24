import axios from 'axios';

const API = axios.create({
    baseURL: `process.env.BACKEND_URI`,
});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if(token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default API;