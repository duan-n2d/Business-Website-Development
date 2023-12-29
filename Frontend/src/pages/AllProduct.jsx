import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductsGrid from "../components/ProductsGrid";

export default function AllProduct() {
    return (
        <div className="font-nunito">
            <Header />
            <NavBar />
            <ProductsGrid/>
            <Footer/>
        </div>
    );
}