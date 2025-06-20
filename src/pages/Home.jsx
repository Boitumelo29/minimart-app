import React,{ useEffect, useState} from "react";
import ProductList from "../componets/ProductList";
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
        <h1> All Products</h1>
        <ProductList products={products}/>
    </div>
    );
};

