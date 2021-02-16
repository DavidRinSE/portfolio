import React, {useState} from 'react'
import {makeStyles} from "@material-ui/styles"
import {TextField, Button} from "@material-ui/core"
import { Alert, AlertTitle } from '@material-ui/lab';
import { useForm } from "react-hook-form";

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
            fontFamily: theme.fonts.subheader,
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
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)
    const [formFail, setFormFail] = useState(false)
    const { register, handleSubmit, errors } = useForm();

    const submitForm = (data) => {
        setButtonDisabled(true)
        setFormSuccess(false)
        setFormFail(false)
        const url = 'https://upqa7matc6.execute-api.us-east-2.amazonaws.com/production/submit' // AWS Lambda function to email me form submissions
        try {
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
            }).then(res => res.json()).then(res => {
                console.log(res)
                setButtonDisabled(false)
                if(res.message === 'Email sent successfully') {
                    setFormSuccess(true)
                } else {
                    setFormFail(true)
                }
            });
        } catch (err) {
            console.log(err)
            setFormFail(true)
            setButtonDisabled(false)
        }
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
            <h3>Send Me a Message</h3>
            <TextField 
                name="email"
                label="Your Email"
                className={classes.root}
                inputRef={register({ 
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                    }
                })}
                error={errors.email}
                helperText={errors.email && (errors.email.message ? errors.email.message : "Required field")}
            />
            <TextField name="name" label="Name" inputRef={register({ required: true })} error={errors.name} helperText={errors.name ? 'Required field': ''}/>
            <TextField name="message" label="Message" multiline rows={3} inputRef={register({ required: true })} error={errors.message} helperText={errors.message ? 'Required field': ''}/>
            <Button variant="contained" color="primary" disabled={buttonDisabled} type="submit">Send</Button>
            {formSuccess && <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Message sent successfully!
            </Alert>}
            {formFail && <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                There was a problem sending this message. Please try again, or use my contact links.
            </Alert>}
        </form>
    )
}

export default MessageForm