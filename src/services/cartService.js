export const getCartKey = (username) => {
    return username ? `cart_${username}` : "cart_guest";
  };
  
  export const loadCart = (username) => {
    const key = getCartKey(username);
    const stored = localStorage.getItem(key);
    try {
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to load cart:", e);
      return [];
    }
  };
  
  export const saveCart = (username, cartItems) => {
  try{
    const key = getCartKey(username);
    localStorage.setItem(key, JSON.stringify(cartItems));
  }catch(error){
    console.error('failed to save cart', error);
  }
  };
  
  export const clearCartStorage = (username) => {
   try{
    const key = getCartKey(username);
    localStorage.removeItem(key);
   }catch(error){
    console.log.error('failed to clear cart');
   }
  };
  