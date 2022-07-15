import React from "react"
import {
    Navbar,
    Container, 
    Nav,
} from "react-bootstrap";

export default function NavBar() {
   return (
      <header>
         <div>
            <Navbar className="round" bg="light" expand="lg">
               <Container fluid>
                  <Navbar.Brand href="#">RSA</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                     <Nav className="navbartext ms-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link className="navbartext" to="/"> Home</Nav.Link>
                        <Nav.Link className ="navbartext" to="/About">About</Nav.Link>
                        <Nav.Link className ="navbartext" to="/Contact">Contact</Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
      </header>
    )   
}
