import React, {createContext, useState, useEffect} from 'react';
import Settings from '../repositories/Settings';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [currentUser, setUser] = useState({})

    const getCurrentUser = () => {
        return fetch(`${Settings.remoteURL}/users`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            }
        })
        .then(res => res.json())
    }

    useEffect(() => {
        getCurrentUser()
        .then(data => setUser(data))
    },[])

    return (
        <UserContext.Provider value={{currentUser, setUser}}>
            {children}
        </UserContext.Provider>
    )



}
