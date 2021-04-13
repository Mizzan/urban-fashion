import React from 'react';
import footerImg from '../../images/logoFooter.png';
import './Footer.css';
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  ArrowRight,
  Mail,
} from 'react-feather';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <img src={footerImg} alt="" />
          <div className="social-address">
            <a href="/">
              <Facebook stroke="none" fill="white" size={22} />
            </a>
            <a href="/">
              <Twitter stroke="none" fill="white" size={22} />
            </a>
            <a href="/">
              <Linkedin stroke="none" fill="white" size={22} />
            </a>
            <a href="/">
              <Youtube stroke="grey" fill="white" size={22} />
            </a>
            <a href="/">
              <Instagram stroke="grey" fill="white" size={22} />
            </a>
          </div>
          <p>
            Every spring I start going through dress withdrawals and go crazy
            over all the pretty.
          </p>
        </div>
        <div className="footer-menu">
          <div className="menu-list-one">
            <a href="/">Shop</a>
            <a href="/">Products</a>
            <a href="/">Collections</a>
            <a href="/">About us</a>
            <a href="/">Company</a>
            <a href="/">Blog</a>
          </div>
          <div className="menu-list-two">
            <a href="/">Support</a>
            <a href="/">Review</a>
            <a href="/">Careers</a>
            <a href="/">Contact us</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Refund Policy</a>
          </div>
          <div className="menu-list-three">
            <a href="/">Terms & Condition</a>
            <a href="/">FAQ's</a>
            <a href="/">Delivery</a>
            <a href="/">Returns</a>
          </div>
        </div>
        <div className="footer-right">
          <p>Subscribe</p>

          <div className="subscribe-input">
            <input type="text" placeholder="Your email" />
            <ArrowRight
              className="right-arrow-icon"
              stroke="white"
              fill="none"
              size={22}
            />
          </div>

          <div className="mail">
            <Mail stroke="white" fill="none" size={22} />
            <p>mail@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
