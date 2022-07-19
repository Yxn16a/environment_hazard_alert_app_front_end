import React from "react"; 
import uvlight from "../assets/images/uvlight.jpg"
import landslides from "../assets/images/landslides.jpg"
import floods from "../assets/images/floods.jpg"
import { Row, Col, Button, Card } from "react-bootstrap";

export default function LandingPageCards(props) { 
    return (
        <div>
            {/* col-sm-12 className ="d-flex justify-content-center align-items-center mx-auto" */}
            <Row>
                <Col className ="col-md-4 col-12 my-lg-0 my-sm-3">
                    <Card className="warningcard">
                        <Card.Img className ="cardimage" variant="top" src={uvlight} />
                        <Card.Body>
                            <Card.Title>UV Light Hazard</Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col>From Time:{props.initialtime}</Col>
                                    <Col>To Time:{props.finaltime}</Col>
                                </Row>   
                                <Row>
                                    <Col>UV Quantity:{props.uvquantity}</Col>
                                    <Col>Measures:{props.measures}</Col>
                                </Row>
                            </Card.Text>
                            <Button variant="primary">Click here for more information</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className ="col-md-4 col-12 my-lg-0 my-sm-3">
                    <Card className="warningcard">
                        <Card.Img className ="cardimage" variant="top" src={landslides} />
                        <Card.Body>
                            <Card.Title>LandSlides Hazard</Card.Title>
                            <Card.Text>
                            <Row>
                                    <Col>From Time</Col>
                                    <Col>To Time</Col>
                                </Row>   
                                <Row>
                                    <Col>Rain Amount</Col>
                                </Row>
                            </Card.Text>
                            <Button variant="primary">Click here for more information</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className ="col-md-4col-12 my-lg-0 my-sm-3">
                    <Card  className="warningcard">
                        <Card.Img className ="cardimage"variant="top" src={floods} />
                        <Card.Body>
                            <Card.Title>Floods Hazards</Card.Title>
                            <Card.Text>
                            <Row>
                                    <Col>From Time</Col>
                                    <Col>To Time</Col>
                                </Row>   
                                <Row>
                                    <Col>Rain Amount</Col>
                                </Row>
                            </Card.Text>
                            <Button variant="primary">Click here for more information</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}