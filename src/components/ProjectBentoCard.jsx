import './ProjectBentoCard.css'
import Default from '../res/cards/default/logo.png'
import TagElement from "./TagElement";
import React from "react";
import {pantheonBaseUrl} from "../lib/pantheon";

export function ProjectBentoCard({project, fill}) {
    if (!project) return null;

    return <div className={fill ? "bento-card bento-fill" : "bento-card"}>
        <div className="bento-card-inside">
            <p className="title">{project.name}</p>
            <p className="text">{project.summary}</p>
            <img className="picture" alt="Project cover" src={`${pantheonBaseUrl}/project/${project.slug}/logo`}></img>
            <div className="footer">
                <TagElement name={project.language}/>
                {
                    project.tags.map((answer, i) => {
                        return (<TagElement name={answer}/>)
                    })
                }
            </div>
        </div>
    </div>
}