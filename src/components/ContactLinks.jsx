import React from "react"
import {makeStyles} from "@material-ui/styles"
import {IconButton} from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    buttons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiIconButton-root': {
            background: 'white',
            margin: '25px 7px 0px',
        }
    }
}))

const ContactLinks = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.buttons}>
            <IconButton href="https://github.com/DavidRinSE"><GitHubIcon style={{color: 'black'}}/></IconButton>
            <IconButton href="https://twitter.com/DavidRinSE"><TwitterIcon style={{color: 'black'}}/></IconButton>
            <IconButton href="https://www.linkedin.com/in/david-richardson-980950101/"><LinkedInIcon style={{color: 'black'}}/></IconButton>
            <IconButton href="mailto:davidrichardsonIN@gmail.com"><EmailIcon style={{color: 'black'}}/></IconButton>
        </div>
    )
}

export default ContactLinks