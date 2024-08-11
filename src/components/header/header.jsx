import React from 'react';
import user_default_avatar from '../../media/header/user_default_avatar.png';
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
                        <div className="header_user__container">
                            <ul>
                                <li>
                                    <a href="./main">
                                        <img src={user_default_avatar} alt="user_default_avatar"/>
                                    </a>
                                    <span className="user_name">Coder</span>
                                </li>
                            </ul>
                        </div>  
                    </div>
                </nav>
            </section>
        </header>
    )
}