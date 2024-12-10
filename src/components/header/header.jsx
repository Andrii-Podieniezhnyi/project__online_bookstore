import React from 'react';
import { ThemeSwitcher } from '../theme_switcher/theme_switcher';
import '../theme_switcher/theme_switcher.css';




export function Header() {
    return(
        <header>
            <section>
                <nav>
                    <div className="header_nav__container">
                        <a href="./main">Script Store</a>
                        <ThemeSwitcher />  
                    </div>
                </nav>
            </section>
        </header>
    )
}