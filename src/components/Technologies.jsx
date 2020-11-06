import React from "react"
import { makeStyles } from '@material-ui/styles';
import technologies from "../images/technologies"
import Technology from "./Technology"
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '50%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '14px',
        [theme.breakpoints.down('1025')]: {
            width: '75%'
        },
        [theme.breakpoints.down('690')]: {
            width: '80%'
        }
    },
    title: {
        fontSize: '1.75em',
        fontFamily: "'Sora', sans-serif",
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: '35px',
        [theme.breakpoints.down('1025')]: {
            fontSize: '1.15em',
        }
    },
    logoWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // alignItems: 'center',
        // '& img': {
        //     height: '75px',
        //     margin: '7px'
        // }
        [theme.breakpoints.down('690')]: {
            alignItems: 'center',
            flexDirection: 'column'
        }
    }
}))

const Technologies = () => {
    const classes = useStyles()
    const {frontend, backend, devops, tools} = technologies

    const frontendElements = frontend.map(logo => <img src={logo.img} alt="Frontend Technology"/>)
    const backendElements = backend.map(logo => <img src={logo.img} alt="Backend Technology"/>)
    const devopsElements = devops.map(logo => <img src={logo.img} alt="DevOps Technology"/>)
    const toolsElements = tools.map(logo => <img src={logo.img} alt="Development Tools"/>)

    const matches = useMediaQuery('(min-width: 690px)')
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>Technologies I Have Used</h3>
            <div className={classes.logoWrap}>
                <Technology title="FRONTEND" style={(matches) ? {marginRight: '7px',marginBottom: '7px'} : {}}>
                    {frontendElements}
                </Technology>
                <Technology title="BACKEND" style={(matches) ? {marginLeft: '7px',marginBottom: '7px'} : {}}>
                    {backendElements}
                </Technology>
                <Technology title="DEVOPS" style={(matches) ? {marginRight: '7px',marginTop: '7px'} : {}}>
                    {devopsElements}
                </Technology>
                <Technology title="TOOLS" style={(matches) ? {marginLeft: '7px',marginTop: '7px'} : {}}>
                    {toolsElements}
                </Technology>
            </div>
        </div>
    )
}

export default Technologies