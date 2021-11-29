import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import image from '../../../images/portfolio1.png'
const Navigation = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" style={{ height: '50px' }}>
                        <img src={image} alt="" style={{ BorderRadius: '25px', width: '50px' }} />
                        MEHERAJ HOSSEN
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/skill">Skills</Nav.Link>
                            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                            <Nav.Link as={Link} to="/aboutme">About-Me</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >
        </header >
    );
};

export default Navigation;