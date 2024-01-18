import './LandingPage.css'
import './Page.css'
import Cursor from "../Cursor";
import MyselfCardShelf from "../MyselfCardShelf";
import ProjectShelf from "../ProjectShelf";

function ProjectsGamesPage() {
    return <div id="projects-game" className="page-base">
        <div className="cta-box">
            <div className="cta-box-part cta-box-left">
                <h1 className="text-title">Voici quelques-uns de <b>mes jeux</b><Cursor/></h1>
                <p>Étant passionné des jeux multijoueurs et des jeux qui racontent une histoire, je développe sans cesse dans mon temps libre ces types de jeux pour encore mieux connaitre le langage C# et le moteur Unity (si utilisé).</p>
            </div>
            <div className="cta-box-part cta-box-right">
                <ProjectShelf/>
            </div>
        </div>
    </div>
}

export default ProjectsGamesPage;