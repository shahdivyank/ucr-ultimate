import React from 'react'
import Separator from '../Header/Separator'
import "./AboutUs.css"
import { Container, Row, Col } from 'react-bootstrap';
import Photo from "./Photos/a_photo_1.jpg"

function AboutUs() {
    return (
        <section id="about-us">
            <div className='about-us-cover'>
                <Separator height="10" />
                <Container>
                    <Row>
                        <Col className="my-auto" lg={6} md={12}>
                            <div className="aboutText">
                                <h2 className="aboutUltimate title-font">About UCR Ultimate</h2>
                                <p className="aboutDescription text-font">
                                    We play every Tuesday and Thursday from 8-10pm at the UCR Sports Complex on the corner of Blaine and Canyon Crest.
                                    Haven’t played before!? Neither did we! We have players of all skill levels who know how to throw forehands,
                                    backhands, flicks, hucks, and more. We’ll teach you how to catch all of those, as well as the ins and outs of Ultimate,
                                    dumping (only the ultimate kind), skying, cutting, and more.
                                </p>
                            </div>
                        </Col>
                        <Col className="my-auto" lg={6} md={12}>
                            <div className='img-container'>
                                <img className="frontImg" src={Photo} alt="About Us"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default AboutUs
