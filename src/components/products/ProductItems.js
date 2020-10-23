import React from "react";
import ProductItem from "./ProductItem";
import "./ProductItem.scss";

const ProductItems = ({ product }) => {
  return (
    <div className=" d-flex flex-column p-3 ">
      <div className="category_name m-2">{product.category}</div>

      <div className="d-flex">
        {product.items.map((item, index) => {
          return <ProductItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductItems;
