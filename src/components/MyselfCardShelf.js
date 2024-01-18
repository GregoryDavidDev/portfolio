import ProjectCard from "./ProjectCard";
import {useEffect, useState} from "react";
import {fetchPantheonProjects} from  '../lib/pantheon'
import CharacterCard from "./CharacterCard";

function MyselfCardShelf() {
    return <div className="project-shelf centered">
        <CharacterCard/>
    </div>
}

export default MyselfCardShelf;