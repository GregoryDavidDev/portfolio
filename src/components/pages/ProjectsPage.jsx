import {ProjectBentoCard} from "../ProjectBentoCard";


export function ProjectsPage() {
    return <div className="page-base left-header-page">
        <div className="left-header-text-wrap">
            <h1 className="left-header-text">PROJETS</h1>
        </div>
        <div className="left-header-fill bento-card-container">
            <div className="bento-card-row">
                <ProjectBentoCard fill={true}/>
                <ProjectBentoCard/>
            </div>
            <div className="bento-card-row">
                <ProjectBentoCard/>
                <ProjectBentoCard fill={true}/>
            </div>
        </div>
    </div>
}