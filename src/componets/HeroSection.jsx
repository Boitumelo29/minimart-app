import React from "react";
import '../styles/HeroSection.css';
import minimart from '../assets/minimart.png';
import { useNavigate } from "react-router-dom";
import HomeTypingEffect from '../componets/HomeTypingEffect';


const HeroSection = () => {

    const navigate = useNavigate();

    const handleProduct = () => {
        navigate(`/allProducts`);
    };
    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <h1>Mini Mart</h1>
                    <HomeTypingEffect />
                    <p>Shop all your favouite products.</p>
                    <button onClick={handleProduct} className="btn"><span>View All Products</span></button>
                </div>
                <img src={minimart} alt="logo" />
            </section>
        </div>

    );
};

export default HeroSection;