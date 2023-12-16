import './LandingPage.css'
import './Page.css'
import Cursor from "../Cursor";
import ProjectCard from "../ProjectCard";
import ProjectShelf from "../ProjectShelf";

function LandingPage() {
    return <div className="page-base">
        <div className="cta-box">
            <div className="cta-box-part cta-box-left">
                <h1 className="text-title">Mon <b>portfolio</b><br/>de développeur<Cursor/></h1>
                <p>Vous pouvez découvrir ici l’ensemble de mes projets.</p>
                <button className="button-primary">Voir tous les projets</button>
            </div>
            <div className="cta-box-part cta-box-right">
                <ProjectShelf/>
            </div>
        </div>
    </div>
}

export default LandingPage;