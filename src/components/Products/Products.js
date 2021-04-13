import React from 'react';
import product1 from '../../images/product1.png';
import product2 from '../../images/product2.png';
import product3 from '../../images/product3.png';
import product4 from '../../images/product4.png';
import product5 from '../../images/product5.png';
import product6 from '../../images/product6.png';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

/**
 * Created dummy product data then used it by mapping the data.
 */

const productsData = [
  {
    id: 1,
    image: product1,
    title: 'De Rose Gold Perfume',
    desc: 'Floral Green fragrance for women',
    price: 55,
  },
  {
    id: 2,
    image: product2,
    title: 'La Classic Car perfume',
    desc: 'Floral fragrance for Car',
    price: 55,
  },
  {
    id: 3,
    image: product3,
    title: 'De Casta Blue berry Centario',
    desc: 'Floral sharp berry  for women',
    price: 55,
  },
  {
    id: 4,
    image: product4,
    title: 'XOFOSR Bag',
    desc: 'Floral Green fragrance for women',
    price: 55,
  },
  {
    id: 5,
    image: product5,
    title: 'MAC Jacobs collections',
    desc: 'Floral fragrance for Car',
    price: 55,
  },
  {
    id: 6,
    image: product6,
    title: 'De Casta Styles Bag',
    desc: 'Floral sharp berry  for women',
    price: 55,
  },
];

const Products = () => {
  return (
    <div className="product-section">
      <h1 className="product-section__heading">
        Meet out best selling products
      </h1>
      <p>
        “Best premium laxarious Brand authentic product always available for
        you”
      </p>

      <div className="single-product">
        {productsData.map((product) => (
          <SingleProduct key={product.id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
