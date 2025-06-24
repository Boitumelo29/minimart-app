import React, {useEffect, useState} from "react";
import { fetchAllProducts } from "../services/productService";
import '../styles/ProductSection.css';

const ProductSection = ()=>{
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await fetchAllProducts();
                const shuffled = [...products].sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 3);
                setRandomProducts(selected);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        getProducts();
    }, []);

    return(
        <div className="product-content">
             <section className="home" id="home">
                <div className="product-section">
                    <h2 className="section-title">Customer Favourites</h2>
                    <div className="product-card-container">
                        {randomProducts.map(product => (
                            <div className="product-card" key={product.id}>
                                <div className="badge">Customer Favourite</div>
                                <img src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>{product.description.slice(0, 60)}...</p>
                                <p className="price">R{product.price}</p>
                                <button className="add-btn"> Add to Cart   </button>
                            </div>
                        ))}
                    </div>
                    <button className="btn"><span>View All Products</span></button>
                </div>
            </section>
        </div>
    );
}
export default ProductSection;