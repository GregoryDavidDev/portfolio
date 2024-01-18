import './IntroductionPage.css'
import './Page.css'
import '../../Icons.css'
import Cursor from "../Cursor";
import ProjectCard from "../ProjectCard";
import ProjectShelf from "../ProjectShelf";
import MyselfCardShelf from "../MyselfCardShelf";

function IntroductionPage() {
    function scrollToProjectsFunctionGen(location) {
        return () => {
            window.location = `#projects-${location}`;
        }
    }

    return <div className="page-base">
        <div className="cta-box">
            <div className="cta-box-part cta-box-left">
                <a className="icon-linkedin" href="https://www.linkedin.com/in/gr%C3%A9gory-david-b1732029b/"></a>
                <h1 className="text-title">Je m'appelle <b>Grégory</b>, et je prévois d'être <b>Développeur C#</b><Cursor/></h1>
                <p>Je suis passionné d'informatique depuis toujours, et je fais du développement de logiciels et de jeux dans mon temps libre.</p>
                <p>Le C# est mon langage de prédilection depuis mes débuts dans la programmation.</p>
                <div className="buttons-area">
                    <button className="button-primary" onClick={scrollToProjectsFunctionGen("game")}>Voir mes jeux</button>
                    <button className="button-primary" onClick={scrollToProjectsFunctionGen("native")}>Voir mes applis</button>
                    <button className="button-primary" onClick={scrollToProjectsFunctionGen("web")}>Voir mes projets web</button>
                </div>
            </div>
            <div className="cta-box-part cta-box-right">
                <MyselfCardShelf/>
            </div>
        </div>
    </div>
}

export default IntroductionPage;