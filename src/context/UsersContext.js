import React, { createContext, useState, useEffect, useContext } from 'react';
import AuthContext from './auth/AuthContext';
import clientAxios from '../config/axios';

export const UsersContext = createContext();

const UsersProvider = (props) => {

    const authContext = useContext(AuthContext);
    const { user, autenticated } = authContext;

    const [users, saveUsers] = useState([]);
    const [searchU, searchUsers] = useState({
        title: '',
    });
    const [searchMade, saveSearch] = useState(false);

    const { title } = searchU;

    useEffect(() => {
        if (autenticated && user) {
            const getUsers = async () => {
                const response = await clientAxios.get('profiles/?format=json');
                saveUsers(response.data)
                // await clientAxios.get('profiles/?format=json').then(res => this.setState({ users: res.users }));
            }
            getUsers();
        }

        if (searchMade) {
            const getSearchUsers = async () => {
                if (title !== " " && title !== undefined) {
                    const response = await clientAxios.get('profiles/?format=json', { params: { search: title } })
                    saveUsers(response.data) 
                    }
         
                }
            getSearchUsers();
        }

    }, [searchU, user]);

    return (
        <UsersContext.Provider
            value={{
                users,
                searchU,
                searchUsers,
                saveUsers,
                saveSearch,
            }}
        >
            {props.children}
        </UsersContext.Provider>
    );
}

export default UsersProvider;