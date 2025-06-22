import React, {useContext, useState, useRef, useEffect} from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import CartPopup from "./CartPopup";
import LoginPopup from "./LoginPopup";
import '../styles/Nabar.css';

const Navbar = () => {
  const { username, logout } = useContext(AuthContext);
  const [showPopup, setShowPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const {cartItems} = useContext(CartContext);
  const totalItems = cartItems.reduce((a,b)=> a + b.quantity, 0);
  const popupRef = useRef();

 

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
    <nav className="navbar">
      <h1 className="logo">MiniMart</h1>
      <div className="navbar-actions">
      <button className="cart-icon" onClick={() => setShowCart(!showCart)}>🛒 ({totalItems})</button>
      {showCart && <CartPopup close={() => setShowCart(false)} />}
        {username ? (
          <div className="user-info">
            <span>{username}</span>
            <button className="logout-btn" onClick={logout}>🚪</button>
          </div>
        ) : (
          <div className="login-icon-wrapper" ref={popupRef}>
            <span className="login-icon" onClick={() => setShowPopup(!showPopup)}>👤 {username}</span>
            {showPopup && <LoginPopup close={() => setShowPopup(false)} />}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;