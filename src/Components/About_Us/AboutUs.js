import React from 'react'
import Separator from '../Header/Separator'
import "./AboutUs.css"
import { Container, Row, Col } from 'react-bootstrap';

function AboutUs() {
    return (
        <section id="about-us">
            <div>
                <Separator height="10" />

                <Container>
                    <Row>
                        <Col className="my-auto" md={6}>
                            <div className="aboutText">
                                <h2 className="aboutUltimate">About UCR Ultimate</h2>
                                <p className="aboutDescription">
                                    We play every Tuesday and Thursday from 8-10pm at the UCR Sports Complex at the corner of Blaine and Canyon Crest.
                                    You haven’t played before!?  Neither did we!  Come on out and we’ll teach you.  We have players of all skill levels
                                    who know all about throwing forehands, backhands, flicks, hucks, hammers, scoobers, pushes, and pulls.  We’ll teach
                                    you how to catch all of those, as well as the ins and outs of Ultimate such as being chilly (even in Riverside),
                                    dumping (only the ultimate kind), skying and cutting. We are looking to expand the game in the Inland Empire and
                                    bring more students to the game!
                                </p>

                            </div>
                        </Col>
                        <Col className="my-auto" md={6}>
                            <img className="frontImg" src="https://content.sportslogos.net/news/2020/07/primary-590x344.png"></img>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default AboutUs
