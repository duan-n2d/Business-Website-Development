import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import BlogRec from "../components/BlogRec";

export default function Home() {
    return (
        <div className="font-nunito">
            <div className="head-nav w-full">
                <Header />
                <NavBar />
            </div>
            <Carousel/>
            <BlogRec/>
            <Footer/>
        </div>
    );
}