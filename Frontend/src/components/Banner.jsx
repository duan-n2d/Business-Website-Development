import React from 'react';

function Banner(ImgBanner) {
  return (
    <div className="w-full">
      <img className="w-full" src={ImgBanner.url} alt="image-banner" />
    </div>
  );
}

export default Banner;