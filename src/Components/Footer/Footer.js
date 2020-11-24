import React from "react";

import "./Footer.css"

function Footer(){
    return(
        <footer className="foot">
            <section className="footer-content">
                <div className="footer-content_body">
                    <p>Made with love by Kwibe Merci. Turing School of Software and Design </p>
                </div>
                <div className="footer-content_icons">
                    <a href="https://www.linkedin.com/in/kwibe-merci/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/jKwibe" target="_blank" rel="noreferrer">Github</a>
                </div>
            </section>
        </footer>
    )
}

export default Footer;