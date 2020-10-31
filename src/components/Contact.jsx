import React from "react"
import {makeStyles} from "@material-ui/styles"
import MessageForm from "./MessageForm"
import ContactLinks from "./ContactLinks"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        backgroundColor: '#1e1e1e',
        padding: '75px 0px',
        clipPath: 'polygon(0 20px, 100% 0, 100% 100%, 0 100%)',
        '& h2': {
            fontSize: '2.5em',
            fontFamily: "'Sora', sans-serif",
            fontWeight: '500',
            textAlign: 'center',
            marginBottom: '50px',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white'
        }
    }
}))

const Contact = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <h2>Contact Me</h2>
            <MessageForm />
            <ContactLinks />
        </div>
    )
}

export default Contact