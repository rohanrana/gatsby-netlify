import { Link } from "gatsby";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">
      Gatsby-Bootstrap
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/about-us">
          About US
        </Nav.Link>
        <Nav.Link as={Link} to="/contact-us">
          Contact US
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);



export default Header;
