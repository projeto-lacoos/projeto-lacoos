import { createContext, React, useContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

export const ApplicationContext = createContext({});

export const ApplicationProvider = ({ children }) => {

    const [user, setUser] = useState({
    });

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        setAuth(getLocalUser());
    }, []);

    const getLocalUser = () => {
        if (typeof window !== undefined) {
            const token = String(window.localStorage.getItem('token'));
            if (token !== null) {
                try {
                    const localUser = jwtDecode(token);
                    setUser(localUser);
                    return true;

                } catch (error) {
                    console.log(error)
                    return false
                }

            }
        }
        return false;
    }

    const setLocalUser = (token) => {
        if (typeof window !== undefined) {

            token = String(token)

            if (token) {
                window.localStorage.setItem('token', token);
                const localUser = jwtDecode(String(token));
                setUser(localUser);
                setAuth(true);
                setLocalUser(String(token))
            }
        }

        return null;
    }

    return (
        <ApplicationContext.Provider value={{ user, setUser, auth, setAuth, setLocalUser }}>
            {children}
        </ApplicationContext.Provider>
    )
}