import './App.css';
import ReCAPTCHA from "react-google-recaptcha";
import Header from "./components/Header";
import ProjectsGamesPage from "./components/pages/ProjectsGamesPage";
import IntroductionPage from "./components/pages/IntroductionPage";
import ProjectsNativesPage from "./components/pages/ProjectsNativesPage";
import ProjectsWebPage from "./components/pages/ProjectsWebPage";
import Background from "./components/Background";

function App() {
    return (
        <div className="page">
            <Background/>
            <Header/>
            <div className="page-container">
                <IntroductionPage/>
                <ProjectsWebPage/>
                <ProjectsNativesPage/>
                <ProjectsGamesPage/>
            </div>
        </div>
    );
}

export default App;
