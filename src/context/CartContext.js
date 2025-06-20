import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(preItems => [...preItems, product]);
    };

    return(
        <CartContext.Provider value={{ cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    );
};