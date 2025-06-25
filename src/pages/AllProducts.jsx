import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../services/productService";
import ProductList from "../componets/ProductList";
import '../styles/AllProducts.css'

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchAllProducts();
                setProducts(data);
                setFiltered(data);
            } catch (error) {
                console.error('Failed to load all products');
            }
        }; loadProducts();
    }, []);

    useEffect(() => {
        const lowerSearch = searchTerm.toLowerCase();
        const results = products.filter(
            (p) =>
                p.title.toLowerCase().includes(lowerSearch) ||
                (p.description && p.description.toLowerCase().includes(lowerSearch))
        );
        setFiltered(results);
    }, [searchTerm, products]);

    return (
        <div className="products-section">
            <div className="search-header">
                <h1>All Products ({filtered.length})</h1>
                <div className="search-container">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
                        alt="Search Icon"
                        className="search-icon"
                    />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>

            <ProductList products={filtered} />
        </div>
    )

};

export default AllProducts;