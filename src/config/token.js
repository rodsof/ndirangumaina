
import jwt_decode from "jwt-decode";
import tokenRefresh from "./tokenRefresh";
const tokenAuth = async(token) => {

    const { exp } = jwt_decode(token)
    // Refresh the token a minute early to avoid latency issues
    const expirationTime = (exp * 1000) - 60000
    if (Date.now() >= expirationTime) {
      localStorage.removeItem('access')
      token = tokenRefresh()
    if(token){
     return;
    }
    else {
        localStorage.clear()
        
        return false;
    }
      // set LocalStorage here based on response;
    } 
  
}





export default tokenAuth;
