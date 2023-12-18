
import React from 'react';
// import image from assets
import url from '../assets/banners/banner01.png';

function Banner() {
  return (
    <img src={url} alt='Banner' className="object-cover w-full h-full"/>
  );
}

export default Banner;