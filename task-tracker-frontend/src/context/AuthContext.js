import { createContext, useState} from 'react';
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem('token');
        return token ? jwtDecode(token) : null;
    });

    const login = (token) => {
        localStorage.setItem('token', token);
        setUser(jwtDecode(token));
    };

    const logOut = () => {
        localStorage.removeItem('token', token);
        setUser(jwtDecode(null));
    }

    return (
        <AuthContext.Provider value = {{user, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;