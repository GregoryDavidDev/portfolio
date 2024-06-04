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
import TextTransition, {presets} from "react-text-transition";
import {useEffect, useState} from "react";
import {notify} from "../../lib/pantheon";

const TEXTS = ['Backend', 'Logiciel', 'C#'];

function IntroductionPage() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    function scrollToProjectsFunctionGen(location) {
        return () => {
            window.location = `#projects-${location}`;
        }
    }

    return <div className="page-base page-first page-fixed-height-medium">
        <a className="icon-linkedin" href="https://www.linkedin.com/in/gr%C3%A9gory-david-b1732029b/"></a>
        <p className="title-supplement">Je m’appelle Grégory, et je suis étudiant pour devenir</p>
        <div className="title-row">
            <h1 className="text-title-bold">Développeur</h1>
            <TextTransition springConfig={presets.wobbly} className="text-title-bold">{TEXTS[index % TEXTS.length]}</TextTransition>
        </div>
    </div>
}

export default IntroductionPage;