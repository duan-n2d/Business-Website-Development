import React, { useState, useEffect } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import Banner01 from "../assets/banners/Banner_01.png";
import Banner02 from "../assets/banners/Banner_02.png";
import Banner03 from "../assets/banners/Banner_03.png";
import Banner04 from "../assets/banners/Banner_04.png";
import Banner from "./Banner";

function Carousel() {
    const images = [Banner01, Banner02, Banner03, Banner04];
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
  
    const nextSlide = () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    };
  
    const prevSlide = () => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      }
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        nextSlide();
      }, 3000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [activeIndex, isTransitioning]);
  
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };
  
    return (
      <div className="relative carousel flex">
        <div className="w-full overflow-hidden">
          <div
            className="panels flex"
            style={{
              width: `${images.length}00%`,

            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full h-auto" style={{transform: `translateX(-${activeIndex * 100}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',}}
              >
                <Banner url={image} />
              </div>
            ))}
          </div>

            <div className="indicators absolute z-30 flex -translate-x-1/2  left-1/2 space-x-4 rtl:space-x-reverse py-3">
                {images.map((image, index) => (
                    <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={` rounded-full transition duration-300 my-auto ${
                        index === activeIndex ? 'bg-[#1B3735] w-4 h-4' : 'bg-gray-400 h-3 w-3'
                    }`}
                    />
                ))}
            </div>

        <div className="absolute top-[50%] mx-4 start-0 z-30 flex items-center justify-center h-auto cursor-pointer group focus:outline-none">
            <button onClick={prevSlide} className="inline-flex items-center justify-center w-10 h-10 rounded-full  text-[#1B3735] hover:text-white bg-[#B7EDAB] dark:bg-gray-800/30 group-hover:bg-[#1B3735] dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <PiCaretLeftBold className="w-4 h-4 rtl:rotate-180"/>
            </button>
        </div>

        <div className="absolute top-[50%] mx-4 end-0 z-30 flex items-center justify-center h-auto cursor-pointer group focus:outline-none">
            <button onClick={nextSlide} className="inline-flex items-center justify-center w-10 h-10 rounded-full  text-[#1B3735] hover:text-white bg-[#B7EDAB] dark:bg-gray-800/30 group-hover:bg-[#1B3735] dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <PiCaretRightBold className="w-4 h-4 rtl:rotate-180"/>
            </button>
        </div>
        </div>
    </div>
  );
}

export default Carousel;
