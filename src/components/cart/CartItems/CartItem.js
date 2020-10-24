import React from "react";
import { Media, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteFromCart } from "../../../redux/actions/cartActions";

const CartItem = ({ item, deleteFromCart }) => {
  const styles = {
    mediaItem: {
      border: "1px solid black",
      backgroundColor: "#f5f5f5",
      paddingTop: "5px",
      paddingBottom: "5px",
    },
    mediaItemButtons: {
      paddingTop: "5px",
      paddingBottom: "5px",
    },
  };
  return (
    <Media className={styles.mediaItem}>
      <img
        width={100}
        height={100}
        className="align-self-center mr-3"
        src={item.imageUrl}
        alt="item_image"
      />
      <Media.Body className={styles.mediaBody}>
        <p>{item.name}</p>
        <Row>
          <Col xs={6}>
            <strong>Price:</strong>
          </Col>
          <Col xs={6}>{item.price}</Col>
        </Row>
        <Row style={styles.mediaItemButtons}>
          <Col xs={6}>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteFromCart(item)}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Media.Body>
    </Media>
  );
};

export default connect(null, { deleteFromCart })(CartItem);
