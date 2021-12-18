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
                            imgurl="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
                            grade="1st Grade"
                            years="5"
                            major="Univerity Lecturer" />
                    </Col>
                    <Col className="card" lg={4} md={6} xs={6}>
                        <Card color="#2D6CC0"
                            name="Joe Ben"
                            positions="Founder"
                            imgurl="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
                            grade="Minor"
                            years="23"
                            major="PHD in CS" />
                    </Col>
                    <Col className="card" lg={4} md={6} xs={6}>
                        <Card color="#F1AB00"
                            name="Joe Ben"
                            positions="World Champion"
                            imgurl="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY="
                            grade="HS Freshmen"
                            years="23"
                            major="PHD in Physics" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Team
