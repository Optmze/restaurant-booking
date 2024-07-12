import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        {/* Apply inline styles for "Swigatto" */}
        <Navbar.Brand href="/" style={{ fontSize: '1.8em', fontFamily: 'Oswald', fontWeight: 'bold' }}>
          Swigatto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Add hover effects and active link styling */}
            <Nav.Link href="/" className="text-white" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link href="/login" className="text-white">
              Login
            </Nav.Link>
            <Nav.Link href="/register" className="text-white" activeClassName="active">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
