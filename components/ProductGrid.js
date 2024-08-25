import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css'; // Import the CSS file
import GridBar from './GridBar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ProductGrid = ({ products }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(20 / itemsPerPage);

  // Get products for the current page
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (

    <div className='product'>
      <GridBar />
      <div className="row">
        {paginatedProducts.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <ul className="pagination justify-content">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductGrid;
