import React, { useContext } from "react";
import {CartContext} from '../context/CartContext';
import '../styles/CartPopup.css'


const CartPopup =({close}) => {
    const {cartItems} = useContext(CartContext);
    const totalItems = cartItems.reduce((a,b)=> a + b.quantity, 0);

    return(
        <div className="cart-popup">
            <button className="close-btn" onClick={close}>X</button>
            <h3>🛒 Cart ({totalItems})</h3>
            <ul>
                { cartItems.map((product, idx)=> (
                        <li key={idx}>
                            {<img src={product.image} alt={product.title}/>}
                            {product.title} — Qty: {product.quantity}
                        </li>
                    ))
                    }
                    {cartItems.length === 0 && <p> No items in cart</p>}
            </ul>
            {cartItems && cartItems.length > 0 && (<button className="check-out"><span>Check Out</span></button>
)}
        </div>
    );
};

export default CartPopup;