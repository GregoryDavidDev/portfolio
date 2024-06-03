import {ProjectBentoCard} from "../ProjectBentoCard";
import {TextBentoCard} from "../TextBentoCard";
import {ImageBentoCard} from "../ImageBentoCard";
import Head from '../../res/profile/me.png'

const abText = "Je suis passionné d'informatique depuis toujours, et je fais du développement de logiciels et de jeux dans mon temps libre.\n" +
    "\n" +
    "Le C# est mon langage de prédilection depuis mes débuts dans la programmation, mais je souhaite également me former dans d'autres langages.";

export function AboutMePage() {
    return <div className="page-base left-header-page">
        <div className="left-header-text-wrap">
            <h1 className="left-header-text">À PROPOS</h1>
        </div>
        <div className="left-header-fill bento-card-container-column">
            <div className="bento-card-row">
                <TextBentoCard text={abText} fill={true}></TextBentoCard>
                <ImageBentoCard alt="my face" image={Head} limited={true}/>
            </div>
        </div>
    </div>
}