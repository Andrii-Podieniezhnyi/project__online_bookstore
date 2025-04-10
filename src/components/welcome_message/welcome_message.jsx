import React, { useContext} from "react";
import { AuthContext } from "../auth_screen/auth_context";

export const WelcomeMessage = () => {
    const {user} = useContext(AuthContext)

    if(!user)
        return null;

    return(

        <div className="welcome-card">
            <img src={user.photoURL} alt="avatar" className="welcome-avatar"/>
            <div className="welcome-text">
                <h2>Привіт, {user.displayName}! 👋</h2>
                <p>Радий бачити тебе у <strong>Script Store</strong>. Бажаю приємного перегляду книг 📚</p>
            </div>
        </div>
    )
}