import React from "react"
import { makeStyles } from '@material-ui/styles';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Box, Collapse, IconButton, Typography, Paper } from '@material-ui/core';
import {KeyboardArrowDown, KeyboardArrowUp, GitHub} from '@material-ui/icons';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow>
            <TableCell component="th" scope="row" style={{'whiteSpace':'nowrap', 'fontWeight':'bold'}}>
                {row.name}
            </TableCell>
            <TableCell style={{'width':'40%'}}>
                {row.description}
            </TableCell>
            <TableCell align="right">
                {row.repo && <IconButton href={row.repo}><GitHub style={{color: 'black'}}/></IconButton>}
            </TableCell>
            <TableCell align="right">
                {row.technologies && row.technologies.join(", ")}
            </TableCell>
            </TableRow>
            <TableRow>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    {name: 'Django Reddit Clone', repo: 'https://github.com/DavidRinSE/Readit-capstone', description:'Kenzie Academy Capstone', technologies: ["Python", "Django"]},
    {name: 'Serverless Contact Submission', repo: 'https://github.com/DavidRinSE/serverless-contact-submission', description:'An AWS lambda function for contact form', technologies: ['JavaScript', 'Serverless', 'SES']}
]

export default function MoreProjects() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="projects table">
                <TableBody>
                    {rows.map((row) => (
                    <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}