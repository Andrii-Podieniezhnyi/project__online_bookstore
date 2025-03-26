import React, { createContext, useState} from "react";
import { auth, loginWithGoogle, logout } from "../../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);


    // Вхід через Google

    const handlelogin = async () => {
        const userData = await loginWithGoogle();

        if(userData){
            setUser(userData);
        }
    };


    // 
    const logout = () => {
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}