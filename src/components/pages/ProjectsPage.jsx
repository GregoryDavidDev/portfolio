import {ProjectBentoCard} from "../ProjectBentoCard";
import {useEffect, useState} from "react";
import {fetchPantheonProjects, fetchPantheonProjectsByCategory} from "../../lib/pantheon";


export function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchPantheonProjects()
            .then(async data => {
                setProjects(await data.json())
            })
    }, []);

    if (projects.length === 0) {
        return <p>Loading</p>
    }

    let finalArray = projects;
    if (finalArray.length > 4) finalArray = projects.slice(0, 4);

    return <div className="page-base left-header-page">
        <div className="left-header-text-wrap">
            <h1 className="left-header-text">PROJETS</h1>
        </div>
        <div className="left-header-fill bento-card-container">
            <div className="bento-card-row">
                <ProjectBentoCard project={finalArray[0]} fill={true}/>
                <ProjectBentoCard project={finalArray[1]}/>
            </div>
            <div className="bento-card-row">
                <ProjectBentoCard project={finalArray[2]}/>
                <ProjectBentoCard project={finalArray[3]} fill={true}/>
            </div>
        </div>
    </div>
}