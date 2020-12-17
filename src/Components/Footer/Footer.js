import React from "react";

import "./Footer.scss"

function Footer(){
    return(
        <footer className="foot">
            <section className="footer-content">
                <div className="footer-content_body">
                    <p>Made with love by Kwibe Merci. Turing School of Software and Design </p>
                </div>
                <div className="footer-content_icons">
                    <a href="https://www.linkedin.com/in/kwibe-merci/" className="footer-icon" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/jKwibe" className="footer-icon" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer;