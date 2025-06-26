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
  const { cartItems, lastAddedItem } = useContext(CartContext);
  const totalItems = cartItems.reduce((a, b) => a + b.quantity, 0);
  const popupRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').filter(Boolean).map(path => path.charAt(0).toUpperCase() + path.slice(1)).join('') || '';
  const [showToast, setShowToast] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  useEffect(() => {
    if (lastAddedItem) {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [lastAddedItem]);


  const handleProducts = () => {
    navigate(`allProducts`);
  };

  const handleHome = () =>{
    navigate(`/`);

  };

  const handleCheckout = () => {
    if (username) {
      navigate("/checkout");
    } else {
      alert("Please log in or signup to checkout.");
    }
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
      {showToast && lastAddedItem && (
        <div className="toast">
          {lastAddedItem.title} added to cart!
        </div>
      )}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-section">
            <img onClick={handleHome} className="logo-img" src={minimart} alt="minmart logo" />
            <h1> MINIMART</h1>
          </div>
          <div className="actions">
            <span className="view-all" onClick={handleProducts}>View All Products</span>

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
          </div>


          <button className="icon-btn mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-icons">menu</span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-dropdown" ref={popupRef}>
            <button onClick={handleProducts}>View All Products</button>
            {totalItems > 0 ? (
              <button
                onClick={handleCheckout}
                className="icon-btn checkout-cart-btn">
                <span className="material-icons">shopping_cart</span>
                <span className="cart-label">Checkout ({totalItems})</span>
              </button>
            ) : (
              <button
                onClick={() => setShowCart(!showCart)}
                className="icon-btn" >
                {totalItems}<span className="material-icons">shopping_cart</span>
              </button>
            )}

            {username ? (
              <button onClick={logout} className="icon-btn">
                <span className="material-icons">logout</span> Logout
              </button>
            ) : (
              <>
                <button onClick={() => setShowPopup(!showPopup)} className="icon-btn">
                  <span className="material-icons">person</span> Login
                </button>
                {showPopup && <LoginPopup close={() => setShowPopup(false)} />}
              </>
            )}
          </div>
        )}

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