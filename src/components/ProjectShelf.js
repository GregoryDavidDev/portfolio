import ProjectCard from "./ProjectCard";
import {useEffect, useState} from "react";
import {fetchPantheonProjects, fetchPantheonProjectsByCategory} from '../lib/pantheon'

function ProjectShelf({category}) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (category === undefined) {
            fetchPantheonProjects()
                .then(async data => {
                    setProjects(await data.json())
                })
        } else {
            fetchPantheonProjectsByCategory(category)
                .then(async data => {
                    setProjects(await data.json())
                })
        }
    }, [category]);

    if (projects.length === 0) {
        return <p>Loading</p>
    }

    let finalArray = projects;
    if (finalArray.length > 3) finalArray = projects.slice(0, 3);

    return <div className="project-shelf">
        {
            finalArray.map((project, i) => {
                return (<ProjectCard project={project}/>)
            })
        }
    </div>
}

export default ProjectShelf;