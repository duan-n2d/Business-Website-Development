import React, { useState, useEffect } from "react";
import { Trash, Plus, Minus } from "@phosphor-icons/react";
import { PiCheckSquare, PiSquare } from "react-icons/pi";
import hinh2 from "../assets/aboutus/hinh2.png";
import guitar from "../assets/carrt/guitar.png";
import momo from "../assets/carrt/momo.png";
import mastercard from "../assets/carrt/mastercard.png";
import napas from "../assets/carrt/napas.png";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const API = "https://gakki.onrender.com/api/auth/";

function Checkbox({ isChecked, handleCheckboxChange, id }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={`styledCheckbox${id}`}
        className="hidden"
        checked={isChecked}
        onClick={handleCheckboxChange}
      />
      <label
        htmlFor={`styledCheckbox${id}`}
        className="cursor-pointer flex items-center justify-center focus:outline-none focus:border-blue-500 transition duration-300"
      >
        {isChecked ? (
          <PiCheckSquare className="w-6 h-6 text-blue-500" />
        ) : (
          <PiSquare className="w-6 h-6 text-gray-500" />
        )}
      </label>
    </div>
  );
}

function CartItem({ product, onIncrement, onDecrement, onDelete, onChange }) {
  const { id, image, name, price, quantity, isChecked } = product;

  return (
    <div className="flex lg:flex-row flex-col justify-between items-center w-full">
      <div className="flex items-center w-full lg:w-1/2">
        <Checkbox
          isChecked={isChecked}
          handleCheckboxChange={() => onChange()}
          id={id}
        />
        <img src={image} className="h-20 w-auto ml-5" />
        <h1 className="text-16 ml-[22px] font-bold leading-8 text-[#1B3735] max-[800px]:ml-auto">
          {name}
        </h1>
      </div>
      <div className="flex w-full lg:w-1/2 mt-2 md:mt-0">
        <div className="flex items-center">
          <h1 className="text-16 md-5 md:ml-[22px] my-auto font-bold leading-8 text-[#1B3735] ">
            {price}đ
          </h1>
          <div className="flex flex-row items-center ml-[30px] mt-[10px] h-[24px] w-[92px]">
            <button
              type="button"
              className="text-black ml-[10px] w-[24px] bg-white"
              onClick={onIncrement}
            >
              <Plus className="w-[24px] h-[24px]" />
            </button>
            <div className="text-center w-[42px] h-[24px] bg-white">
              {quantity}
            </div>
            <button
              type="button"
              className="text-black w-[24px] bg-white"
              onClick={onDecrement}
            >
              <Minus className="w-[24px] h-[24px]" />
            </button>
          </div>
          <div className="text-16 ml-5 md:ml-[30px] my-auto font-bold leading-8 text-orange-700">
            {isChecked ? quantity * price + "đ" : "0đ"}
          </div>
          <button
            type="button"
            className="text-black ml-8 md:ml-[55px] sm:mr-[5px]"
            onClick={onDelete}
          >
            <Trash className="w-[25px] h-[27.5px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [
    { id: 1, image: guitar, name: "Sản phẩm 1", price: 1000000, quantity: 1, isChecked: true },
    { id: 2, image: guitar, name: "Sản phẩm 2", price: 1000000, quantity: 1, isChecked: true },
    { id: 3, image: guitar, name: "Sản phẩm 3", price: 1000000, quantity: 1, isChecked: true }
  ]);

  console.log(cart);

  const handleIncrement = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleCheckboxChange = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleDelete = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  useEffect(() => {
    const checkedProducts = cart.filter((item) => item.isChecked);
    const total = checkedProducts.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setTotalPrice(total);
  }, [cart]);

  const handleGoToCheckout = () => {
    // save to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice);
    // redirect to checkout page
    window.location.href = '/check-out';
  }

  const handleGoToShop = () => {
    window.location.href = '/';
  }

  return (
    <>
      <div className="fixed font-nunito right-0 z-50 top-0 w-full  bg-green-50 shadow-md">
        <Header />
        <NavBar />
      </div>

      <div className="relative mt-64 text-[#1B3735] mb-10">
        <div className="mx-auto px-2 md:px-[50px] font-nunito mt-8 font-nunito">
          <h1 className="text-30 font-bold text-center leading-8 mb-5 ">
            Giỏ hàng của bạn
          </h1>
          <h1 className="text-16 lg:mx-[60px] lg:text-left sm:text-center sm:mx-auto font-semi-bold leading-8 text-[#1B3735] mb-3">
            Bạn đang có 2 sản phẩm trong giỏ hàng
          </h1>
          <div className="flex lg:flex-row flex-col">
            <div className="lg:flex px-5 flex-row lg:ml-[60px] lg:w-[915px] hidden h-[57px] bg-[#F3FFF1] rounded-xl">
              <div className="flex flex-row basis-1/2">
                <Checkbox className="" />
                <h1 className="text-16 ml-10 my-auto font-bold leading-8 text-[#1B3735]">
                  Sản phẩm
                </h1>
              </div>
              <div className="flex flex-row basis-1/2 mml-[30px]">
                <div className="grid grid-cols-3 gap-4">
                  <h1 className="text-16 ml-[22px] my-auto font-bold leading-8 text-[#1B3735] ">
                    Đơn giá
                  </h1>
                  <h1 className="text-16 ml-[22px] my-auto font-bold leading-8 text-[#1B3735] ">
                    Số lượng
                  </h1>
                  <h1 className="text-16 ml-[22px] my-auto font-bold leading-8 text-[#1B3735] ">
                    Thành tiền
                  </h1>
                </div>
                <button
                  type="button"
                  className="text-black ml-[60px] basic-1/3 sm:mr-[5px]"
                >
                  <Trash className="w-[25px] h-[27.5px]" />
                </button>
              </div>
            </div>
            <img
              src={hinh2}
              className="w-[333px] h-auto mx-[30px] mt-[-85px] hidden lg:flex"
            />
          </div>

          <div className="flex lg:flex-row flex-col">
            <div className="lg:mt-[10px] lg:ml-[60px] lg:w-[915px] sm:w-[666px] sm:mx-[30px]">
              <div className="flex flex-col  bg-[#ECFAFF] px-5 pb-5  rounded-xl">
                {cart.map((product) => (
                  <div className="flex flex-row w-full mt-5 lg:mb-0 mb-10" key={product.id}>
                    <CartItem
                      product={product}
                      onIncrement={() => handleIncrement(product.id)}
                      onDecrement={() => handleDecrement(product.id)}
                      onDelete={() => handleDelete(product.id)}
                      onChange={() => handleCheckboxChange(product.id)}
                    />
                    <div className="max-w-[864px] h-[3px] bg-gray-400 border-0 rounded md:my-10"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:mx-[30px] mt-[10px] lg:mb-[30px] lg:mx-[30px] lg:w-[333px] h-[527px] sm:w-[666px] bg-[#F3FFF1] rounded-xl">
              <div className="flex flex-col  bg-[#ECFAFF] px-5 pb-5  rounded-xl">
                <h1 className="text-20 text-center my-[20px] font-bold leading-8 text-[#1B3735] ">
                  Thông tin đơn hàng
                </h1>
                <div className="w-auto h-2 mx-[14px] mb-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 308 2"
                    fill="none"
                  >
                    <path
                      d="M1.00001 1L307 1"
                      stroke="#D8D8D8"
                      strokeWidth="4"
                      strokeMiterlimit="4.62023"
                      strokeLinecap="round"
                      strokeDasharray="7 7"
                    />
                  </svg>
                </div>

                <div className="flex flex-row mx-[14px]">
                  <h1 className="text-20 my-auto font-bold leading-8 text-orange-700 basis-1/2">
                    Tổng tiền:
                  </h1>
                  <h1 className="text-20 lg:ml-[80px] sm:ml-[400px] my-auto font-bold leading-8 text-[#1B3735] basis-1/2">
                    {totalPrice} đ
                  </h1>
                </div>
                <div className="max-w-[864px] border-2 mx-[14px] mt-[15px] mb-[5px] h-[3px] bg-gray-900 rounded-xl"></div>
                <div className="flex flex-col">
                  <h1 className="text-14 ml-[22px] lg:text-left sm:text-center my-auto font-bold leading-8 text-[#1B3735] ">
                    Chúng tôi đồng ý
                  </h1>
                  <div className="flex flex-row justify-between mx-[10px] w-[306px] self-center">
                    <img src={momo} className="w-[49px] h-[49px] mx-auto" />
                    <img src={napas} className="w-auto h-[24px] mx-auto my-auto" />
                    <img src={mastercard} className="w-auto h-[49px] mx-auto" />
                  </div>
                </div>
                <button className="w-64 mx-auto my-5 bg-[#FFEDCA] text-20 font-semibold text-[#0F4A1D] py-2 px-4 border border-[#0F4A1D] rounded hover:bg-[#0F4A1D] hover:text-white"
                onClick={handleGoToCheckout}>
                  Tiến hành đặt hàng
                </button>
                <h1 className="text-14 mx-[14px] font-bold self-center text-justify leading-8 text-[#1B3735] ">
                  Phí vận chuyển được tính tại trang thanh toán, bạn có thể nhập mã
                  giảm giá ở đó
                </h1>
                <button className="w-64 mb-[40px] mx-auto my-5 bg-white text-20 font-semibold text-[#0F4A1D] py-2 px-4 border border-[#0F4A1D] rounded hover:bg-[#0F4A1D] hover:text-white"
                onClick={handleGoToShop}>
                  Tiếp tục mua hàng
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cart;
