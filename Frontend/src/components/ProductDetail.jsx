import React from "react";
import img1 from '../assets/Gakki.png'

function ProductDetails() {
  return (

    <div className="bg-white font-nunito">

      <div className="flex">
        <div className="relative">
          <p className=" ml-16 mt-3 font-bold text-black text-[24px] leading-[normal]">
            FENDER CB-60SCE ACOUSTIC BASS GUITAR, NATURAL
          </p>

          <div className="items-center absolute  [font-family:'Inter-MediumItalic',Helvetica] font-medium italic text-[#1b3735] text-[18px] text-center tracking-[0.36px] leading-[34px] whitespace-nowrap ml-20 flex ">
            <div className="flex items-center">
              <svg className="w-10 h-10 hover:text-yellow-300 text-gray-400 ms-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-10 h-10 hover:text-yellow-300 text-gray-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-10 h-10 hover:text-yellow-300 text-gray-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-10 h-10 hover:text-yellow-300 text-gray-400 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg className="w-10 h-10 hover:text-yellow-300 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <p className="mx-7 text-[30px] ">|</p>
            <p className="text-[30px] mt-3">Thêm Đánh Giá</p>
          </div>




          <div className="flex flex-col my-28 ml-20 ">
            <button>
              <img className="w-40 bg-slate-500 my-10" src={img1} alt="" />
            </button>

            <button>
              <img className="w-40 bg-slate-500 my-10" src={img1} alt="" />
            </button>

            <button>
              <img className="w-40 bg-slate-500 my-10" src={img1} alt="" />
            </button>
          </div>
        </div>
        <div className="flex items-center ">
          <img src={img1} alt="" className="flex  -ml-52 mt-52 w-[842px] h-[811px]   bg-gray-500" />
        </div>
        <div className="flex items-start mt-52  bg-green-300">
          <table className="mt-28 border-spacing-6">
            <tr>
              <td >
                <p className="text-8xl mx-20 "><b>1.000.000Đ</b></p>
              </td>
              <td rowSpan={2} >
                <img className="w-44 bg-white mx-9" src={img1} alt="" />
              </td>
            </tr>
            <tr>
              <td><span className="text-5xl ml-24 mt-10">Số lượng</span>
                <button className="text-5xl ml-10 w-14 bg-white border">-</button>
                <span className="text-4xl mx-3  bg-white border" >1</span>
                <button className="text-5xl  w-14 bg-white border">-</button>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button className="ml-20 h-40 w-auto mt-10  bg-green-800 rounded-3xl">
                  <p className="text-7xl mx-6  text-white bg-clip-border  my-5 font-bold">Thêm Vào Giỏ Hàng</p>
                </button>
              </td>
            </tr>

            <tr >
              <td className="h-32">
                Logo
                <span className="text-5xl ml-20 font-bold  ">SẢN PHẨM CÒN HÀNG</span>
              </td>

            </tr>
            <tr >
              <td className="h-16">
                Logo
                <span className="text-5xl ml-20 font-bold  ">GIAO HÀNG TẬN NƠI</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-center text-3xl mb-40 tracking-wider italic " >Cách thức giao hàng có thể khác nhau <br />khi bạn thanh toán tùy thuộc vào <br />
                  sản phẩm trong giỏ hàng của bạn</p>
              </td>
            </tr>
          </table>
        </div>

      </div>
      <div className="flex">
        <table className="ml-40 text-3xl my-40">
          <tr className="bg-green-300">
            <th className="">Thông tin</th>
            <th>Thông số</th>
          </tr>
          <tr>
            <td>
              Kiểu thân
            </td>
            <td>
              Concert-Size
            </td>
          </tr>
          <tr>
            <td>
              Gỗ Thân
            </td>
            <td>
              Solid Spruce Top,Larrinated Mathhograity Back & Sides
            </td>
          </tr>
          <tr>
            <td>
              Màu thân
            </td>
            <td>
              Natural
            </td>
          </tr>
          <tr>
            <td>
              Măt Cân          </td>
            <td>
              Lauriel
            </td>
          </tr>
          <tr>
            <td>
              Độ Cong cần
            </td>
            <td>
              12" 305mm
            </td>
          </tr>
          <tr>
            <td>
              Scale Lenght
            </td>
            <td>
              32''' 813mm
            </td>
          </tr>
          <tr>
            <td>
              Phím đàn
            </td>
            <td>
              22
            </td>
          </tr>
        </table>
        <div className=" w-full text-center ml-56">
          <h1 className="text-7xl my-10">Thông Tin Sản Phẩm</h1>
          <h1 className="bg text-center text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo eos consectetur, ducimus doloremque iusto facilis. Harum officiis, totam porro vel tenetur, sed omnis suscipit quos deserunt quae veritatis? Sequi, iure?
          </h1>
        </div>

      </div>

    </div>

  );
}
export default ProductDetails;

