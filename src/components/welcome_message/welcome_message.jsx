import React, { useContext} from "react";
import { AuthContext } from "../auth_screen/auth_context";

export const WelcomeMessage = () => {
    const {user} = useContext(AuthContext)

    if(!user)
        return null;

    return(

        <div className="welcome-card">
            <img src={user.photoURL} alt="avatar" className="welcome_avatar"/>
            <h2>Привіт, {user.displayName}</h2>
            <p>Радий тебе бачити у Script Store</p>
        </div>
    )
}