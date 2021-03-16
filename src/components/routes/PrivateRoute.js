import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import tokenAuth from '../../config/token';
import AuthContext from '../../context/auth/AuthContext';

const PrivateRoute= ({ component: Component, ...props  }) => {

    const authContext = useContext(AuthContext);
    const { autenticated, autenticatedUser, logout } = authContext;
      
    useEffect(() => {
        autenticatedUser();
        // eslint-disable-next-line
    }, []);
    return ( 
        <Route { ...props } render={ props => !localStorage.getItem('access') || !tokenAuth(localStorage.getItem("access")) ?  (
            <Redirect to="/" />
        )  : (
            <Component {...props} />
        ) } />

     );

}
 
export default PrivateRoute;