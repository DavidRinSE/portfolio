import React from "react"
import Welcome from "../components/Welcome.jsx"
import Projects from "../components/Projects.jsx"
import AboutMe from "../components/AboutMe.jsx"
import Contact from "../components/Contact.jsx"

const Home = () => {
    return (
        <>
            <Welcome />
            <Projects />
            <AboutMe />
            <Contact />
        </>
    );
}

export default Home