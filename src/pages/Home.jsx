import React,{ useEffect, useState} from "react";
import ProductList from "../componets/ProductList";
import { fetchAllProducts } from "../services/productService";
import HeroSection from "../componets/HeroSection";
import ProductSection from "../componets/ProductSection";

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
    <main>
        <HeroSection/>
        <ProductSection/>
        <h1> All Products ({products.length})</h1>
        <ProductList products={products}/>
    </main>
    );
};

export default Home;