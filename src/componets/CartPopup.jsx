import React, { useContext } from "react";
import {CartContext} from '../context/CartContext';
import '../styles/CartPopup.css'


const CartPopup =({close}) => {
    const {cartItems, removeFromCart} = useContext(CartContext);
    const totalItems = cartItems.reduce((a,b)=> a + b.quantity, 0);

    return(
        <div className="cart-popup">
            <button className="close-btn" onClick={close}>X</button>
            <h3>🛒 Cart ({totalItems})</h3>
            <ul>
    {cartItems.map((product, idx) => (
      <li key={idx} className="cart-item">
         <img src={product.image} alt={product.title} />
         <div className="cart-item-details">
         <strong className="cart-item-title">{product.title}</strong>
         <span className="cart-item-qty">Qty: {product.quantity}</span>
         <p>R{product.price * product.quantity }</p>
         </div>
         <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
              🗑️
            </button>
        </li>
     ))}
</ul>
            {cartItems && cartItems.length > 0 && (<button className="check-out"><span>Check Out</span></button>
)}
        </div>
    );
};

export default CartPopup;