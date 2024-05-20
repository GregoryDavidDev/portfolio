import Popup from "reactjs-popup";
import {pantheonBaseUrl} from "../lib/pantheon";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import Cross from "../res/icons/cross.svg";

export function SuccessPopup({open}) {
    return (
        <Popup open={open} modal>
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        <img src={Cross} alt="Close popup"/>
                    </button>
                    <div className="content">
                        <h2>Merci !</h2>
                        <p>Le message a bien été envoyé</p>
                    </div>
                    <div className="actions">
                        <button id="send-button" className="button-primary" onClick={close}>
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    )
}