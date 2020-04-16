
import axios from 'axios';

const clientAxios = axios.create({
    baseURL : process.env.API,
    headers: { Authorization: `Token a300f14adcc916a7334b63128fc00f15df442879` },
    'Content-Type': 'application/json'
});



export default clientAxios;