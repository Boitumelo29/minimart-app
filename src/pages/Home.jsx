import React,{ useEffect, useState} from "react";
import ProductList from "../componets/ProductList";
import Cart from "../componets/Cart";
import { fetchAllProducts } from "../services/productService";


const Home =()=>{
    const [products, setProducts] = useState([]);
useEffect(()=>{
    const loadProducts = async ()=>{
        try{
            const data = await fetchAllProducts();
            setProducts(data);
        }catch(error){
            console.error( 'Failed to fetch product:', error)
        }
    };

    loadProducts();
},
[]);

return(
    <div>
        <Cart/>
        <h1> All Products ({products.length})</h1>
        <ProductList products={products}/>
    </div>
    );
};

export default Home;