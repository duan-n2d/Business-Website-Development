import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Landing from "../components/LandingPage";

import imageBanner from "../assets/banners/landing.png";

export default function LandingPage() {
    return (
        <div className="font-nunito flex-col justyfy-center items-center">
            <div className="fixed right-0 z-50 top-0 w-full  bg-green-50 shadow-md">
                <Header/>
                <NavBar/>
            </div>
            <div className="w-full mt-52">
                <Banner url={imageBanner}/>
                <Landing className="mb-10"/>
            </div>
            <Footer/>
        </div>
    );
}