import React from "react"

export function Footer() {
    return(
        <footer>
            <section>
                <div className="footer__container">
                    <span className="footer__content">Script Store © </span>
                    <p className="signature">{new Date().getFullYear()} Created by Andrii Podieniezhnyi</p>
                </div>
            </section>
        </footer>
    )
}