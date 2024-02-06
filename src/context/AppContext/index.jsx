import React, {createContext, useState} from 'react';

export const UserContext = createContext({})
const Index = ({children}) => {
    const [user, setUser] = useState(!!localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)

    const handleUser = (data) => {
        setUser(data)
    }

    return (
        <UserContext.Provider value={{user, handleUser}}>
            {children}
        </UserContext.Provider>
    );
};

export default Index;