import React from "react";
import { makeStyles } from '@material-ui/styles';
import profile from "../images/profile2.jpeg"
import Technologies from "./Technologies"
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        minHeight: '100vh',
        '& h2': {
            fontSize: '2.5em',
            fontFamily: theme.fonts.header,
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
    imageWrapper: {
        position: 'relative',
        maxWidth: '212px',
        width: '100%',
        margin: '0px 25px',
        '&:before': {
            content: '""',
            display: 'block',
            paddingTop: '100%',
        },
        [theme.breakpoints.down('690')]: {
            width: '35%',
            marginTop: '7px'
        }
    },
    image: {
        backgroundImage: `url(${profile})`,
        backgroundSize: 'cover',
        backgroundPosition: '75% center',
        border: '3px solid #5b81aa',
        borderRadius: '50%',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    story: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1258px',
        width: '75vw',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        border: '5px solid #1e1e1e',
        borderRadius: '12px',
        marginBottom: '50px',
        [theme.breakpoints.down('1025')]: {
            width: '90vw'
        },
        [theme.breakpoints.down('690')]: {
            flexDirection: 'column',
            height: 'auto'
        }
    },
    textWrap: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        clipPath: 'polygon(15px 0, 101% 0, 101% 100%, 0 100%)',
        '& h3': {
            fontSize: '1.5em',
            fontFamily: theme.fonts.subheader,
            fontWeight: '500',
            textAlign: 'center',
            margin: '12px 0px',
            color: 'white'
        },
        '& p': {
            width: '80%',
            fontSize: '1em',
            lineHeight: '120%',
            fontFamily: theme.fonts.body,
            ineHeight: '1.15em',
            color: 'white'
        },
        [theme.breakpoints.down('1025')]: {
            '& h3': {
                fontSize: '1.15em',
            },
            '& p': {
                width: '90%',
                fontSize: '.8em',
                lineHeight: '150%'
            },
        },
        [theme.breakpoints.down('960')]: {
            clipPath: 'polygon(0 15px, 101% 0, 101% 101%, 0 101%)',
            padding: '10px 0'
        }
    }
}))

const AboutMe = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <Fade up>
                <h2>About Me</h2>
            </Fade>
            <Fade up>
                <div className={classes.story}>
                    <div className={classes.imageWrapper}>
                        <div className={classes.image}></div>
                    </div>
                    <div className={classes.textWrap}>
                        <h3>Hello, I'm Dave!</h3>
                        <p>I have a passion for building things, and I love using code to solve complicated problems. I am a proud graduate of Kenzie Academy and a Kenzie certified Full-Stack Web Developer. My programing journey began as a highschool student, making apps in my free time to solve any problem I could come up with. Attending Kenzie Academy took the experience I had self-teaching development in highschool and expanded those skills, teaching me how to contribute on larger projects with teams using current professional tools and techniques.</p>
                    </div>
                </div>
            </Fade>
            <Technologies/>
        </div>
    )
}

export default AboutMe