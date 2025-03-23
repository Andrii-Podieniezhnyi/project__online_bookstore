import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth_screen/auth_context";

export const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    return user ? children : <Navigate to = "/auth" />;
}

