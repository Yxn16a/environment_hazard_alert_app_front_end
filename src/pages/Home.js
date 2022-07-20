import React from "react"
import Main from "../../src/components/Main"
import { Container } from "react-bootstrap";
import NavBar from "../components/Header";
export default function Home(){
    return (
        <Container fluid className="d-flex justify-content-center page--content">
            <div className="container page--contentbody mt-3 mb-3 rounded" >
                <div>
                    <NavBar /> 
                </div>
                <div>
                    <Main />
                </div>
            </div>
        </Container>
    );
}