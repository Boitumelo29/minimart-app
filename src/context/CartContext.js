import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
          const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
          if (existingItemIndex !== -1) {
            const updatedItems = [...prevItems];
            updatedItems[existingItemIndex] = {
              ...updatedItems[existingItemIndex],
              quantity: updatedItems[existingItemIndex].quantity + 1
            };
            return updatedItems;
          } else {
            const { quantity, ...cleanProduct } = product;
            return [...prevItems, { ...cleanProduct, quantity: 1 }];
          }
        });
      };
      

    return(
        <CartContext.Provider value={{ cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    );
};