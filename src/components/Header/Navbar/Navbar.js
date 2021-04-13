import React from 'react';
import logo from '../../../images/logoHeader.png';
import './Navbar.css';
import { Search, ShoppingCart } from 'react-feather';

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
          <div className="subscribe-input search-field">
            <input type="text" />
            <Search
              className="right-arrow-icon"
              stroke="var(--primary-headingColor)"
              fill="none"
              size={22}
            />
          </div>
          <div className="items-cart">
            <span>
              <ShoppingCart
                className="cart-icon"
                stroke="var(--primary-headingColor)"
                fill="none"
                size={22}
              />
              Cart
            </span>
            <span id="user-info">Alex Pitter</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
