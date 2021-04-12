import React from 'react';
import heroImageOne from '../../../images/heroImg1.png';
import heroImageTwo from '../../../images/heroImg2.png';
import heroImageThree from '../../../images/heroImg3.png';
import './HeroArea.css';
const HeroArea = () => {
  return (
    <div className="hero-area">
      <div className="hero-area__left">
        <div className="hero-area__left-top">
          <img src={heroImageOne} alt="left image" />
        </div>
        <div className="hero-area__left-bottom">
          <img src={heroImageTwo} alt="left image" />
        </div>
      </div>
      <div className="hero-area__right">
        <img src={heroImageThree} alt="left image" />
      </div>
    </div>
  );
};

export default HeroArea;
