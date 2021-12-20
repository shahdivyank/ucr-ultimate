import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Separator from '../Header/Separator';
import { HashLink } from 'react-router-hash-link';
import Video from "./Video/Video"
import Photo from "./Photos/h_photo_1.jpg"


function Home() {
    return (
        <section id="home">
            <Separator height="10" />
            <h1 className="title-font header">UC Riverside Ultimate Frisbee</h1>
            <Separator height="2" />
            <Video />
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <div className='img-container'>
                            <img className="frontImg" src={Photo} alt="Home"></img>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="text">
                            <h2 className="title-font">Welcome to Highlander Ultimate</h2>
                            <p className="text-font">
                                We play to better ourselves as athletes and it is a great way to meet people from other schools,
                                surrounding communities, and UCR! Undergrads, graduates, post-doctorates, and even professors play!
                            </p>
                            <HashLink smooth to="/#join-us" className='navitem'><Button className="joinButton text-font">Join Now!</Button></HashLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home
