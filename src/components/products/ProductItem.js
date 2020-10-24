import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import "./ProductItem.scss";

const ProductItem = ({ item, addToCart }) => {
  return (
    // <div className="item_container d-flex flex-column mr-3">
    //   <img className="item_image" alt="item_image" src={item.imageUrl} />
    //   <div className="item_details d-flex justify-content-between ">
    //     <div className="name">{item.name}</div>
    //     <div className="price">{item.price} BDT.</div>
    //   </div>
    //   <div className="add_to_cart">
    //     <button
    //       className="btn btn-success btn-block"
    //       onClick={() => addToCart(item)}
    //     >
    //       Add To Cart
    //     </button>
    //   </div>
    // </div>
    <>
      <div className="item_container col-md-4">
        <img className="item_image" alt="item_image" src={item.imageUrl} />
        <div className="item_details d-flex justify-content-between ">
          <div className="name">{item.name}</div>
          <div className="price">{item.price} BDT.</div>
        </div>
        <div className="add_to_cart mb-3">
          <button
            className="btn btn-success btn-block"
            onClick={() => addToCart(item)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default connect(null, { addToCart })(ProductItem);
