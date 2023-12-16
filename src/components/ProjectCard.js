import './ProjectCard.css'
import React, { useState } from 'react';
import {pantheonBaseUrl} from "../lib/pantheon";

function ProjectCard({project}) {
    return <div className="project-card">
        <div className="inner">
            <div className="covers">
                <img className="cover cover-back" src={`${pantheonBaseUrl}/project/${project.slug}/cover`}/>
                <img className="cover cover-fit" src={`${pantheonBaseUrl}/project/${project.slug}/logo`}/>
            </div>
            <div className="infos">
                <p className="project-title">{project.name}</p>
                <p>{project.summary}</p>
            </div>
        </div>
    </div>
}

export default ProjectCard;