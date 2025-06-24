import React from "react";
import ProductList from "../componets/ProductList";
import { fetchAllProducts } from "../services/productService";
import HeroSection from "../componets/HeroSection";
import ProductSection from "../componets/ProductSection";

const Home = () => {

    return (
        <main>
            <HeroSection />
            <ProductSection />

        </main>
    );
};

export default Home;