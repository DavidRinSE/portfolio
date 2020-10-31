import React from "react"
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '48%',
        border: '2px solid #1e1e1e',
        borderRadius: '10px'
    },
    header: {
        backgroundColor: '#1e1e1e',
        width: '100%',
        height: '35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px 5px 0px 0px',
        '& h3': {
            fontSize: '.95em',
            fontFamily: "'Sora', sans-serif",
            fontWeight: '500',
            textAlign: 'center',
            color: 'white'
        }
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px 0',
        '& img': {
            objectFit: 'cover',
            height: '100%',
            width: '20%',
            margin: '5px'
        }
    }
}))

const Technology = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper} style={props.style}>
            <div className={classes.header}>
                <h3>{props.title}</h3>
            </div>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

export default Technology