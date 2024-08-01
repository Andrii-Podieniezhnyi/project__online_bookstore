import React, { useState, useEffect} from "react";

export function ThemeSwitcher() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');

        return savedTheme ? savedTheme : 'light';
    })



}