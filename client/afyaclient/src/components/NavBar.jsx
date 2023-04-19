import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/dashboard">Karibu, Afya APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/register-patient">Register Patient</Nav.Link>
          <Nav.Link href="/reports">Patient Records</Nav.Link>
        </Nav>

        <Nav className="my-auto">
          {/* <Nav.Link href="/register-patient">Admin</Nav.Link> */}
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar