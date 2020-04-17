
import axios from 'axios';

const clientAxios = axios.create({
    baseURL : 'http://localhost:8000',
    headers: { Authorization: `Token ${localStorage.getItem("token")} ` },
    'Content-Type': 'application/json'
});



export default clientAxios;