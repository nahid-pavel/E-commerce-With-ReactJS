import React from "react";
import { products } from "./data";
import ProductItem from "./ProductItem";

function Products() {
  return (
    <div>
      {products.map((product, index) => {
        return <ProductItem key={index} product={product} />;
      })}
    </div>
  );
}

export default Products;
