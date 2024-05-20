import {PassionBentoCard} from "../PassionBentoCard";
import {ContactBentoCard} from "../ContactBentoCard";

export function ContactPage() {
    return <div className="page-base left-header-page">
        <div className="left-header-text-wrap">
            <h1 className="left-header-text">CONTACT</h1>
        </div>
        <div className="left-header-fill bento-card-container-row">
            <div className="bento-card-column">
                <PassionBentoCard text={"Vous êtes interessé par mon profil ?\n" +
                    "Contactez-moi directement depuis ce site, et je vous recontacterai rapidement !"} fill={true}></PassionBentoCard>
                <PassionBentoCard></PassionBentoCard>
            </div>
            <div className="bento-card-column">
                <ContactBentoCard fill={true}></ContactBentoCard>
            </div>
        </div>
    </div>
}