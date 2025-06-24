import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../services/productService";
import ProductList from "../componets/ProductList";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchAllProducts();
                setProducts(data);
            } catch (error) {
                console.error('Failed to load all products');
            }
        }; loadProducts();
    }, []);


    return (
        <div className="products-section">
            <h1> All Products ({products.length})</h1>
            <ProductList products={products} />
        </div>
    )

};

export default AllProducts;