import React, { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import CartPopup from "./CartPopup";
import LoginPopup from "./LoginPopup";
import '../styles/Nabar.css';
import minimart from '../assets/minimart.png';
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { username, logout } = useContext(AuthContext);
  const [showPopup, setShowPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((a, b) => a + b.quantity, 0);
  const popupRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').filter(Boolean).map(path => path.charAt(0).toUpperCase() + path.slice(1)).join('') || '';


  const handleProducts = () => {
    navigate(`allProducts`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-section">
            <img className="logo-img" src={minimart} alt="minmart logo" />
            <h1> MINIMART</h1>
          </div>
          <div className="actions">

            <span onClick={handleProducts}>View All Products </span>

            <button onClick={() => setShowCart(!showCart)} className="icon-btn">
              <span className="material-icons">shopping_cart</span>
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </button>
            {showCart && <CartPopup close={() => setShowCart(false)} />}
            {username ? (
              <div className="user-info">
                <span>Welcome, {username}</span>
                <button onClick={logout} className="icon-btn">
                  <span className="material-icons">logout</span>
                </button>
              </div>
            ) : (
              <div className="login-section" ref={popupRef}>
                <button onClick={() => setShowPopup(!showPopup)} className="icon-btn">
                  <span className="material-icons">person</span>
                </button>
                {showPopup && <LoginPopup close={() => setShowPopup(false)} />}
              </div>
            )}

            <button className="icon-btn mobile-menu">
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="breadcrumb">
        <span onClick={() => navigate("/")}>Home</span>
        <span>/</span>
        <span>{currentPath}</span>
      </div>
    </div>
  );
};

export default Navbar;