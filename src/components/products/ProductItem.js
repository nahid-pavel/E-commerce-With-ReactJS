import React from "react";
import "./ProductItem.scss";
const ProductItem = ({ product }) => {
  return (
    <div className=" d-flex flex-column p-3 ">
      <div className="category_name m-2">{product.category}</div>

      <div className="d-flex">
        {product.items.map((item) => {
          return (
            <div className="item_container d-flex flex-column mr-3">
              <img
                className="item_image"
                alt="item_image"
                src={item.imageUrl}
              />
              <div className="item_details d-flex justify-content-between ">
                <div>{item.name}</div>
                <div>{item.price} BDT.</div>
              </div>
              <div className="add_to_cart">
                <button className="btn btn-success btn-block">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductItem;
