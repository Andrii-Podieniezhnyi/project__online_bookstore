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

        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    )
}