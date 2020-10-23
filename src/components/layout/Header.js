import React from "react";
import { Navbar, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CartFill, Person } from "react-bootstrap-icons";
import "./Header.styles.scss";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "rgb(34,66,48)" }}
      variant="dark"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="m-2">
            Home
          </Nav.Link>
          <Nav.Link href="#link" className="m-2">
            About
          </Nav.Link>
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">Shopping Cart</Tooltip>}
          >
            <Nav.Link className="m-2">
              <CartFill className="cart_icon" />
            </Nav.Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">Login</Tooltip>}
          >
            <Nav.Link className="m-2">
              <Person className="user_icon" />
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
