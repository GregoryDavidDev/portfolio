import {pantheonBaseUrl} from "../lib/pantheon";
import TagElement from "./TagElement";
import React from "react";
import './PassionBentoCard.css'
import {ContactPopupButton} from "./ContactPopupButton";

export function ContactBentoCard({fill, onClick}) {
    return <div className={fill ? "bento-card bento-fill" : "bento-card"} onClick={onClick}>
        <div className="bento-card-inside dark gapped">
            <ContactPopupButton></ContactPopupButton>
            <p className="small-text">Je recevrai très rapidement la notification de votre message</p>
        </div>
    </div>
}