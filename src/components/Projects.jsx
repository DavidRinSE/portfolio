import React from "react"
import { makeStyles } from '@material-ui/styles';
import Project from "./Project";
import miniFinanceImages from "../images/mini-finance"
import miniFinanceBackendImages from "../images/mini-finance-backend"
import readitImages from "../images/readit"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginBottom: '75px',
        '& h2': {
            fontSize: '2.5em',
            fontFamily: "'Sora', sans-serif",
            fontWeight: '500',
            textAlign: 'center',
            marginBottom: '50px',
            [theme.breakpoints.down('1025')]:{
                fontSize: '1.75em',
            },
            [theme.breakpoints.down('690')]: {
                fontSize: '1.5em'
            }
        }
    },
    projects: {
        maxWidth: '960px',
        width: '65vw',
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.down('1025')]: {
            width: '80vw'
        },
        [theme.breakpoints.down('690')]: {
            width: '95%',
            maxWidth: '400px'
        }
    },
}));

const Projects = () => {
    const classes = useStyles()
    const projectItems = [
        {
            name: "Mini-Finance",
            images: miniFinanceImages,
            description: 'Mini-Finance is a finance pattern charting app made with react. I built this app because I liked the pattern charting built into my banking apps but they weren\'t quite what I wanted them to be. This project ended up being a lot bigger than I expected but I was able to gain real experience with many tools I had been wanting to try. Hover or tap image to view technologies.',
            repo: 'https://github.com/DavidRinSE/Mini-Finance',
            live: 'https://mini-finance.davidr.in',
        },
        {
            name: 'Mini-Finance Backend',
            images: miniFinanceBackendImages,
            description: 'I built the entire stack for my Mini-Finance app, and for the backend I decided to try GraphQL for the first time. I had previously built a few fully featured REST APIs and wanted to branch out for this project. I also used Docker for the first time here, and it made working on the project with multiple computers way easier. I learned a lot making this with GraphQL, it was a good chance to exercise my abilities to learn as I progress through a project. Hover or tap image to view technologies.',
            repo: 'https://github.com/DavidRinSE/Mini-Finance-API',
            live: 'https://mini-finance.davidr.in',
            rightImage: true
        },
        {
            name: 'Django Reddit Clone',
            images: readitImages,
            description: 'As my final capstone project for Kenzie Academy my group made Readit, a Reddit clone made with Django. We only had two weeks to complete the project, and the majority of the focus was on the back end of the application. This was a difficult challenge, we were much more comfortable with Javascript for web applications at the beginning of this project. This was a great opportunity to put the Agile practices we had learned to use in a group project. Hover or tap image to view technologies.',
            repo: 'https://github.com/DavidRinSE/Readit-capstone'
        }
    ]
    const projects = projectItems.map(project => <><Project data={project}/>{project.break && <div className={classes.break} />}</>)
    return (
        <div className={classes.wrapper}>
            <h2>Projects</h2>
            <div className={classes.projects}>
                {projects}
            </div>
        </div>
    );
}

export default Projects;