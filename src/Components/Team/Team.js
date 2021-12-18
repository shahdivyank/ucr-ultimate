import React from 'react'
import Card from "./Card"
import "./Team.css"
import { Container, Row, Col } from 'react-bootstrap';
import Separator from "../Header/Separator"

function Team() {
    return (
        <section id="team">
            <Separator height="10" />

            <h4>Meet the Team</h4>
            <Container className="team-wrapper">
                <Row>
                    <Col className="card" lg={4} md={6} xs={6}>
                        <Card
                            color="#F1AB00"
                            name="Joe Ben"
                            positions="Captain"
                            imgurl="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"
                            grade="1st Grade"
                            // years="5"
                            major="Univerity Lecturer" />
                    </Col>
                    <Col className="card" lg={4} md={6} xs={6}>
                        <Card color="#2D6CC0"
                            name="Joe Ben"
                            positions="Founder"
                            imgurl="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"
                            grade="Minor"
                            // years="23"
                            major="PHD in CS" />
                    </Col>
                    <Col className="card" lg={4} md={6} xs={6}>
                        <Card color="#F1AB00"
                            name="Joe Ben"
                            positions="World Champion"
                            imgurl="https://www.kurin.com/wp-content/uploads/placeholder-square.jpg"
                            grade="HS Freshmen"
                            // years="23"
                            major="PHD in Physics" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Team