import React from "react"
import { makeStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';
import {GitHub} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90vw',
        padding: '7px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    title: {
        fontSize: '.9em',
        fontFamily: theme.fonts.subheader,
        fontWeight: '400',
        textAlign: 'left',
        margin: '12px 0px'
    },
    text: {
        fontSize: '0.75em',
        fontFamily: theme.fonts.body,
        lineHeight: '1em',
        textAlign: 'left',
        marginLeft: '12px'
    },
    technologyText: {
        fontSize: '0.75em',
        fontFamily: theme.fonts.body,
        lineHeight: '1em',
        textAlign: 'left',
    },
    bottom: {
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '5px'
    }
}))

export default function MobileProjectCard(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <h3 className={classes.title}>{props.row.name}</h3>
            <p className={classes.text}>{props.row.description}</p>
            <div className={classes.bottom}>
                <IconButton href={props.row.repo} size="small"><GitHub style={{color: 'black'}}/></IconButton>
                <p className={classes.technologyText}>{props.row.technologies.join(", ")}</p>
            </div>
        </div>
    )
}