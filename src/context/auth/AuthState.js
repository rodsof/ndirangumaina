import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import tokenAuth from "../../config/token";
import axios from 'axios'

import {
  REGISTERED,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_OK,
  LOGIN_ERROR,
  GETUSER_ERROR,
  LOG_OUT,
} from "../../types";
import { API_URL_LOGIN } from "../../constants";
import clientAxios from "../../config/axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("access"),
    autenticated: localStorage.getItem("access"),
    user: localStorage.getItem("user"),
    message: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  /* const createUser = async (data) => {
    try {
      const response = await axiosClient.post("/api/users", data);

      dispatch({
        type: REGISTERED,
        payload: response.data,
      });

      // get user
      autenticatedUser();
    } catch (error) {
    

      dispatch({
        type: REGISTER_ERROR,
        payload: error,
      });
    }
  }; */

  // get autenticated user
  const autenticatedUser = async () => {
    const token = localStorage.getItem("access");
    if (token) {
      tokenAuth(token);
    }
    try {
      if(localStorage.getItem("email")){
      const response = await clientAxios.get( `profiles/?format=json&search=${localStorage.getItem("email")}`);
      localStorage.setItem('user', response.data[0])
     
      dispatch({
        type: GET_USER,
        payload: response.data[0],
      });
    }
    } catch (error) {
      dispatch({
        type: GETUSER_ERROR,
      });
    }
  };

  // login
  const login = async (data) => {
    try {
      const response = await axios.post(API_URL_LOGIN, data );
      document.cookie = "access = "+response.data.access;
      localStorage.setItem('refresh', response.data.refresh);
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('email', data.email);

      dispatch({
        type: LOGIN_OK,
        payload: response.data,
      });

      // get user
      autenticatedUser();
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: "Error! Try again",
      });
    }
  };

  // logout 
  const logout = () => {
    dispatch({
      type: LOG_OUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticated: state.autenticated,
        user: state.user,
        message: state.message,
        // createUser,
        login,
        autenticatedUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
