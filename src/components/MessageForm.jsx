import React from 'react'
import {makeStyles} from "@material-ui/styles"
import {TextField, Button} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        marginRight: 'auto',
        marginLeft: 'auto',
        background: 'white',
        borderRadius: '12px',
        padding: '20px 16px',
        // '& .MuiFormLabel-root': {
        //     color: 'white',
        //     padding: 0,
        //     fontSize: '1rem',
        //     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        //     fontWeight: 300,
        //     lineHeight: 1,
        //     letterSpacing: '0.00938em',
        // },
        // '& .MuiInputBase-input': {
        //     color: 'white'
        // },
        '& h3': {
            fontSize: '1em',
            fontFamily: "'Sora', sans-serif",
            fontWeight: '500',
            textAlign: 'center',
        },
        '& .MuiFormControl-root, .MuiButton-contained': {
            marginTop: '12px'
        },
        [theme.breakpoints.down('690')]: {
            width: '325px'
        }
    },
}))

const MessageForm = (props) => {
    const classes = useStyles()
    return (
        <form className={classes.form}>
            <h3>Send Me a Message</h3>
            <TextField id="email" label="Your Email" className={classes.root}/>
            <TextField id="name" label="Name" />
            <TextField id="message" label="Message" multiline rows={2}/>
            <Button variant="contained" color="primary" disabled>Send</Button>
        </form>
    )
}

export default MessageForm