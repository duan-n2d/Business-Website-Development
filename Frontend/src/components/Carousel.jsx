import React from "react";
import { useState } from "react";
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";

import Banner01 from "../assets/Banner_01.png";
import Banner02 from "../assets/Banner_02.png";
import Banner03 from "../assets/banner_login.png";

import Banner from "./Banner";

function CarouselWithContent() {
    const images = [
        Banner01,
        Banner02,
        Banner01,
        Banner02,
        Banner03,
        Banner03,
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };    

    return (
    <div className="carousel flex">
        <div className="">
            <button onClick={prevSlide}>
                <PiCaretLeftBold className="carousel-left-arrow"/>
            </button>
        </div>
        <div className="mx-10 w-1/2 flex">
            {images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={`slide-${index}`}
                className={`max-width-100 h-auto transition-transform duration-300 transform ${
                    index === activeIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
                />
            ))}
        </div>
        <div className="">
            <button onClick={nextSlide}>
                <PiCaretRightBold className="carousel-right-arrow"/>
            </button>
        </div>
    </div>
  );
}

export default CarouselWithContent;
