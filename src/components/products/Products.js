import React, { useState } from "react";
import { products } from "./data";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";

function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-3 ">
      <h2 style={{ borderBottom: "2px solid green" }} className="m-3">
        Collections
      </h2>
      <div className="row">
        {currentProducts.map((item, index) => {
          return <ProductItem key={index} item={item} />;
        })}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Products;
