// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import axios from "axios";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import CarouselWithContent from "../components/Carousel";
import AboutUs from "../components/AboutUs";

export default function Home() {
    return (
        <div>
            <Header />
            <NavBar />
            <Banner />
            <CarouselWithContent/>
            <AboutUs/>
        </div>
    );
}