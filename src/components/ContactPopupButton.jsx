import Popup from "reactjs-popup";
import React from 'react';
import GlassButton from "./GlassButton";
import "./ContactPopupButton.css"

export function ContactPopupButton() {
    return (
        <Popup trigger={<button className={"button-primary"}>Me contacter</button>} modal>
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="content">
                        <h2>Me contacter</h2>
                        <p>Vous pouvez me contacter directement via ce formulaire ci-dessous. Je vous répondrerai ultérieurement à l'email fourni.</p>
                        <form className="column-form">
                            <input className="text-field rounded-options-up" placeholder="Votre nom et/ou nom d'entreprise"/>
                            <input className="text-field" type="email" placeholder="Contact (email)"/>
                            <textarea className="text-field rounded-options-down" placeholder="Votre message"></textarea>
                            <p className="small-legal-text">En cliquant sur envoyer, votre message et vos informations
                                seront envoyés vers mes serveurs et stockés jusqu'à sa lecture par moi-même. Vos
                                informations ne seront pas communiquées à des tiers et resterons privées.</p>
                        </form>
                    </div>
                    <div className="actions">
                        <button className="button-primary" onClick={close}>
                            Envoyer
                        </button>
                        <button className="button-primary" onClick={close}>
                            Annuler
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    )
}