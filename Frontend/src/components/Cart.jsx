import React from "react";
import { Checkbox } from "@material-tailwind/react";
import { Trash, Plus, Minus } from "phosphor-react";
import hinh2 from "../assets/aboutus/hinh2.png";
import guitar from "../assets/carrt/guitar.png";
import momo from "../assets/carrt/momo.png";
import mastercard from "../assets/carrt/mastercard.png";
import napas from "../assets/carrt/napas.png";
function Cart() {
  return (
    <div className=" container mx-auto px-[50px] font-nunito mt-8 font-nunito">
      <h1 className="text-30 font-bold text-center leading-8 ">
        Giỏ hàng của bạn
      </h1>
      <h1 className="text-16 lg:mx-[60px] lg:text-left sm:text-center sm:mx-auto font-semi-bold leading-8 text-[#1B3735] ">
        Bạn đang có 2 sản phẩm trong giỏ hàng
      </h1>
      <div className="flex lg:flex-row sm:flex-col">
        <div className="lg:flex flex-row ml-[60px] lg:w-[915px] sm:hidden h-[57px] bg-[#F3FFF1] rounded-xl">
          <div className="flex flex-row basis-1/2">
            <Checkbox className="border-[#1B3735] ml-[10px]" />
            <h1 className="text-16 ml-[22px] my-auto font-bold leading-8 text-[#1B3735] max-[800px]:ml-auto">
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
          className="w-[333px] h-auto mx-[30px] mt-[-85px] sm:hidden lg:flex"
        />
      </div>

      <div className="flex lg:flex-row sm:flex-col">
        <div className="lg:mt-[51px] lg:ml-[60px] lg:w-[915px] sm:w-[666px] sm:mx-[30px] sm:mt-[20px] bg-[#ECFAFF] rounded-xl max-[800px]:mx-[5px]">
          <div className="flex flex-row">
            <div className="flex flex-grow max-w-[915px] h-auto max-[800px]:mx-[5px]">
              <div className="flex flex-row basis-1/2">
                <Checkbox
                  defaultChecked
                  className="border-[#1B3735] ml-[10px]"
                />
                <img
                  src={guitar}
                  className="w-[119px] h-[124px] mt-[29px] ml-[10px]"
                />
                <h1 className="text-16 ml-[22px] mt-[39px] mb-auto font-bold leading-8 text-[#1B3735] max-[800px]:ml-auto">
                  Sản phẩm
                </h1>
              </div>
              <div className="flex flex-row mt-[108px] basis-1/2">
                <div className="flex flex-row">
                  <h1 className="text-16 ml-[22px] my-auto font-bold leading-8 text-[#1B3735] ">
                    1.000.000đ
                  </h1>
                  <div className="flex flex-row items-center ml-[30px] mt-[10px] h-[24px] w-[92px]">
                    <button
                      type="button"
                      className="text-black ml-[10px] w-[24px] bg-white"
                    >
                      <Plus className="w-[24px] h-[24px]" />
                    </button>
                    <div className="text-center w-[42px] h-[24px] bg-white">
                      1
                    </div>
                    <button
                      type="button"
                      className="text-black w-[24px] bg-white"
                    >
                      <Minus className="w-[24px] h-[24px]" />
                    </button>
                  </div>
                  <div className=" text-16 ml-[30px] my-auto font-bold leading-8 text-orange-700 ">
                    1.000.000đ
                  </div>
                </div>
                <button
                  type="button"
                  className="text-black ml-[55px] sm:mr-[5px]"
                >
                  <Trash className="w-[25px] h-[27.5px]" />
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[864px] mx-[25.5px] h-[3px] bg-gray-400 border-0 rounded md:my-10 max-[900px]:my-[10px]"></div>
          <div className="flex flex-row">
            <div className="flex flex-grow max-w-[915px] h-auto max-[800px]:mx-[5px]">
              <div className="flex flex-row basis-1/2">
                <Checkbox
                  defaultChecked
                  className="border-[#1B3735] ml-[10px]"
                />
                <img src={guitar} className="w-[119px] h-[124px] ml-[10px]" />
                <h1 className="text-16 ml-[22px] mb-auto font-bold leading-8 text-[#1B3735] max-[800px]:ml-auto">
                  Sản phẩm
                </h1>
              </div>
              <div className="flex flex-row mt-[88px] basis-1/2">
                <div className="flex flex-row">
                  <h1 className="text-16 ml-[22px] my-auto font-bold leading-8 text-[#1B3735] ">
                    1.000.000đ
                  </h1>
                  <div className="flex flex-row items-center ml-[30px] mt-[10px] h-[24px] w-[92px]">
                    <button
                      type="button"
                      className="text-black ml-[10px] w-[24px] bg-white"
                    >
                      <Plus className="w-[24px] h-[24px]" />
                    </button>
                    <div className="text-center w-[42px] h-[24px] bg-white">
                      1
                    </div>
                    <button
                      type="button"
                      className="text-black w-[24px] bg-white"
                    >
                      <Minus className="w-[24px] h-[24px]" />
                    </button>
                  </div>
                  <div className=" text-16 ml-[30px] my-auto font-bold leading-8 text-orange-700 ">
                    1.000.000đ
                  </div>
                </div>
                <button
                  type="button"
                  className="text-black ml-[55px] sm:mr-[5px]"
                >
                  <Trash className="w-[25px] h-[27.5px]" />
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[864px] mx-[25.5px] h-[3px] bg-gray-400 border-0 rounded md:my-10 max-[900px]:my-[10px]"></div>
          <div className="flex flex-row pb-[30px]">
            <div className="flex flex-grow max-w-[915px] h-auto max-[800px]:mx-[5px]">
              <div className="flex flex-row basis-1/2">
                <Checkbox
                  defaultChecked
                  className="border-[#1B3735] ml-[10px]"
                />
                <img src={guitar} className="w-[119px] h-[124px] ml-[10px]" />
                <h1 className="text-16 ml-[22px] mb-auto font-bold leading-8 text-[#1B3735] max-[800px]:ml-auto">
                  Sản phẩm
                </h1>
              </div>
              <div className="flex flex-row mt-[88px] basis-1/2">
                <div className="flex flex-row">
                  <h1 className="text-16 ml-[22px] my-auto font-bold leading-8 text-[#1B3735] ">
                    1.000.000đ
                  </h1>
                  <div className="flex flex-row items-center ml-[30px] mt-[10px] h-[24px] w-[92px]">
                    <button
                      type="button"
                      data-input-counter-increment="counter-inpu"
                      className="text-black ml-[10px] w-[24px] bg-white"
                    >
                      <Plus className="w-[24px] h-[24px]" />
                    </button>
                    <input
                      type="text"
                      id="counter-inpu"
                      data-input-counter
                      placeholder=""
                      value="1"
                      required
                      className="text-center w-[42px] h-[24px] bg-white"
                    />
                    <button
                      type="button"
                      data-input-counter-decrement="counter-input"
                      className="text-black w-[24px] bg-white"
                    >
                      <Minus className="w-[24px] h-[24px]" />
                    </button>
                  </div>
                  <div className=" text-16 ml-[30px] my-auto font-bold leading-8 text-orange-700">
                    1.000.000đ
                  </div>
                </div>
                <button
                  type="button"
                  className="text-black ml-[55px] sm:mr-[5px]"
                >
                  <Trash className="w-[25px] h-[27.5px]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:mx-[30px] mt-[51px] lg:mb-[30px] lg:mx-[30px] lg:w-[333px] h-[527px] sm:w-[666px] bg-[#F3FFF1] rounded-xl">
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
                stroke-width="4"
                stroke-miterlimit="4.62023"
                stroke-linecap="round"
                stroke-dasharray="7 7"
              />
            </svg>
          </div>

          <div className="flex flex-row mx-[14px]">
            <h1 className="text-20 my-auto font-bold leading-8 text-orange-700 basis-1/2">
              Tổng tiền:
            </h1>
            <h1 className="text-20 lg:ml-[80px] sm:ml-[400px] my-auto font-bold leading-8 text-[#1B3735] basis-1/2">
              7.000.000đ
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
          <button className="w-64 mx-auto my-5 bg-[#FFEDCA] text-20 font-semibold text-[#0F4A1D] py-2 px-4 border border-[#0F4A1D] rounded hover:bg-[#0F4A1D] hover:text-white">
            Tiến hành đặt hàng
          </button>
          <h1 className="text-14 mx-[14px] font-bold self-center text-justify leading-8 text-[#1B3735] ">
            Phí vận chuyển được tính tại trang thanh toán, bạn có thể nhập mã
            giảm giá ở đó
          </h1>
          <button className="w-64 mb-[40px] mx-auto my-5 bg-white text-20 font-semibold text-[#0F4A1D] py-2 px-4 border border-[#0F4A1D] rounded hover:bg-[#0F4A1D] hover:text-white">
            Tiếp tục mua hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
