import React, { useState, useEffect } from 'react';

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

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
import frame from '../assets/frame.png'
function LandingPage() {
  const calculateDaysUntilChristmas = () => {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25); 
    const millisecondsUntilChristmas = christmas.getTime() - today.getTime();
    const daysUntilChristmas = Math.floor(millisecondsUntilChristmas / (1000 * 60 * 60 * 24));
    const hoursUntilChristmas = Math.floor((millisecondsUntilChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesUntilChristmas = Math.floor((millisecondsUntilChristmas % (1000 * 60 * 60)) / (1000 * 60));
    const secondsUntilChristmas = Math.floor((millisecondsUntilChristmas % (1000 * 60)) / 1000);
    return {
      days: daysUntilChristmas,
      hours: hoursUntilChristmas,
      minutes: minutesUntilChristmas,
      seconds: secondsUntilChristmas,
    };
  };
  const [timeUntilChristmas, setTimeUntilChristmas] = useState(calculateDaysUntilChristmas);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeUntilChristmas(calculateDaysUntilChristmas);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const { days, hours, minutes, seconds } = timeUntilChristmas;
  return (
    <div className='font-nunito mt-3'>
<div className='w-[100%] flex  mx-auto text-center justify-center'>
  
<hr  className='my-auto border-t-2 border-dashed w-[15%] border-[#D8D8D8] '/>
<p className=' font-bold xl:text-26 text-[12px] mx-3 md:text-20'>ƯU ĐÃI ẤM ÁP CHO MÙA ĐÔNG</p>
<hr  className='my-auto border-[#D8D8D8] border-t-2 border-dashed w-[15%]'/>
<div>
</div>
</div>
<p className='text-center xl:text-22 md:text-16 font-bold text-[8px]'>
  Kết thúc sau
</p>
      <div className='text-center my-4'>
        <div className='w-[85%]  md:w-[40%] lg:w-[30%] xl:w-[20%] justify-center grid grid-cols-4 mx-auto gap-2'>
          <div className='bg-[#539863] w-[95%] rounded-md py-2 '>
            <div className='font-semibold  text-[#76DC8D] text-18 bg-white rounded-sm h-[50%] w-[65%] my-1 mx-auto justify-center'>
           <p>{`${days}`}</p>
            </div>
            <div className='text-white  my-2'>
              Ngày
            </div>
          </div>
          <div className='bg-[#539863] w-[95%] rounded-md py-2 '>
            <div className='font-semibold  text-[#76DC8D] text-18 bg-white rounded-sm h-[50%] w-[65%] my-1 mx-auto justify-center'>
           <p>{`${hours.toString().padStart(2, '0')}`}</p>
            </div>
            <div className='text-white  my-2'>
              Giờ
            </div>
          </div>
          <div className='bg-[#539863] w-[95%] rounded-md py-2 '>
            <div className='font-semibold  text-[#76DC8D] text-18 bg-white rounded-sm h-[50%] w-[65%] my-1 mx-auto justify-center'>
           <p>{`${minutes.toString().padStart(2, '0')}`}</p>
            </div>
            <div className='text-white  my-2'>
              Phút
            </div>
          </div>
          <div className='bg-[#539863] w-[95%] rounded-md py-2 '>
            <div className='font-semibold  text-[#76DC8D] text-18 bg-white rounded-sm h-[50%] w-[65%] my-1 mx-auto justify-center'>
           <p>{`${seconds
        .toString()
        .padStart(2, '0')}`}</p>
            </div>
            <div className='text-white  my-2'>
              Giây
            </div>
          </div>
        </div>
      </div>
    <div>
       <div className="w-[100%] px-12 justify-center items-center font-nunito">
    <div className="grid grid-cols-1 gap-9 2xl:grid-cols-4 md:grid-cols-3 md:gap-12 sm:gap-20 lg:grid-cols-4 lg:gap-8 p-4 px-4  ">
      {products.map((product, index) => (
        <div key={index} className="bg-white  max-w-sm shadow-xl  ">
          <div className="relative  ">
            <a>
              <div className='relative w-full h-full'>
                  <img src={frame} alt="" className='absolute xl:top-[47%]  top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-640 h-640 object-cover'/>
                  <div className="w-[65%] mx-auto object-cover mt-9 xl:mt-12 md:mt-6 ">
                    <img className=''
                src={product.img}
                alt={product.name}
              />
                  </div>
              </div>
            </a>
            <div className="absolute h-[115%] w-full  flex items-center justify-center -bottom-9   hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
              <button className="bg-[#598E75] text-white hover:scale-110 duration-200 hover:border-2 py-3 px-6 opacity-100 hover:opacity-100 font-semibold rounded w-[60%] ">
                Xem nhanh
              </button>
            </div>
          </div>
          <div className="px-5 pb-5 mt-14 md:pb-2">
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
                className="text-[#1B3735] bg-white ring-[#76DC8D] border border-[#76DC8D] w-[65%]  focus:ring-2 focus: font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-110 hover:transition-all hover:duration-300 md:w-[100%] "
              >
                ĐẶT MUA <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    </div>
    </div>
  );
}
export default LandingPage;
