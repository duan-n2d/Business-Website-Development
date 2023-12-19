import React from "react";
const products =[
  {  name:'Guitar Ba Đờn',price: '1.500.000Đ',img:'https://i.ibb.co/qFdJmdH/dan-guitar-acoustic-poshman-1-removebg.png',masp:"BD3"},
  {  name:'Guitar Yamaha',price: '2.000.000Đ',img:'https://i.ibb.co/qFdJmdH/dan-guitar-acoustic-poshman-1-removebg.png',masp:"YAH"},
  {  name:'Guitar Casio',price: '2.800.000Đ',img:'https://i.ibb.co/qFdJmdH/dan-guitar-acoustic-poshman-1-removebg.png',masp:"CAS"},
  {  name:'Guitar Ba Đờn',price: 'Accoustic',img:'https://i.ibb.co/qFdJmdH/dan-guitar-acoustic-poshman-1-removebg.png',masp:"CAS"},
  {  name:'Guitar Ba Đờn',price: 'Accoustic',img:'https://i.ibb.co/qFdJmdH/dan-guitar-acoustic-poshman-1-removebg.png',masp:"CAS"},
  {  name:'Guitar Ba Đờn',price: 'Accoustic',img:'https://i.ibb.co/qFdJmdH/dan-guitar-acoustic-poshman-1-removebg.png',masp:"CAS"},
  {  name:'Guitar Ba Đờn',price: 'Accoustic',img:'https://i.ibb.co/qFdJmdH/dan-guitar-acoustic-poshman-1-removebg.png',masp:"CAS"},
  {  name:'Guitar Ba Đờn',price: 'Accoustic',img:'https://i.ibb.co/qFdJmdH/dan-guitar-acoustic-poshman-1-removebg.png',masp:"CAS"},
]
function Card2() {
 
  return (
    <div className="w-[100%] px-12 justify-center items-center">
      <h1 className="text-center text-[#1B3735] sm:text-3xl lg:text-6xl font-bold py-8">Sản Phẩm Bán Chạy</h1>
    <div className="grid grid-cols-1 2xl:grid-cols-4 md:grid-cols-3 md:gap-12 sm:gap-20 lg:grid-cols-4 lg:gap-8 p-4 px-4  ">
      {products.map((product, index) => (
        <div key={index} className="bg-white  max-w-sm boxshadow border-2 border-[#1B3735] ">
          <div className="relative overflow-hidden">
            <a>
              <img
                className="rounded-t-lg p-8 object-cover"
                src={product.img}
                alt={product.name}
              />
            </a>
            <div className="absolute h-full w-full bg-green-100/20 flex items-center justify-center -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
              <button className="bg-[#598E75] text-white py-3 px-6 opacity-60 hover:opacity-100 font-semibold rounded w-[70%] ">
                Xem nhanh
              </button>
            </div>
          </div>
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-[#1B3735] font-semibold text-center text-xl tracking-tight">
                {product.name}
              </h3>
            </a>
            <a href="#">
              <h3 className="text-[#1B3735] font-semibold text-center text-xl tracking-tight">
                {product.masp}
              </h3>
            </a>
            <div className="flex items-center justify-center mt-2.5 mb-5">
              <h5 className="text-gray-900 text-xl tracking-tight">
                {product.price}
              </h5>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="text-[#1B3735] bg-white ring-[#76DC8D] border border-[#76DC8D] w-[65%]  focus:ring-2 focus: font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-110 hover:transition-all hover:duration-300 "
              >
                ĐẶT MUA <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Card2;
