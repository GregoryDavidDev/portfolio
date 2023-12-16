import ProjectCard from "./ProjectCard";
import {useEffect, useState} from "react";
import {fetchPantheonProjects} from  '../lib/pantheon'

function ProjectShelf() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchPantheonProjects()
            .then(async data => {
                setProjects(await data.json())
            })
    }, []);

    if (projects.length < 3) {
        return <p>Loading</p>
    }

    return <div className="project-shelf">
        <ProjectCard project={projects[0]}/>
        <ProjectCard project={projects[1]}/>
        <ProjectCard project={projects[2]}/>
    </div>
}

export default ProjectShelf;