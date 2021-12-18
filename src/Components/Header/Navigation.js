import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Navigation.css";
import { HashLink } from 'react-router-hash-link';

function Navigation() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="md" variant="dark" className="navbar">
            <Container>
                {/* <Navbar.Brand><HashLink smooth to="/#" className='nav-brand navitem'>UCR Ultimate Frisbee</HashLink></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <HashLink smooth to="/#" className='navitem'>Home</HashLink>
                        <HashLink smooth to="/#about-us" className='navitem'>About Us</HashLink>
                        <HashLink smooth to="/#join-us" className='navitem'>Join Us</HashLink>
                        <HashLink smooth to="/#announcements" className='navitem'>Announcements</HashLink>
                        <HashLink smooth to="/#team" className='navitem'>The Team</HashLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
