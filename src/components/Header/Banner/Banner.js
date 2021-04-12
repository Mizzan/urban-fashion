import React from 'react';
import bannerImage from '../../../images/bannerImg.png';
import headerBg from '../../../images/headerBg.png';

import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__image">
        <img src={bannerImage} alt="brand banner image" />
      </div>

      <div className="banner__cta">
        <h1 className="banner__cta__heading">New Fashion Trends for Summer</h1>
        <p className="banner__cta__desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>

        <button className="primary-btn banner__cta__btn">Shop now</button>
        <img src={headerBg} alt="" className="banner__cta__image" />
      </div>
    </section>
  );
};

export default Banner;
