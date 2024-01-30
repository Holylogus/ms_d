import React from 'react'
import logo from '../images/Logo.png'
import '../styles/Header.css'
import { Navbar, Container, Image, Offcanvas, Nav, Button } from 'react-bootstrap';

function Header() {
  return (
   <Navbar expand="lg" style={{backgroundColor: "#228B22"}}>
    <Container fluid>
          <Navbar.Brand href="#home">
            <Image src={logo} roundedCircle />
            <span className='m-3'>MS Dienstleistung</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby='offcanvasNavbarLabel' placement='end' style={{backgroundColor: "#228B22"}}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                <Image src={logo} roundedCircle />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <Nav.Link className="m-2" href='#'><span>Home</span></Nav.Link>
                    <Nav.Link className="m-2" href='#'><span>About Us</span></Nav.Link>
                    <Nav.Link className="m-2" href='#'><span>Contract</span></Nav.Link>
                </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
   </Navbar>
  )
}

export default Header
