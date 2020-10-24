import React from "react";
import { Nav } from "react-bootstrap";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination ">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Nav.Link onClick={() => paginate(number)} className="page-link">
              {number}
            </Nav.Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
