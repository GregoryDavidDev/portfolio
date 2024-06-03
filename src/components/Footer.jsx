import './Footer.css'
import {Logo} from "../Logo";

export function Footer() {
    return <div className="page-footer">
        <div className="footer-container">
            <div className="footer-column">
                <Logo/>
            </div>
            <div className="footer-column">
                <b>Réseaux</b>
                <a href="https://www.linkedin.com/in/gr%C3%A9gory-david-b1732029b">LinkedIn</a>
                <a href="https://github.com/GregoryDavidDev">GitHub (Pro.)</a>
                <a href="https://github.com/CacahueteSansSel">GitHub (Perso.)</a>
            </div>
            <div className="footer-column">
                <b>Portfolio</b>
                <a href="https://github.com/GregoryDavidDev/portfolio">Code source</a>
            </div>
            <div className="footer-column">
                <b>Projets</b>
                <a href="https://mclaunch.cacahuete.dev">mcLaunch</a>
                <a href="https://github.com/nitroterm">nitroterm</a>
            </div>
            <div className="footer-column">
                <b>Contact</b>
                <a onClick={contactMeHandler}>Me contacter</a>
            </div>
        </div>
        <p className="small-legal-text">Projets non open-source, logos projets et portfolio : Tout droits réservés, Copyright © Grégory DAVID, 2024. Développé avec React, propulsé par Panthéon côté backend.</p>
    </div>
}

function contactMeHandler() {
    document.getElementById("main-contact-button").click();
}