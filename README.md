# 🛍️ MiniMart

**MiniMart** is a simple and modern e-commerce web app built with React. Users can browse products, add items to their cart, and proceed to checkout. The app supports both guest and authenticated user shopping, with cart persistence via local storage.

---

##  Features

- Clean homepage with hero and customer favourite sections
- Cart functionality (add/remove, persists for guest or logged-in user)
- Login, Sign Up, and Logout
- Checkout form with shipping details
- State management via React Context API


---

## Tech Stack

- **React.js**
- **React Router DOM**
- **Context API** (Auth & Cart)
- **LocalStorage** (Cart persistence)
- **Custom REST API** or 
- **Vanilla CSS** 

---

## Getting Started

### 1. Clone the repo

```
git clone https://github.com/Boitumelo29/minimart-app.git
cd minimart-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm start
```

App will be live at [http://localhost:3000]

---

## 🔌API Setup

In `/services/productService.js`:

```js
const BASE_URL = 'https://fakestoreapi.com';

export const fetchAllProducts = async() => {
    try{
        const response = await fetch(`${BASE_URL}/products`);

        if(!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        return await response.json();
    }catch(error){
        console.error('Failed to fetch all products:', error);
        throw error;
    }
};
```

---

## Deployment

This project can be deployed using:

- [Netlify](https://netlify.com/)
---
