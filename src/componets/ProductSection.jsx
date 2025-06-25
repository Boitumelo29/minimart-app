import React, {useEffect, useState, useContext} from "react";
import { fetchAllProducts } from "../services/productService";
import '../styles/ProductSection.css';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductSection = () => {
    const { addToCart } = useContext(CartContext);
    const [randomProducts, setRandomProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleProduct = () => {
        navigate(`/allProducts`);
    };
    const handleDetails= (productId)=>{
        navigate(`/product/${productId}`);
    };

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await fetchAllProducts();
                const shuffled = [...products].sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 3);
                setRandomProducts(selected);
            } catch (error) {
                console.error("failed to get random products:", error);
            }
            finally{
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    return (
        <div className="product-content">
            <section>
                {loading ? (<h1>Loading Customer Favourite</h1>) : (
                    <div className="product-section">
                        <h2>Customer Favourites</h2>
                        <div className="product-card-container">
                            {randomProducts.map(product => (
                                <div className="product-card" key={product.id}>
                                    <div className="badge">Customer Favourite</div>
                                    <img onClick={() => handleDetails(product.id)} src={product.image} alt={product.title} />
                                    <h3 onClick={() => handleDetails(product.id)}>{product.title}</h3>
                                    <p>R{product.price}</p>
                                    <button onClick={()=> addToCart(product)} className="add-btn"> Add to Cart</button>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleProduct} className="btn"><span>View All Products</span></button>
                    </div>)}
            </section>
        </div>
    );
}
export default ProductSection;