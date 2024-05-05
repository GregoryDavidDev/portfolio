import './ProjectCard.css'
import me from '../res/profile/me.png'
import React, { useState } from 'react';
import {pantheonBaseUrl} from "../lib/pantheon";
import TagElement from "./TagElement";

function CharacterCard() {
    return <div className="project-card wiggle">
        <div className="inner">
            <div className="covers">
                <img className="cover cover-back"/>
                <img className="cover" src={me}/>
            </div>
            <div className="infos">
                <p className="project-title">Grégory DAVID</p>
                <div className="tags-box">
                    <TagElement name="Développeur"/>
                    <TagElement name="Étudiant"/>
                </div>
                <p>Un passionné du développement cherchant à être développeur backend. Actuellement étudiant à Bordeaux Ynov Campus pour une durée de 5 ans (mastère).</p>
            </div>
        </div>
    </div>
}

export default CharacterCard;