import {pantheonBaseUrl} from "../lib/pantheon";
import TagElement from "./TagElement";
import React from "react";

export function ImageBentoCard({fill, onClick, image, alt, limited}) {
    return <div className={fill ? "bento-card bento-fill" : limited ? "bento-card bento-limited" : "bento-card"} onClick={onClick}>
        <img className="bento-card-inside-fill" alt={`A bento card displaying ${alt}`} src={image}></img>
    </div>
}