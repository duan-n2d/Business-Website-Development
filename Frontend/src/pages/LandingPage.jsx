import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import BlogRec from "../components/BlogRec";

const imageBanner = "../assets/banners/landing.png"

export default function LandingPage() {
    return (
        <div className="font-nunito">
            <div className="fixed right-0 z-50 top-0 w-full  bg-green-50 shadow-md">
                <Header/>
                <NavBar/>
            </div>
            <div className="mt-52">
                <Banner url={imageBanner}/>
                <BlogRec/>
            </div>
            <Footer/>
        </div>
    );
}