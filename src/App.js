import './App.css';
import ReCAPTCHA from "react-google-recaptcha";
import Header from "./components/Header";
import ProjectsGamesPage from "./components/pages/ProjectsGamesPage";
import IntroductionPage from "./components/pages/IntroductionPage";
import ProjectsNativesPage from "./components/pages/ProjectsNativesPage";
import ProjectsWebPage from "./components/pages/ProjectsWebPage";
import Background from "./components/Background";
import Popup from "reactjs-popup";
import {SuccessPopup} from "./components/SuccessPopup";
import SpacerPage from "./components/pages/SpacerPage";
import {ProjectsPage} from "./components/pages/ProjectsPage";

function App() {
    const queryParameters = new URLSearchParams(window.location.search)
    const success = queryParameters.get("success") === "true"

    window.addEventListener("scroll", _ => {
        let header = document.getElementById('header')

        if (window.scrollY) header.classList.add('header-over-elements')
        else header.classList.remove('header-over-elements')
    })

    return (
        <div className="page">
            <Background/>
            <Header/>
            <div className="page-container">
                <IntroductionPage/>
                <SpacerPage/>
                <ProjectsPage/>
            </div>
            <SuccessPopup open={success ?? false}></SuccessPopup>
        </div>
    );
}

export default App;
