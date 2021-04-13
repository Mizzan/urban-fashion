import React from 'react';
import './SingleProduct.css';
const SingleProduct = ({ product }) => {
  return (
    <div className="single-product__items">
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <p>{product.desc}</p>
      <p>
        ${product.price}{' '}
        <span style={{ textDecoration: 'line-through', color: 'red' }}>
          $75.00
        </span>
      </p>

      <p style={{ textDecoration: 'underline', cursor: 'pointer' }}>
        Add to Cart
      </p>
    </div>
  );
};

export default SingleProduct;
