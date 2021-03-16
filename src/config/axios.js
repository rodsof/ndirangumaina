
import axios from 'axios';

let token = localStorage.getItem('access')
const clientAxios = axios.create({
    baseURL : 'https://www.spatialardhi.com/estate/',
    headers: { Authorization: `Bearer ${token} ` },
    'Content-Type': 'application/json',
});



export default clientAxios;