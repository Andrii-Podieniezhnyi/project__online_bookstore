export function Header() {
    return(
        <header>
            <section>
                <nav>
                    <div className="header_nav__container">
                        <a href="./main">Script Store</a>
                        <div className="header_shopping_cart__header_user__container">
                            <ul>
                                <li>
                                    <a href="/spopping-cart">
                                        <img src="../media/header/spopping_cart.svg" alt="spopping_cart" />
                                    </a>
                                </li>
                                <li>
                                    <a href="./main">
                                        <img src="../media/header/user_default_avatar.png" alt="user_default_avatar" />
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