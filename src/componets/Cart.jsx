import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart= ()=>{
    const {cartItems}= useContext(CartContext);

    return(
        <div className="cart-container">
            <h3>🛒 Cart Items:{cartItems.length}</h3>
        </div>
    );
};

export default Cart;