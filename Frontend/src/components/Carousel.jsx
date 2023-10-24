import React, { useState, useEffect } from 'react';

function Carousel() {
  const [cont, setCont] = useState(0);

  useEffect(() => {
    const xx = setInterval(() => {
      switch (cont) {
        case 0:
          {
            document.getElementById('slider-1').style.display = 'none';
            document.getElementById('slider-2').style.display = 'block';
            document.getElementById('sButton1').classList.remove('bg-purple-800');
            document.getElementById('sButton2').classList.add('bg-purple-800');
            setCont(1);
            break;
          }
        case 1:
          {
            document.getElementById('slider-2').style.display = 'none';
            document.getElementById('slider-1').style.display = 'block';
            document.getElementById('sButton2').classList.remove('bg-purple-800');
            document.getElementById('sButton1').classList.add('bg-purple-800');
            setCont(0);
            break;
          }
        default:
          break;
      }
    }, 8000);
    return () => clearInterval(xx);
  }, [cont]);

  const reinitLoop = (time) => {
    clearInterval(cont);
    setTimeout(loopSlider, time);
  };

  const sliderButton1 = () => {
    document.getElementById('slider-2').style.display = 'none';
    document.getElementById('slider-1').style.display = 'block';
    document.getElementById('sButton2').classList.remove('bg-purple-800');
    document.getElementById('sButton1').classList.add('bg-purple-800');
    reinitLoop(4000);
    setCont(0);
  };

  const sliderButton2 = () => {
    document.getElementById('slider-1').style.display = 'none';
    document.getElementById('slider-2').style.display = 'block';
    document.getElementById('sButton1').classList.remove('bg-purple-800');
    document.getElementById('sButton2').classList.add('bg-purple-800');
    reinitLoop(4000);
    setCont(1);
  };

  useEffect(() => {
    document.getElementById('slider-2').style.display = 'none';
    document.getElementById('sButton1').classList.add('bg-purple-800');
  }, []);

  return (
    <div>
      <div className="sliderAx h-auto">
        <div id="slider-1" className="container mx-auto">
          <div
            className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
            style={{
              backgroundImage: "url('https://via.placeholder.com/150')", // Replace with your image URL
            }}
          >
            <div className="md:w-1/2">
              <p className="font-bold text-sm uppercase">Services</p>
              <p className="text-3xl font-bold">Hello world</p>
              <p className="text-2xl mb-10 leading-none">
                Carousel with TailwindCSS and jQuery
              </p>
              <a
                href="#"
                className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
              >
                Contact us
              </a>
            </div>
          </div>
          <br />
        </div>

        <div id="slider-2" className="container mx-auto">
          <div
            className="bg-cover bg-top h-auto text-white py-24 px-10 object-fill"
            style={{
              backgroundImage: "url('https://via.placeholder.com/150')", // Replace with your image URL
            }}
          >
            <p className="font-bold text-sm uppercase">Services</p>
            <p className="text-3xl font-bold">Hello world</p>
            <p className="text-2xl mb-10 leading-none">
              Carousel with TailwindCSS and jQuery
            </p>
            <a
              href="#"
              className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
            >
              Contact us
            </a>
          </div>
          <br />
        </div>
      </div>
      <div className="flex justify-between w-12 mx-auto pb-2">
        <button
          id="sButton1"
          onClick={sliderButton1}
          className="bg-purple-400 rounded-full w-4 pb-2"
        ></button>
        <button
          id="sButton2"
          onClick={sliderButton2}
          className="bg-purple-400 rounded-full w-4 p-2"
        ></button>
      </div>
    </div>
  );
};

export default Carousel;
