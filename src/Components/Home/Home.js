import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Separator from '../Header/Separator';
import { HashLink } from 'react-router-hash-link';
import Video from "./Video/Video"


function Home() {
    return (
        <section id="home">
            <h1>UC Riverside Ultimate Frisbee</h1>
            <Separator height="10" />
            <Video/>
                <Container>
                    <Row>
                        <Col lg={6} md = {12}>
                            <div className='img-container'>
                                <img className="frontImg" src="https://content.sportslogos.net/news/2020/07/primary-590x344.png"></img>
                            </div>
                        </Col>
                        <Col lg={6} md = {12}>
                            <div className="text">
                                <h2>Welcome to Highlander Ultimate</h2>
                                <p>
                                    We play to better ourselves as athletes and stay in shape. We have fun doing it, and it is a great way to
                                    meet people from other schools, surrounding communities, and UCR! Undergrads play, graduate students play,
                                    post-doctorates play, and even professors!
                                </p>
                                <HashLink smooth to="/#join-us" className='navitem'><Button className="joinButton">Join Now!</Button></HashLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </section>
    )
}

export default Home
