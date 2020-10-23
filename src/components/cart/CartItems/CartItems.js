import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const CartItems = ({ cartItems }) => {
  const output = cartItems.length ? (
    <div>
      {cartItems.map((item) => {
        return <CartItem item={item} />;
      })}
      <Row>
        <Col xs={9}>Subtotal</Col>
        <Col xs={3}>
          <strong>
            {" "}
            {cartItems.reduce((total, item) => {
              total += item.price;
              return total;
            }, 0)}
          </strong>
        </Col>
      </Row>
    </div>
  ) : (
    <p className="text-danger ">No item on Cart</p>
  );
  return <>{output}</>;
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, null)(CartItems);
