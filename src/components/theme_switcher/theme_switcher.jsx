import React, { useState, useEffect} from "react";

export function ThemeSwitcher() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');

        return savedTheme ? savedTheme : 'light';
    })


    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }


    return (
        
/*
        <div class="color-theme">
            <div class="color-theme__button color-theme__button--light">Light</div>
                <div class="color-theme__indication">
                    <div class="color-theme__indication_ico"></div>
                </div>
            <div class="color-theme__button color-theme__button--dark">Dark</div>
        </div>
*/

        <div onClick={toggleTheme}>
            <div class="color-theme__button color-theme__button--light">Light</div>
                <div class="color-theme__indication">
                    <div class="color-theme__indication_ico"></div>
                </div>
            <div class="color-theme__button color-theme__button--dark">Dark</div>
        </div>
    )
}