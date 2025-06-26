import React from "react";
import minimart from '../assets/minimart.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={minimart} alt="MiniMart logo" className="footer-logo" />
        <div className="footer-text">
          <h2>MiniMart</h2>
          <p>Shopping made <span>easy.</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
