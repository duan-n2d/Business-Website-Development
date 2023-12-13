import React from 'react';

// import ImgBanner from '../assets/Banner_02.png';
import ImgBanner from '../assets/Banner_01.png';

function Banner() {
  return (
    <>
      <div className="w-full">
        <img className="w-full" src={ImgBanner} alt="" />
      </div>
    </>
  );
}

export default Banner;