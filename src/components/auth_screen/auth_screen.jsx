import React, { useContext } from "react";
import { AuthContext } from "./auth_context";
import { useNavigate } from "react-router-dom";
import "./auth_screen.css";

export const AuthScreen = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const user = await login();
        if(user) {
            navigate("/booklist");
        }
    }

    return (
        <div className="auth-screen">
            <div className="wave"></div>
            <div className="auth-card">
                <h2>Script Store</h2>
                <button className="google-btn" onClick={handleLogin}>
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="google-icon" />
                    Увійти через Google
                </button>
            </div>
        </div>
    );
}
