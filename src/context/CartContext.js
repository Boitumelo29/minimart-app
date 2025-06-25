import React, {createContext, useState, useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext'
import { loadCart, saveCart } from "../services/cartService";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const { username } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [lastAddedItem, setLastAddedItem]= useState(null);

 
  useEffect(() => {
    const storedCart = loadCart(username);
    setCartItems(storedCart);
  }, [username]);


  useEffect(() => {
    saveCart(username, cartItems);
  }, [username, cartItems]);

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
        setLastAddedItem({ title: product.title, time: Date.now() });
      };

      const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
      };
      
      const clearCart = () => {
        setCartItems([]);
      };
      

    return(
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, lastAddedItem }}>
            {children}
        </CartContext.Provider>
    );
};