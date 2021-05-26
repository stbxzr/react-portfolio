import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarElement = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Navbar.Brand href="https://github.com/stbxzr">Git Hub</Navbar.Brand>
          <Navbar.Brand href="https://www.linkedin.com/in/julian-almendarez-940a6a206">
            LinkedIn
          </Navbar.Brand>
          <Navbar.Brand href="https://drive.google.com/file/d/1pcGeynmwMVmqSE3INJULaQw7j-gaT_YM/view?usp=sharing">
           
            Resume/Contact
          </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarElement;
