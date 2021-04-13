import React from 'react';
import Banner from '../Banner/Banner';
import HeroArea from '../HeroArea/HeroArea';
import Navbar from '../Navbar/Navbar';
import './Header.css';
const Header = () => {
  return (
    <header>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="hero-area-section">
        <HeroArea></HeroArea>
      </div>
    </header>
  );
};

export default Header;
