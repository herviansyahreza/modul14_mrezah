import React from "react";
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbr(){
    return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
        </Container>
    </Navbar>

    </>
    )
}

export default Navbr;