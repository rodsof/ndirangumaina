import React, { createContext, useState, useEffect, useContext } from 'react';
import AuthContext from './auth/AuthContext';
import clientAxios from '../config/axios';

export const DataContext = createContext();

const DataProvider = (props) => {

    const authContext = useContext(AuthContext);
    const { user, autenticated } = authContext;

    const [data, saveData] = useState([]);
    const [search, searchData] = useState({
        title: '',
    });
    const [searchMade, saveSearch] = useState(false);

    const { title } = search;

    useEffect(() => {
        if (autenticated && user) {
            const getData = async () => {
                const response = await clientAxios.get('data/?format=json', { params: { id: user.id } });
                saveData(response.data)
            }
            getData();
        }

        if (searchMade) {

            const getSearchData = async () => {
                if (title !== " " && title !== undefined) {
                    const response = await clientAxios.get('data/?format=json', { params: { search: title } })
                    saveSearch(response.data) 
                    }
                 
                }
            getSearchData();
        }

    }, [search, user]);

   const deleteProperty = async (id) => {
        await clientAxios.delete('data/' + id + '/?format=json').then(() => {
            saveData(data.filter( d => d.id !== id ))
        });
      };

    return (
        <DataContext.Provider
            value={{
                data,
                searchData,
                saveData,
                saveSearch,
                deleteProperty
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
}

export default DataProvider;