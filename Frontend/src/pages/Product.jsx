import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductDetail from '../components/ProductDetail'
import ProductCategory from "../components/ProductCategory";

export default function AllProduct() {
    return (
        <div className="font-nunito">
            <div className="fixed right-0 z-50 top-0 w-full  bg-green-50 shadow-md">
                <Header/>
                <NavBar/>
            </div>
            <div className="mt-60 flex justify-center items-center">
                <div className=" w-full md:w-10/12 mx-auto">
                    <ProductDetail/>
                    <ProductCategory/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}