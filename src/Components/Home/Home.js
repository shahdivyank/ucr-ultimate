import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Separator from '../Header/Separator';
import { HashLink } from 'react-router-hash-link';


function Home() {
    return (
        <section id="home">
        <Separator height="10"/>
            <Container>
                <Row>
                    <Col className="my-auto" md={6}>
                        <img className="frontImg" src="https://content.sportslogos.net/news/2020/07/primary-590x344.png"></img>
                    </Col>
                    <Col className="my-auto" md={6}>
                        <div className="text">
                            <h2>Welcome to UCR Ultimate</h2>
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
