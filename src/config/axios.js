
import axios from 'axios';

const clientAxios = axios.create({
    baseURL : 'https://www.spatialardhi.com/estate/',
    headers: { Authorization: `Token ${localStorage.getItem("token")} ` },
    'Content-Type': 'application/json'
});



export default clientAxios;