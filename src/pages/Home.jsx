import React, {useRef} from "react"
import Welcome from "../components/Welcome.jsx"
import Projects from "../components/Projects.jsx"
import AboutMe from "../components/AboutMe.jsx"
import Contact from "../components/Contact.jsx"

const Home = () => {
    const projRef = useRef(null)
    const scrollToProjects = () => {
        projRef.current.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <>
            <Welcome scroll={scrollToProjects}/>
            <Projects wrapperRef={projRef}/>
            <AboutMe />
            <Contact />
        </>
    );
}

export default Home