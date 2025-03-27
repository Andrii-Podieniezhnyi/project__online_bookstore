import React, { createContext, useState} from "react";
import { loginWithGoogle, logout } from "../../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    // Вхід через Google

    const handleLogin = async () => {
        const userData = await loginWithGoogle();

        if(userData){
            setUser(userData);
        }
    };


    // Вихід

    const handleLogout = async() => {
        await logout()
        setUser(null);
        
    }


    return (
        <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}