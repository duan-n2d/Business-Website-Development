import React, { useState, useEffect } from 'react';
import { PiArrowRightBold } from 'react-icons/pi';
import axios from 'axios';

const API = 'http://localhost:5000/api/auth/';
// const API = 'https://gakki.onrender.com/api/auth/';

const Card = (product) => {
  const id = product.id;
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API}product/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${API}product/${id}/img`);
        setImage(response.data);
      } catch (error) {
        console.error('Error fetching product image:', error);
      }
    };

    fetchImage();
  }, [id]);

  const url = 'https://drive.google.com/uc?id=';
  console.log(data);
  console.log(image);

  return (
    <div className="max-w-2xl min-h-[345px] font-nunito">
      {data && image && (
        <div className="relative">
          <div className="absolute top-2 left-2 bg-gray-800 h-[340px] w-[250px]"></div>
          <div className="absolute top-0 left-0 bg-white h-[340px] w-[250px] border border-gray-800">
            <div className="relative items-center w-9/12 text-gray-800 mx-auto">
              <div className="absolute h-full w-full flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                <button className="bg-[#598E75] text-white py-3 mx-auto opacity-60 hover:opacity-100 font-semibold rounded w-full">
                  <a href={`/product/${data.product && data.product.product_id}`}>Xem chi tiết</a>
                </button>
              </div>
              {image && image[0] && (
                <img src={`${url}${image[0]}`} alt="Product Image" className="mx-auto pt-3" />
              )}
            </div>
            <div className="h-[90px] flex flex-col justify-center items-center text-gray-800 my-auto">
              <p className="px-1 my-auto text-base text-center font-medium">
                {data.product && data.product.product_name}
              </p>
              <p className="text-bold text-red-700 text-center font-medium">
                {data.product && data.product.current_price}
              </p>
            </div>
            <div className="mb-2 items-center text-gray-800 mx-auto">
              <button className="mt-3 flex mx-auto outline-none outline-green-300 rounded py px-3 hover:bg-green-300">
                <p>Đặt mua </p>
                <PiArrowRightBold className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;