import React, { useContext } from "react";
import { CartContext } from '../context/CartContext';
import '../styles/CartPopup.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";


const CartPopup = ({ close }) => {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const totalItems = cartItems.reduce((a, b) => a + b.quantity, 0);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);


    const handleCheckout = () => {
        if (!user) {
            alert("Please Login or Signup to MiniMart")
        } else {
            navigate('/checkout');
        }
    };

    return (
        <div className="cart-popup">
            <button className="close-btn" onClick={close}>X</button>
            <h3> <span className="material-icons">shopping_cart</span> Cart ({totalItems})</h3>
            <ul>
                {cartItems.map((product, idx) => (
                    <li key={idx} className="cart-item">
                        <img src={product.image} alt={product.title} />
                        <div className="cart-item-details">
                            <strong className="cart-item-title">{product.title}</strong>
                            <span className="cart-item-qty">Qty: {product.quantity}</span>
                            <p>R{product.price * product.quantity}</p>
                        </div>
                        <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
                          <span className="material-icons">delete</span>
                        </button>
                    </li>
                ))}
            </ul>
            {cartItems && cartItems.length > 0 && (<button onClick={handleCheckout} className="check-out"><span>Check Out</span></button>
            )}
        </div>
    );
};

export default CartPopup;