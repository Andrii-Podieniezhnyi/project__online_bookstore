import React, {useContext} from "react";
import { AuthContext } from "./auth_context";
import './auth_screen.css';

export const AuthScreen = () => {
    const { loginWithGoogle } = useContext(AuthContext)


    return (
        <main>
            <section>
                <h2>Ласкаво просимо</h2>
                <button className="google-login-btn" onClick={loginWithGoogle}>
                    Увійте через Google
                </button>
            </section>
        </main>
    )
}