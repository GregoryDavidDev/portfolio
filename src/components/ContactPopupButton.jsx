import Popup from "reactjs-popup";
import React from 'react';
import GlassButton from "./GlassButton";
import "./ContactPopupButton.css"
import ReCAPTCHA from "react-google-recaptcha";
import {pantheonBaseUrl} from "../lib/pantheon";
import Cross from '../res/icons/cross.svg'

export function ContactPopupButton() {
    return (
        <Popup trigger={<button className={"button-primary"}>Me contacter</button>} modal>
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        <img src={Cross} alt="Close popup" />
                    </button>
                    <div className="content">
                        <h2>Me contacter</h2>
                        <p>Vous pouvez me contacter directement via ce formulaire ci-dessous. Je vous répondrerai ultérieurement à l'email fourni.</p>
                        <form id="contact-form" action={pantheonBaseUrl + "/messages/form?redirectTo=https://gregorydaviddev.github.io/portfolio"} method="post" className="column-form">
                            <input name="name" min="2" className="text-field rounded-options-up" placeholder="Votre nom et/ou nom d'entreprise" required/>
                            <input name="email" className="text-field" type="email" placeholder="Contact (email)" required/>
                            <textarea name="message" className="text-field rounded-options-down" placeholder="Votre message" required></textarea>
                            <div className="captcha">
                                <ReCAPTCHA sitekey="6Le6QtEpAAAAAG37ddHVxW4fI-REdosLJD5RggYq" onChange={onCaptchaChange} theme="light"/>
                            </div>
                            <p className="small-legal-text">En cliquant sur Envoyer, votre message et vos informations
                                seront envoyés vers mes serveurs et stockés jusqu'à leur lecture par moi-même. Vos
                                informations ne seront pas communiquées à des tiers (à l'exception de Firebase pour l'envoi de notifications) et resteront privées.</p>
                        </form>
                    </div>
                    <div className="actions">
                        <button id="send-button" className="button-primary not-interactable" onClick={sendContactMessage}>
                            Envoyer
                        </button>
                        <button className="button-secondary" onClick={close}>
                            Annuler
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    )
}

function onCaptchaChange(token) {
    let sendButton = document.getElementById("send-button");
    sendButton.classList.remove("not-interactable");
}

function sendContactMessage() {
    let form = document.getElementById("contact-form");
    form.requestSubmit();
}