import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Star, Cube, Truck, ArrowRight, Minus, Plus } from "@phosphor-icons/react";
import axios from "axios";

const API = 'http://localhost:5000/api/auth/';
// const API = 'https://gakki.onrender.com/api/auth/';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [isZoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [specifications, setSpecifications] = useState([]);
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(5);

  useEffect(() => {
    axios.get(`${API}product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setSpecifications(Object.entries(response.data.product.specifications));
        setPrice(response.data.product.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
        setRating(response.data.product.rating);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [id]);

  useEffect(() => {
    axios.get(`${API}product/${id}/categories`)
      .then((response) => {
        setCategory(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching product category:', error);
      });
  }, [id]);

  useEffect(() => {
    axios.get(`${API}product/${id}/img`)
        .then((response) => {
          setImages(response.data);
          setSelectedImage(response.data[0]);
        })
        .catch((error) => {
          console.error('Error fetching product images:', error);
        });
  }, [id]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setPosition({ x, y });
  };

  const handleThumbnailClick = (image) => {
    setZoomed(false);
    setSelectedImage(image);
  };

  const zoomedStyle = {
    backgroundImage: `url(${selectedImage})`,
    backgroundPosition: `${position.x * 100}% ${position.y * 100}%`,
    backgroundSize: '125% 125%',
    width: '100%',
    height: '100%',
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div className="font-nunito mx-5">
      <form action="#">
        {/* Title */}
        <div className="py-5 pl-4">
          <h1 className="font-bold text-30">
            {product?.product.product_name}
          </h1>
          <div className="flex">
            {rating > 0 && [...Array(rating)].map((_, index) => (
              <Star key={index} size={30}  weight="fill" className="text-[#FFD700]"></Star>
            ))}
            {rating < 5 && [...Array(5 - rating)].map((_, index) => (
              <Star key={index} size={30} weight="fill" className="text-[ #808080]"></Star>
            ))}
            <span>
              <button className="my-1 sm:ml-10 ml-5 w-32">
                <a href="#" className="font-medium text-[#1B3735] text-18 hover:underline">Thêm đánh giá</a>
              </button>
            </span>
          </div>
        </div>

        {/* Moving Image */}
        <div className=" lg:flex sm:flex-wrap ">
          <div className=" sm:flex lg:w-[60%] sm:w-[100%] w-full " >
            <div className="ml-4 sm:block flex">
            {images.map((img, index) => (
            <img
              key={index}
              className="border border-gray-400 sm:w-[100px] sm:h-[100px] w-[23%] h-auto sm:mr-[10px] mr-[5px] cursor-pointer my-5"
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(img)}
            />
          ))}
            </div>

            <div
              className="relative overflow-hidden mx-4 w-full"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setZoomed(true)}
              onMouseLeave={() => setZoomed(false)}
              style={{ marginRight: '40px' }}
            >
              <img
                className="w-[100%] focus:bg-[#D9D9D9]"
                src={selectedImage || images[0]}
                alt="Hình ảnh"
                style={{ display: isZoomed ? 'none' : 'block', height: '500px' }}
              />
              {isZoomed && (
                <div
                  className="absolute bg-no-repeat bg-cover"
                  style={zoomedStyle}
                ></div>
              )}
            </div>
          </div>

          {/* Order menu */}
          <div className="lg:w-[40%] mx-auto bg-[#F3FFF1] w-[95%] py-10 xl:px-10 lg:px-7 px-10 sm:mt-0 mt-10">
            <div className="flex">
              <div className="w-full">
                <p className="font-bold xl:text-[32px] lg:text-30 text-24">{price} VNĐ</p>
                <div className="flex lg:my-3 sm:my-5 my-6">
                  <p className="mr-5 xl:text-24 lg:text-20 text-18 my-auto">
                    Số lượng:
                  </p>
                  <div className="bg-white flex">
                    <button
                      onClick={handleDecrement}
                      className="focus:outline-none mx-1"
                    >
                      <Minus className="lg:w-[25px] lg:h-[25px] w-[16px] h-[16px]"></Minus>
                    </button>
                    <p className="mx-3 lg:text-22 text-18">{quantity}</p>
                    <button
                      onClick={handleIncrement}
                      className="focus:outline-none mx-1">
                      <Plus className="lg:w-[25px] lg:h-[25px] w-[16px] h-[16px]"></Plus>
                    </button>
                  </div>
                </div>
              </div>
              <img src={images[0]} alt="Icon" className="w-[90px] h-[90px]" />
            </div>

            <center className="my-5">
              <button type="submit" className="text-white font-bold rounded bg-[#2D4B49] px-5 h-[56.24px] border border-[#96FEAE] flex justify-center align-middle items-center gap-3">
                <p className="m-auto font-bold xl:text-22 text-20 text-white">THÊM VÀO GIỎ HÀNG</p>
                <ArrowRight color="#96FEAE"></ArrowRight>
              </button>
            </center>

            <div className="lg:block sm:flex block justify-around">
              <div className="flex my-2">
                <Cube size={34}></Cube>
                <p className="m-auto pl-3 font-bold text-22 text-[#2D4B49]">Sản phẩm còn hàng</p>
              </div>
              <div className="flex my-2">
                <Truck size={34}></Truck>
                <p className="m-auto pl-3 font-bold text-22 text-[#2D4B49]">Giao hàng tận nơi</p>
              </div>
            </div>

            <p className="font-medium text-[#1B3735] bg-[#F3FFF1] text-justify mt-5">
              Cách thức giao hàng có thể khác nhau  khi bạn thanh toán tùy thuộc vào sản phẩm trong giỏ hàng của bạn
            </p>
          </div>
        </div>

        {/* Thông số kỹ thuật */}
        <div className="flex justify-between px-5 my-9 w-full" >
          <div className="w-full lg:w-[40%]">
            <p className="text-center text-[#1B3735] font-bold text-24 mb-10">Thông Số Kỹ Thuật</p>
            <table className="text-[#1B3735] w-[100%] border border-black" cellPadding={10}>
              <tr className="bg-[#CAFFD6]">
                <td className="border border-black font-bold w-3/12">
                  Thông tin
                </td>
                <td className="font-bold">
                  Thông Số
                </td>
              </tr>
              {specifications.map((spec, index) => (
                <tr key={index}>
                  <td className="border border-black">
                    {spec[0]}
                  </td>
                  <td className="border border-black">
                    {spec[1]}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          
          {/* Thông tin sản phẩm */}
          <div className="w-full lg:w-7/12">
            <p className="text-center text-[#1B3735] font-bold text-24 mb-10">Thông Tin Sản Phẩm </p>
            <p className="w-[100%] mx-auto bg-[#FFF5E3] p-9 text-justify">
              {product?.product.product_description}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductDetails;