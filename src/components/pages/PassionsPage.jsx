import {ProjectBentoCard} from "../ProjectBentoCard";
import {TextBentoCard} from "../TextBentoCard";
import {ImageBentoCard} from "../ImageBentoCard";
import {PassionBentoCard} from "../PassionBentoCard";

export function PassionsPage() {
    return <div className="page-base left-header-page">
        <div className="left-header-text-wrap">
            <h1 className="left-header-text">PASSIONS</h1>
        </div>
        <div className="left-header-fill bento-card-container-column">
            <div className="bento-card-row">
                <PassionBentoCard title={"Développement et informatique"} text={"Développement backend et logiciel"} fill={true}></PassionBentoCard>
                <PassionBentoCard title={"Design"} text={"Maquettage, conception de logos, branding"}></PassionBentoCard>
            </div>
            <div className="bento-card-row">
                <PassionBentoCard title={"Remplir cette page"} text={"M’élargir et découvrir de nouvelles passions, c'est aussi pour moi une passion"} fill={true}></PassionBentoCard>
            </div>
        </div>
    </div>
}