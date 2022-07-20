import React from "react";
import { Container} from "react-bootstrap";
import NavBar from "../../src/components/Header";
// import Cards from "../../src/components/Cards"
export default function Contact() {
    return (
        <Container fluid className="d-flex justify-content-center page--content">
            <div className="container page--contentbody mt-3 mb-3 rounded mx-auto" >
                <div>
                     <NavBar/> 
                </div>
                <h1 className="text-center">Contact Us</h1>
            </div>
        </Container>
    );
}