import './ProjectBentoCard.css'
import Default from '../res/cards/default/logo.png'
import TagElement from "./TagElement";
import React, {useEffect, useState} from "react";
import {pantheonBaseUrl} from "../lib/pantheon";
import ColorThief from "colorthief/dist/color-thief";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function ProjectBentoCard({project, fill, skeleton}) {
    const [light, setLight] = useState(false);

    function cardClickHandler() {
        if (project.url) window.open(project.url);
    }

    useEffect(() => {
        if (project === null || project === undefined) return;

        const colorThief = new ColorThief();
        const image = document.getElementById(`${project.slug}-cover`);
        if (!image) return
        image.crossOrigin = "Anonymous";
        let color;

        image.addEventListener('load', function() {
            if (image === null || colorThief === null) return;

            try {
                color = colorThief.getColor(image);
                const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                let isLight = color[0] > 128 || color[1] > 128 || color[2] > 128;

                document.getElementById(project.slug).style.backgroundColor = rgb;
                if (isLight) {
                    document.getElementById(project.slug).style.outline = "1px solid #00000055";
                }

                setLight(isLight);
            } catch (e) {

            }
        });

    }, [project]);

    if (skeleton) {
        return <div className={fill ? "bento-card bento-fill" : "bento-card"}>
            <div className="bento-card-inside light">
                <Skeleton></Skeleton>
                <Skeleton count={4}></Skeleton>
            </div>
        </div>
    }

    if (!project) return null;

    return <div id={project.slug} className={fill ? "bento-card bento-fill bento-card-animated" : "bento-card bento-card-animated"} onClick={cardClickHandler}>
        <div className={light ? "bento-card-inside dark" : "bento-card-inside light"}>
            <p className="title">{project.name}</p>
            <p className="text">{project.summary}</p>
            <img id={`${project.slug}-cover`} className="invisible-cover" alt="Project logo"
                 src={`${pantheonBaseUrl}/project/${project.slug}/cover`}></img>
            <img id={`${project.slug}-logo`} className="picture" alt="Project logo"
                 src={`${pantheonBaseUrl}/project/${project.slug}/logo`}></img>
            <div className="footer">
                <TagElement name={project.language} inverted={light}/>
                {
                    project.tags.map((answer, i) => {
                        return (<TagElement name={answer} inverted={light}/>)
                    })
                }
            </div>
        </div>
    </div>
}