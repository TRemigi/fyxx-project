import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <img
          alt="fyxx scissor logo"
          src={require("../../assets/images/svg/colorlogo-nobackground.svg")}
          width="100"
          height="100"
          className="d-inline-block align-top ml-2"
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/">
          Features
        </Nav.Link>
        <Nav.Link as={Link} to="/">
          Pricing
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
