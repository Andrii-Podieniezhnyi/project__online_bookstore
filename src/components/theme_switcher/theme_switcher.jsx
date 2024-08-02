import React, { useState, useEffect} from "react";

export function ThemeSwitcher() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');

        return savedTheme ? savedTheme : 'light_theme';
    })


    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light_theme' ? 'dark_theme' : 'light_theme'))
    }


    return (
        


        <div className="color_theme_switcher" onClick={toggleTheme}>
            <div className="color_theme_switcher__button_light">Light</div>
                <div className="color_theme_switcher__indication">
                    <div className="color_theme_switcher__indication_ico"></div>
                </div>
            <div className="color_theme_switcher__button_dark">Dark</div>
        </div>
    )
}