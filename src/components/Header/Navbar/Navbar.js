import React from 'react';
import logo from '../../../images/logoHeader.png';
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="brand">
          <img src={logo} alt="The urban fashion logo" />
        </div>
        <div className="menu-list">
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">Product</a>
          <a href="/">Page</a>
          <a href="/">Blog</a>
        </div>
        <div className="nav-right">
          <div className="search-field"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
