import React, { useContext } from "react";
import { AuthContext } from "./auth_context";
import "./auth_screen.css"; // Додамо туди стилі

export const AuthScreen = () => {
    const { login } = useContext(AuthContext);

    return (
        <div className="auth-screen">
            <h2>Script Store</h2>
            <button className="google-btn" onClick={login}>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="google-icon" />
                Увійти через Google
            </button>
        </div>
    );
}
