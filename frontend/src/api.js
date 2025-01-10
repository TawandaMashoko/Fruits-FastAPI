import axios from 'axios';

//creating an instance of axios with a base url

const api = axios.create({
    baseURL: "http://localhost:8000"
});

export default api;