import React from "react";
import { products } from "./data";
import ProductItem from "./ProductItem";

function Products() {
  return (
    <div>
      {products.map((product) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
}

export default Products;
