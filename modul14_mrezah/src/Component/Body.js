import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    },
}));

function createData(Title, Subtitle, isbn13, Price, Image, Url) {
    return { Title, Subtitle, isbn13, Price, Image, Url};
}

const rows = [
    createData('Deno Succinctly','', '9781642002140','$0.00','https://itbook.store/img/books/9781642002140.png','https://itbook.store/books/9781642002140'),
    createData('Robotics, AI, and Humanity','Science, Ethics, and Policy', '9783030541729','$59.99','https://itbook.store/img/books/9783030541729.png','https://itbook.store/books/9783030541729'),
    createData('Introduction to Autonomous Robots, 3rd Edition','', '9781493773077','$20.99','https://itbook.store/img/books/9781493773077.png','https://itbook.store/books/9781493773077'),
    createData('Learning Go','An Idiomatic Approach to Real-World Go Programming', '9781492077213','$35.88','https://itbook.store/img/books/9781492077213.png','https://itbook.store/books/9781492077213'),
    createData('Open Workbook of Cryptology','A project-based introduction to crypto in Python', '1001656678502','$0.00','https://itbook.store/img/books/1001656678502.png','https://itbook.store/books/1001656678502'),
];

export default function CustomizedTables() {
    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, 'td, th': { border: 3 } }} aria-label="customized table">
        <TableHead>
            <TableRow>
                <StyledTableCell align="center">Title</StyledTableCell>
                <StyledTableCell align="center">Subtitle</StyledTableCell>
                <StyledTableCell align="center">ISBN 13</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Image</StyledTableCell>
                <StyledTableCell align="center">URL</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <StyledTableRow key={row.Title}>
                <StyledTableCell component="th" scope="row">
                {row.Title}
                </StyledTableCell>
                <StyledTableCell align="center">{row.Subtitle}</StyledTableCell>
                <StyledTableCell align="center">{row.isbn13}</StyledTableCell>
                <StyledTableCell align="center">{row.Price}</StyledTableCell>
                <StyledTableCell align="center"><img src={row.Image}></img></StyledTableCell>
                <StyledTableCell align="center"><a href={row.Url}>{row.Url}</a></StyledTableCell>
            </StyledTableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    );
}