import {pantheonBaseUrl} from "../lib/pantheon";
import TagElement from "./TagElement";
import React from "react";
import './PassionBentoCard.css'

export function PassionBentoCard({fill, onClick, title, text}) {
    return <div className={fill ? "bento-card bento-fill passion-bento-card" : "bento-card passion-bento-card"} onClick={onClick}>
        <div className="bento-card-inside dark">
            <p className="centered-title">{title}</p>
            <p className="centered-small-text">{text}</p>
        </div>
    </div>
}