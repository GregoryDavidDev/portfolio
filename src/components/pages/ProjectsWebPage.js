import './LandingPage.css'
import './Page.css'
import Cursor from "../Cursor";
import ProjectShelf from "../ProjectShelf";

function ProjectsNativesPage() {
    return <div id="projects-web" className="page-base">
        <div className="cta-box">
            <div className="cta-box-part cta-box-left">
                <h1 className="text-title">Voici mes projets en <b>Backend web</b><Cursor/></h1>
                <p><b>ASP.NET</b> et <b>Entity Framework</b> sont les technologies prédominantes dans ces projets, mais je suis également prêt à apprendre d'autres technologies pour approfondir mes connaissances.</p>
            </div>
            <div className="cta-box-part cta-box-right">
                <ProjectShelf category="web"/>
            </div>
        </div>
    </div>
}

export default ProjectsNativesPage;