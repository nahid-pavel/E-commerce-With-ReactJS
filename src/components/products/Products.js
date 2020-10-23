import React from "react";
import { products } from "./data";
import ProductItems from "./ProductItems";

function Products() {
  return (
    <div>
      {products.map((product, index) => {
        return <ProductItems key={index} product={product} />;
      })}
    </div>
  );
}

export default Products;
