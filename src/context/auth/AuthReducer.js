import { 
    REGISTERED,
    REGISTER_ERROR,
    GET_USER,
    GETUSER_ERROR,
    LOGIN_OK,
    LOGIN_ERROR,
    LOG_OUT
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case REGISTERED:
        case LOGIN_OK:
            return {
                ...state,
                autenticated: true,
                message: null,
            }
        case GET_USER: 
            return {
                ...state,
                user: action.payload, 
            }
            case GETUSER_ERROR: 
            return {
                ...state,
                user: null, 
            }
        case LOG_OUT:
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.clear()

            return {
                ...state,
                token: null,
                user: null,
                autenticated: null,
                message: action.payload, 
            }
        
        default:
            return state;
    }
}