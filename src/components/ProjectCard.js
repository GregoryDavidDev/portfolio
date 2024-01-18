import './ProjectCard.css'
import React, { useState } from 'react';
import {pantheonBaseUrl} from "../lib/pantheon";
import TagElement from "./TagElement";

function ProjectCard({project}) {
    function onCardClick(element) {
        if (project.url === undefined || project.url.length === 0) return;

        window.open(project.url);
    }

    return <div className="project-card wiggle" onClick={onCardClick}>
        <div className="inner">
            <div className="covers">
                <img className="cover cover-back" src={`${pantheonBaseUrl}/project/${project.slug}/cover`}/>
                <img className="cover cover-fit" src={`${pantheonBaseUrl}/project/${project.slug}/logo`}/>
            </div>
            <div className="infos">
                <p className="project-title">{project.name}</p>
                <div className="tags-box">
                    <TagElement name={project.language}/>
                    {
                        project.tags.map((answer, i) => {
                          return (<TagElement name={answer}/>)
                        })
                    }
                </div>
                <p>{project.summary}</p>
            </div>
        </div>
    </div>
}

export default ProjectCard;