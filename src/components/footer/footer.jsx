import React from "react"

export function Footer() {
    return(
        <footer>
            <section>
                <div className="footer__container">
                    <span className="footer__content">Script Store ©{new Date().getFullYear()} </span>
                    <p className="signature">Created by Andrii Podieniezhnyi</p>
                </div>
            </section>
        </footer>
    )
}