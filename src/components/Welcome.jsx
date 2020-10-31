import React from 'react';
import './WelcomeAnimations.css'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '5em',
        fontFamily: "'Sora', sans-serif",
        fontWeight: '500',
        textAlign: 'left',
        "& strong": {
            color: '#c64349'
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '2em',
            margin: '0px 0px 0px -100px'
        }
    },
    button: {
        width: '175px',
        height: '60px',
        marginTop: '17px',
        border: '3px solid',
        borderColor: 'black',
        borderRadius: '5px',
        backgroundColor: 'white',
        transition: 'all 0.5s ease',
        "& p": {
            fontSize: '1em',
            fontFamily: 'Montserrat',
            textAlign: 'center',
            marginTop: 'auto',
            lineHeight: '60px',
            cursor: 'pointer',
            [theme.breakpoints.down('sm')]: {
                fontSize: '.85em',
                lineHeight: '45px'
            }
        },
        "&:hover, &:active": {
            backgroundColor: '#c64349',
            borderColor: '#c64349',
            color: 'white'
        },
        [theme.breakpoints.down('sm')]: {
            width: '135px',
            height: '45px',
            marginTop: '24px',
            border: '2px solid',
            transition: 'all 0.1s ease',
        }
    }
}));

const Welcome = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <h1 className={`text-pop-up-tr ${classes.title}`}>Hey there! I'm <br/><strong>Dave Richardson</strong>,<br/> a full-stack developer.</h1>
            <div className={classes.button}><p>VIEW MY WORK</p></div>
        </div>
    );
}

export default Welcome;