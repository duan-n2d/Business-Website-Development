import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import CarouselWithContent from "../components/Carousel";

export default function Home() {
    return (
        <>
            <Header />
            <NavBar />
            <Banner />
            <CarouselWithContent/>
        </>
    );
}