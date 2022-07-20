import React from "react"
import { Link } from "react-router-dom"
import {
    Navbar,
   Container, 
    Nav
} from "react-bootstrap";


export default function NavBar() {
   return (
            <Navbar className="nav--bar mt-3" expand="lg">
               <Container fluid className=" bg-light rounded">
                  <Navbar.Brand to={"/"}>RSA</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                     <Nav className="navbartext ms-auto my-2 my-lg-0" navbarScroll>
                        <Link className="navbartext" to={'/'}> Home</Link >
                        <Link className="mx-lg-2 mx-sm-0 navbartext" to={'/about'}>About</Link >
                        <Link className="navbartext" to={'/contact'}>Contact</Link>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
      </Navbar>



    )   
}
