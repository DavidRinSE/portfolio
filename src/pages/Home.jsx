import React from "react"
import Welcome from "../components/Welcome.jsx"
import Projects from "../components/Projects.jsx"
import AboutMe from "../components/AboutMe.jsx"

const Home = () => {
    return (
        <>
            <Welcome />
            <Projects />
            <AboutMe />
        </>
    );
}

export default Home