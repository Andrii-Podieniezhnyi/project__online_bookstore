import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";


export const Layout =  () => {
    const location = useLocation();
    const isAuthPage = location.pathname === "/auth";


    return(
        <>
            {!isAuthPage && <Header />}
                <Outlet />
            {!isAuthPage && <Footer />}
        </>
    )
}