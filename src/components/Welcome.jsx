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
        fontFamily: theme.fonts.header,
        fontWeight: '500',
        textAlign: 'left',
        color: theme.palette.primary.secondary,
        "& strong": {
            color: theme.palette.primary.accent1
        },
        [theme.breakpoints.down('1025')]:{
            fontSize: '3.5em',
            marginLeft: '-75px'
        },
        [theme.breakpoints.down('690')]: {
            fontSize: '2em',
            marginLeft: '-100px'
        },
        [theme.breakpoints.down('400')]: {
            fontSize: '1.75em',
        }
    },
    button: {
        width: '175px',
        height: '60px',
        marginTop: '17px',
        border: '3px solid',
        borderColor: theme.palette.primary.secondary,
        borderRadius: '5px',
        backgroundColor: 'white',
        transition: 'all 0.5s ease',
        "& p": {
            fontSize: '1em',
            fontFamily: theme.fonts.body,
            textAlign: 'center',
            marginTop: 'auto',
            lineHeight: '60px',
            cursor: 'pointer',
            [theme.breakpoints.down('1025')]: {
                fontSize: '.85em',
                lineHeight: '45px'
            },
            [theme.breakpoints.down('690')]: {
                fontSize: '.65em',
                lineHeight: '35px',
                fontWeight: '600'
            }
        },
        "&:hover, &:active": {
            backgroundColor: theme.palette.primary.accent1,
            borderColor: theme.palette.primary.accent1,
            color:  theme.palette.primary.main
        },
        [theme.breakpoints.down('1025')]: {
            width: '135px',
            height: '45px',
            marginTop: '24px',
            border: '2px solid',
            transition: 'all 0.1s ease',
        },
        [theme.breakpoints.down('690')]: {
            width: '100px',
            height: '35px'
        }
    }
}));

const Welcome = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <h1 className={`text-pop-up-tr ${classes.title}`}>Hey there! I'm <br/><strong>Dave Richardson</strong>,<br/> a full-stack developer.</h1>
            <div className={classes.button} onClick={props.scroll}><p>VIEW MY WORK</p></div>
        </div>
    );
}

export default Welcome;