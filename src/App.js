
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Projects from './Pages/Home/Projects/Projects';
import Skill from './Pages/Home/Skill/Skill';
import AboutMe from './Pages/Home/AboutMe/AboutMe';
import Contact from './Pages/Home/Contact/Contact';
import Navigation from './Pages/Home/Navigation/Navigation';
function App() {
  return (
    <div >
      <Router>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
