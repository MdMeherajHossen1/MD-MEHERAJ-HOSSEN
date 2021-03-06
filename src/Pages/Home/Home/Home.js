import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects'
import Skill from '../Skill/Skill'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;