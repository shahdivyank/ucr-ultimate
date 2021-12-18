import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import "./Navigation.css";
import { HashLink } from 'react-router-hash-link';

function Navigation() {
    return (
        <Navbar fixed="top"  collapseOnSelect variant="dark" className="navbar">
                <Container >
                    {/* <Navbar.Brand><HashLink smooth to="/#" className='nav-brand navitem'>UCR Ultimate Frisbee</HashLink></Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="m-auto">
                            <HashLink smooth to="/#" className='navitem text-font'>Home</HashLink>
                            <HashLink smooth to="/#about-us" className='navitem text-font'>About Us</HashLink>
                            <HashLink smooth to="/#join-us" className='navitem text-font'>Join Us</HashLink>
                            <HashLink smooth to="/#announcements" className='navitem text-font'>Announcements</HashLink>
                            {/* <HashLink smooth to="/#team" className='navitem'>The Team</HashLink> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>

    )
}

export default Navigation
