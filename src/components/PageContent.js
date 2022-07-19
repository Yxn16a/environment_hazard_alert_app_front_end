import React from "react";
import { Container, Row,Card} from "react-bootstrap";
import Main from "./MainSection"
import NavBar from "./HeaderSection";
// import Footer from "./FooterSection"

export default function PageContent() {
    return (
        <Container fluid className="d-flex contentcontainer justify-content-center">
            <Row className ="mt-5 mb-0">
                <Card className="cardcontainer p-0">
                    <Card.Body className ="cardbody m-auto p-0.5">
                            <NavBar/> 
                            <Main/>
                            {/* <Footer/>  */}
                    </Card.Body>
                </Card>
            </Row>
        </Container>     
    );
  }
