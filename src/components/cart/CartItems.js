import React from "react";
import { connect } from "react-redux";

const CartItems = ({ cartItems }) => {
  return <div></div>;
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, null)(CartItems);
