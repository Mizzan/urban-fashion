import React from 'react';
import './Featured.css';
import featured1 from '../../images/featured1.png';
import featured2 from '../../images/featured2.png';
import featured3 from '../../images/featured3.png';
import featured4 from '../../images/featured4.png';
import featured5 from '../../images/featured5.png';
import featured6 from '../../images/featured6.png';

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured__heading">Featured in</h1>
      <div className="featured-brand-images">
        <div className="featured-brand-item">
          <img src={featured1} alt="" />
        </div>
        <div className="featured-brand-item">
          <img src={featured2} alt="" />
        </div>
        <div className="featured-brand-item">
          <img src={featured3} alt="" />
        </div>
        <div className="featured-brand-item">
          <img src={featured4} alt="" />
        </div>
        <div className="featured-brand-item">
          <img src={featured5} alt="" />
        </div>
        <div className="featured-brand-item">
          <img src={featured6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
