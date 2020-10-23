import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import CartItems from "../CartItems/CartItems";
import "./CartContainer.scss";

const CartContainer = ({ cartItems }) => {
  console.log(cartItems, "cartItems");
  return (
    <div>
      <div className="purchase-card">
        <Container>
          <CartItems />
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(CartContainer);
