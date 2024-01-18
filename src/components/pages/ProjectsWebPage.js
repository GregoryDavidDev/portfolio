import './LandingPage.css'
import './Page.css'
import Cursor from "../Cursor";
import ProjectShelf from "../ProjectShelf";

function ProjectsNativesPage() {
    return <div id="projects-web" className="page-base">
        <div className="cta-box">
            <div className="cta-box-part cta-box-left">
                <h1 className="text-title">Et je fais aussi du développement <b>backend web</b><Cursor/></h1>
                <p>J'ai récemment commencé à apprendre <b>ASP.NET</b> et <b>Entity Framework</b> pour concevoir des APIs et du backend en C#.</p>
            </div>
            <div className="cta-box-part cta-box-right">
                <ProjectShelf category="web"/>
            </div>
        </div>
    </div>
}

export default ProjectsNativesPage;