import React, { useContext} from "react";
import { AuthContext } from "../auth_screen/auth_context";

export const WelcomeMessage = () => {
    const {user} = useContext(AuthContext)

    if(!user)
        return null;

    return(

        <div className="welcome_message"></div>
    )
}