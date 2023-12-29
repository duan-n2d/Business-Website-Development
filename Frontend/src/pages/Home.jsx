// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import axios from "axios";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CarouselWithContent from "../components/Carousel";
import Card from "../components/Card2";
import ProductDetail from "../components/ProductDetail";

export default function Home() {
    return (
        <div>
            <Header />
            <NavBar />
            
            <Footer/>
        </div>
    );
}