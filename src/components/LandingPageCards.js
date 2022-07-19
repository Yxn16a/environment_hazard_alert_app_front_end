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
                                    <Col className="card--data col-12">
                                        <span className="ml-1 ">From Time: {props.initialtime}</span>
                                       <span className="ml-1"> To Time:  {props.finaltime}</span>
                                    </Col>
                                </Row>   
                                <Row>
                                    <Col className="card--data col-12">UV Quantity:<span className="ml-1">{props.uvquantity}</span></Col>
                                
                                </Row>
                                <Row>
                                    <Col className="card--data col-12">Measures:<span className="ml-1">{props.measures}</span></Col>
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
                                    <Col className="card--data col-12 d-flext justify-content-center">
                                    <span className="ml-1 ">From Time: {props.initialtime}</span>
                                       <span className="ml-1"> To Time:  {props.finaltime}</span>
                                    </Col>
                                    
                                </Row>  
                                <Row>
                                    <Col className="card--data col-12 text-lg-center text-sm-left">
                                        <span>LandSlides May Happen:{props.initialtime}</span>
                                        <span className="mx-1">Km</span><span>From You</span>
                                    </Col>
                                </Row>
                                <Row>
                                    
                                    <Col className="card--data col-12">Measures:
                                        <span className="ml-1">Contact Local Leaders</span>
                                    </Col>
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
                                    <Col className="card--data col-12">
                                    <span className="ml-1 ">From Time: {props.initialtime}</span>
                                       <span className="ml-1"> To Time:  {props.finaltime}</span>
                                    </Col>
                                </Row>  
                                <Row>
                                    <Col className="card--data col-12">
                                        <span>Floods May Happen:{props.initialtime}</span>
                                        <span className="mx-1">Km</span><span>From You</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="card--data col-12">Measures:
                                        <span className="ml-1">Contact Local Leaders</span>
                                    </Col>
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