import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Navigation.css";
import { HashLink } from 'react-router-hash-link';

function Navigation() {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="md" variant="dark" className="navbar">
                <Container>
                    <Navbar.Brand href="#home" className="navitem">
                        <img
                            alt=""
                            src="https://avatars.githubusercontent.com/u/36285610?v=4"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        UCR Ultimate Frisbee
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <HashLink smooth to="/#" className='navitem'>Home</HashLink>
                            <HashLink smooth to="/#about-us" className='navitem'>About Us</HashLink>
                            <HashLink smooth to="/#join-us" className='navitem'>Join Us</HashLink>
                            <HashLink smooth to="/#announcements" className='navitem'>Announcements</HashLink>
                            <HashLink smooth to="/#team" className='navitem'>The Team</HashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation
