import React from 'react'
import "./JoinUs.css"
import Separator from '../Header/Separator'
import { Container, Row, Col } from 'react-bootstrap';


function JoinUs() {
    return (
        <section id="join-us">
            <div className="joinUs">
                <div className='join-us-cover'>
                    <Separator height="10" />
                    <Container>
                        <Row>
                            <Col md={6} sm={12}>
                                <h4 className="title-font">Join Us!</h4>
                                <p className="text-font">
                                    Join our Facebook group, <a href="https://www.facebook.com/groups/UCRultimate/" target="_blank" rel="noreferrer">Ultimate Frisbee Riverside</a> Where we communicate about tournaments, teams,
                                    shirts and discs. Find us on <a href="https://highlanderlink.ucr.edu/organization/ultimatefrisbeeclubatucr" target="_blank" rel="noreferrer">Highlander Link</a>. Before joining, make sure to
                                    register at <a href="https://recreation.ucr.edu/competitive-sports/do-sports-easy" target="_blank" rel="noreferrer">Do Sports Easy</a>.
                                    Before attending practice, make sure to fill out the <a href="https://ucriverside.az1.qualtrics.com/jfe/form/SV_e4AMyHzVMXwrqia" target="_blank" rel="noreferrer">Covid Wellness Survey</a> and bring a water
                                    bottle, cleats (if possible), and a light and dark shirt.
                                </p>
                            </Col>
                            <Col md={6} sm={12}>
                                <h4 className="title-font">Why Ultimate?</h4>
                                <p className='text-font'>
                                    It isn’t called Ultimate just so it sounds cool.  This game combines the stamina and running of soccer, the quick feet
                                    and agility of football, the defense and hops of basketball, and the smarts and foresight of baseball.  It truly is the
                                    Ultimate sport!
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <iframe title="google-map" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6616.799872652576!2d-117.33675193926668!3d33.982259740271196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae402aa032c1%3A0xe2e5909b30f0e9e1!2sUC%20Riverside%20Baseball%20Complex!5e0!3m2!1sen!2sus!4v1638824353687!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </section>
    )
}

export default JoinUs