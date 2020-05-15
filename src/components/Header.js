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
          <b className="text-dark" > Home</b>
        </Nav.Link>
        <Nav.Link as={Link} to="/about-us">
        <b className="text-dark" > About US</b>
        </Nav.Link>
        <Nav.Link as={Link} to="/contact-us">
        <b className="text-dark" > Contact US</b>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);



export default Header;
