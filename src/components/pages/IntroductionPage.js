import './IntroductionPage.css'
import './Page.css'
import '../../Icons.css'
import Cursor from "../Cursor";
import ProjectCard from "../ProjectCard";
import ProjectShelf from "../ProjectShelf";
import MyselfCardShelf from "../MyselfCardShelf";
import { useSpring, animated } from '@react-spring/web'
import GlassButton from "../GlassButton";
import Popup from "reactjs-popup";
import {ContactPopupButton} from "../ContactPopupButton";

function IntroductionPage() {
    function scrollToProjectsFunctionGen(location) {
        return () => {
            window.location = `#projects-${location}`;
        }
    }

    return <div className="page-base page-first page-fixed-height-small">
        <a className="icon-linkedin" href="https://www.linkedin.com/in/gr%C3%A9gory-david-b1732029b/"></a>
        <p className="title-supplement">Je m’appelle Grégory, et je suis étudiant pour devenir</p>
        <h1 className="text-title-bold">Développeur Backend</h1>
    </div>
}

export default IntroductionPage;