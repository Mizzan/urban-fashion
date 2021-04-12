import React from 'react';
import Featured from '../Featured/Featured';
import Header from '../Header/Header/Header';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="products-section">
          <Products></Products>
        </div>

        <div className="featured-section">
          <Featured></Featured>
        </div>
      </main>
    </div>
  );
};

export default Home;
