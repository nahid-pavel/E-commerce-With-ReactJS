import React, { useState, useEffect } from "react";
import { Navbar, Nav, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { CartFill, Person, BoxArrowInRight } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCart } from "../../redux/actions/cartActions";
import { logOut } from "../../redux/actions/authActions";
import CartContainer from "../cart/CartContainer/CartContainer";
import "./Header.styles.scss";

const Header = ({ cart, toggleCart }) => {
  const { cartItems, showCart } = cart;
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const checkLoggedIn = () => {
    if (sessionStorage.getItem("isLoggedIn")) {
      setIsloggedIn(true);
    } else {
      setIsloggedIn(false);
    }
  };
  useEffect(() => {
    checkLoggedIn();
  }, [checkLoggedIn]);

  const logOutHandler = () => {
    setIsloggedIn(false);
    logOut();
  };
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "rgb(34,66,48)" }}
      variant="dark"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="m-2">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="m-2">
            About
          </Nav.Link>
          <OverlayTrigger
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">Shopping Cart</Tooltip>}
          >
            <Nav.Link className="m-2">
              <CartFill className="cart_icon" onClick={toggleCart} />
            </Nav.Link>
          </OverlayTrigger>
          {showCart ? <CartContainer /> : null}
          <div className="cart_items_count">{cartItems.length}</div>
          {!isLoggedIn ? (
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">Login</Tooltip>}
            >
              <Nav.Link as={Link} className="m-2" to="/login">
                <Person className="user_icon" />
              </Nav.Link>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">Logout</Tooltip>}
            >
              <Nav.Link className="m-2" onClick={logOutHandler}>
                <BoxArrowInRight className="user_icon" />
              </Nav.Link>
            </OverlayTrigger>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { toggleCart })(Header);
