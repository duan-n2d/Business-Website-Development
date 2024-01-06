import React from "react";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UserAccount from "../components/UserAccount";
import UserHistory from "../components/UserHistory";

import imageBanner from "../assets/banners/landing.png";
import BlogImg1 from "../assets/banners/Blog_01.png";
import BlogImg2 from "../assets/banners/Blog_02.png";
import BlogImg3 from "../assets/banners/Blog_03.png";

export default function UserProfile() {
    const dummyBlogData = [
        { id: 1, title: 'Blog 1', imageUrl: BlogImg1, hashtag: '#Tag1', content: 'Content 1' },
        { id: 2, title: 'Blog 2', imageUrl: BlogImg2, hashtag: '#Tag2', content: 'Content 2' },
        { id: 3, title: 'Blog 3', imageUrl: BlogImg3, hashtag: '#Tag3', content: 'Content 3' },
      ];
    return (
        <div className="font-nunito flex-col justyfy-center items-center">
            <div className="fixed right-0 z-50 top-0 w-full  bg-green-50 shadow-md">
                <Header/>
                <NavBar/>
            </div>
            <div className="w-full mt-60">
                <UserAccount/>
                <UserHistory/>
            </div>
            <Footer/>
        </div>
    );
}