import React from 'react';
import ProductImg from '../assets/AnyConv.png';
import { PiArrowRightBold } from "react-icons/pi";

function Card() {
  return (
    <div className="max-w-2xl min-h-[328px]">
      <div className="relative">
        <div className="absolute top-2 left-2 bg-gray-800 h-[320px] w-[225px]"></div>
        <div className="absolute top-0 left-0 bg-white h-[320px] w-[225px] border border-gray-800">
          <div className="items-center w-10/12 text-gray-800 mx-auto">
            <img src={ProductImg} alt="Product Image" className="mx-auto" />
            <p className='text-base text-center font-medium'>Guitar martin gỗ little LX1E</p>
            <p className='text-base text-center font-medium'>10.000.000</p>
            <button className='mt-3 flex mx-auto outline-none outline-green-300 rounded py px-3 hover:bg-green-300'>
              <p>Đặt mua </p>
              <PiArrowRightBold className='w-6 h-6'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;