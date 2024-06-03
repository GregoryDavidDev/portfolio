import {pantheonBaseUrl} from "../lib/pantheon";
import TagElement from "./TagElement";
import React from "react";

export function TextBentoCard({fill, onClick, title, text}) {
    return <div className={fill ? "bento-card bento-fill" : "bento-card"} onClick={onClick}>
        <div className="bento-card-inside dark">
            <p className="title">{title}</p>
            <p className="">{text}</p>
        </div>
    </div>
}