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
        Banner03,
    ];
    
    const testBanner = Banner01;

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1)>=images.length ? 0 : prevIndex + 1);
      };
    
      const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1)<0 ? images.length-1 : prevIndex - 1);
      };    

    return (
    <div className="carousel flex bg-red-700">
        <div className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <button onClick={prevSlide} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <PiCaretLeftBold className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"/>
            </button>
        </div>
        <div className="mx-10">
            <div className="panels flex">
                {images.map((image, index) => (
                    <img
                    key={index}
                    src={image}
                    alt={`slide-${index}`}
                    className={`w-full h-auto transition-transform duration-300 transform ${
                        index === activeIndex ? 'translate-x-0' : 'hidden'
                    }`}
                    />
                ))}
            </div>

            <div className="indicators absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((image, index) => (
                    <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full transition duration-300 ${
                        index === activeIndex ? 'bg-white' : 'bg-gray-400'
                    }`}
                    />
                ))}
            </div>
        </div>
        <div className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none ">
            <button onClick={nextSlide} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <PiCaretRightBold className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"/>
            </button>
        </div>
    </div>
  );
}

export default CarouselWithContent;
