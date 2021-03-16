import axios from 'axios'
import { API_URL_REFRESH } from '../constants';

const tokenRefresh = async() => {
    const data = {
        refresh: localStorage.getItem("refresh")
    }
    if(localStorage.getItem("refresh")){
    await axios.post(API_URL_REFRESH, data).then(
        res => {
        localStorage.removeItem('refresh')
        localStorage.setItem('access', res.data.access)
        }
    ).catch
    ( error => { return false });
    } else {
        localStorage.clear()
    }
}


export default tokenRefresh