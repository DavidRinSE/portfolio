import React from "react"
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import "./ProjectAnimations.css"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        height: '265px',
        [theme.breakpoints.up('1920')]: {
            height: '325px'
        },
        // height: '33.33vh',
        display: 'flex',
        flexDirection: 'row',
    },
    rightImage: {
        flexDirection: 'row-reverse'
    },
    imageWrap: {
        height: '100%',
        paddingRight:'265px',
        [theme.breakpoints.up('1920')]: {
            paddingRight: '325px'
        },
        position: 'relative',
        '& img': {
            height: '100%',
            position: 'absolute',
            transition: 'all .4s ease',
            top: 0,
        }
    },
    textWrap: {
        height: '100%',
        padding: '0px 15px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    title: {
        fontSize: '1.25em',
        fontFamily: "'Sora', sans-serif",
        fontWeight: '400',
        textAlign: 'center',
        margin: '12px 0px'
    },
    text: {
        // width: '85%',
        fontSize: '0.90em',
        fontFamily: 'Montserrat',
        lineHeight: '1.15em'
    },
    links: {
        margin: '12px 0px',
        // width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
    },
}));

const Project = (props) => {
    const classes = useStyles()
    const { data } = props

    return (
        <div className={`${classes.wrapper} ${data.rightImage ? classes.rightImage : ''}`}>
            <div className={`imageWrapAnimation ${classes.imageWrap}`}>  {/* Image animation solution found here: https://stackoverflow.com/a/13034571/13558496 */}
                <img src={data.images.foreground} />
                {data.images.background && <img src={data.images.background} />}
            </div>
            <div className={classes.textWrap}>
                <h3 className={classes.title}>{data.name}</h3>
                <p className={classes.text}>{data.description}</p>
                <div className={classes.links}>
                    {/* {data.repo && <a className={classes.link1} href={data.repo}>See The Code</a>}
                    {data.live && <a className={classes.link2} href={data.live}>Live App</a>}
                    {data.video && <a className={classes.link3} href={data.video}>Video Demo</a>} */}
                    {data.repo && <Button variant="contained" color="primary" href={data.repo} style={{marginRight: '7px'}}>View Code</Button>}
                    {data.live && <Button variant="contained" color="secondary" href={data.live}>Live App</Button>}
                    {/* {data.video && <a className={classes.link3} href={data.video}>Video Demo</a>} */}
                </div>
            </div>
        </div>
    );
}

export default Project;