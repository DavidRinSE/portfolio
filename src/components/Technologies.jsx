import React from "react"
import { makeStyles } from '@material-ui/styles';
import technologies from "../images/technologies"
import Technology from "./Technology"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '50%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    title: {
        fontSize: '1.75em',
        fontFamily: "'Sora', sans-serif",
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: '35px'
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
    }
}))

const Technologies = () => {
    const classes = useStyles()
    const {frontend, backend, devops, tools} = technologies

    const frontendElements = frontend.map(logo => <img src={logo.img}/>)
    const backendElements = backend.map(logo => <img src={logo.img}/>)
    const devopsElements = devops.map(logo => <img src={logo.img}/>)
    const toolsElements = tools.map(logo => <img src={logo.img}/>)

    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>Technologies I Have Used</h3>
            <div className={classes.logoWrap}>
                <Technology title="FRONTEND" style={{marginRight: '7px',marginBottom: '7px'}}>
                    {frontendElements}
                </Technology>
                <Technology title="BACKEND" style={{marginLeft: '7px',marginBottom: '7px'}}>
                    {backendElements}
                </Technology>
                <Technology title="DEVOPS" style={{marginRight: '7px',marginTop: '7px'}}>
                    {devopsElements}
                </Technology>
                <Technology title="TOOLS" style={{marginLeft: '7px',marginTop: '7px'}}>
                    {toolsElements}
                </Technology>
            </div>
        </div>
    )
}

export default Technologies