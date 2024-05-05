import './LandingPage.css'
import './Page.css'
import Cursor from "../Cursor";
import MyselfCardShelf from "../MyselfCardShelf";
import ProjectShelf from "../ProjectShelf";

function ProjectsGamesPage() {
    return <div id="projects-game" className="page-base">
        <div className="cta-box">
            <div className="cta-box-part cta-box-left">
                <h1 className="text-title">Enfin, voici <b>mes jeux</b><Cursor/></h1>
                <p>Ces projets sont principalement secondaires mais tout aussi passionnants à faire. J'ai principalement utilisé Unity et le langage C# pour ceux-ci.</p>
            </div>
            <div className="cta-box-part cta-box-right">
                <ProjectShelf/>
            </div>
        </div>
    </div>
}

export default ProjectsGamesPage;