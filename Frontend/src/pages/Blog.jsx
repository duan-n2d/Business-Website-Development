import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BlogDetail from "../components/BlogDetail";

export default function PageBlog() {
    return (
        <div className="font-nunito">
            <div className="fixed right-0 z-50 top-0 w-full  bg-green-50 shadow-md">
                <Header/>
                <NavBar/>
            </div>
            <div className="mt-60 justify-center items-center">
                <BlogDetail/>
            </div>
            <Footer/>
        </div>
    );
}