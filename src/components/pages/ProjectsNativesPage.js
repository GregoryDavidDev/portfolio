import './LandingPage.css'
import './Page.css'
import Cursor from "../Cursor";
import ProjectShelf from "../ProjectShelf";

function ProjectsNativesPage() {
    return <div id="projects-native" className="page-base">
        <div className="cta-box">
            <div className="cta-box-part cta-box-left">
                <h1 className="text-title">Et voici également mes <b>applications de bureau</b><Cursor/></h1>
                <p>J'aime beaucoup développer mes propres outils à l'aide d'Avalonia ou quelconque autre framework pour le langage C#. En voici quelques-uns.</p>
            </div>
            <div className="cta-box-part cta-box-right">
                <ProjectShelf category="native"/>
            </div>
        </div>
    </div>
}

export default ProjectsNativesPage;