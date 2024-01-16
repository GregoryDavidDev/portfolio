import './App.css';
import Header from "./components/Header";
import LandingPage from "./components/pages/LandingPage";

function App() {
    return (
        <div className="page">
            <Header/>
            <div className="page-container">
                <LandingPage/>
            </div>
        </div>
    );
}

export default App;
