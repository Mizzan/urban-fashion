import React from 'react';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="products-section">
          <Products></Products>
        </div>
        <div className="testimonial-section">
          <Testimonials></Testimonials>
        </div>

        <div className="featured-section">
          <Featured></Featured>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Home;
