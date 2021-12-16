import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Header/Navigation';
import Home from './Components/Home/Home';
import AboutUs from './Components/About_Us/AboutUs';
import Footer from './Components/Footer/Footer';
import Team from './Components/Team/Team';
import JoinUs from './Components/Join_Us/JoinUs';
import Announcements from './Components/Announcements/Announcements';
import {
    BrowserRouter as Router,
} from "react-router-dom";

function App() {
    return (
        <>
            <div className="App">
                <Router>
                    <Navigation />
                    <Home />
                    <AboutUs />
                    <JoinUs />
                    <Announcements />
                    <Team />
                    <Footer />

                </Router>
            </div>
        </>

    );
}

export default App;
