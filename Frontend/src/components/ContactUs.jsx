import React from 'react';
import img1 from '../assets/logoweb__.png'
import { Chats } from "@phosphor-icons/react";
import { MessengerLogo } from '@phosphor-icons/react';
import { PhoneCall } from '@phosphor-icons/react';
function ContactUs() {
  return (
    <div className='w-full h-full font-nunito'>
      <p className='h-1/12  ml-4 font-bold my-7 text-center text-30'>Liên Hệ Ngay Với Chúng Tôi </p>
<div className='   grid grid-cols-3 sm:grid-cols-1  lg:grid-cols-2 lg:gap-9 xl:grid-cols-3 md:gap-9  sm:gap-9 justify-items-center w-[70%] mx-auto'>
      <div className='bg-[#F3FFF1] text-center  shadow-md  py-5 w-[50%] md:w-[60%] xl:w-[70%]'>
            <div className='  flex justify-center'>
            <Chats className='' size={89}></Chats>
            </div>
            <p className='text-center font-bold text-[#1B3735] text-30'>Chat</p>
            <p className='text-center font-medium text-[#1B3735] text-16'>
            Trò chuyện cùng Gakki 24/7
            </p>
            <button className='text-16 border-collapse border-[#96FEAE] bg-[#2D4B49] hover:scale-[105%] hover:duration-200 hover:bg-white hover:text-[#2D4B49] hover:border-[#2D4B49] hover:border-collapse text-white font-medium rounded-lg py-3 mx-auto w-[90%] my-6 '>
             <a href=""> Mở Khung Chat </a> 
            </button>
          </div> 
      <div className='bg-[#F3FFF1] text-center  shadow-md  py-5 w-[50%] md:w-[60%] xl:w-[70%]'>
            <div className='  flex justify-center'>
            <MessengerLogo className='' size={89}></MessengerLogo>
            </div>
            <p className='text-center font-bold text-[#1B3735] text-30'>Chat</p>

            <p className='text-center font-medium text-[#1B3735] text-16'>
            Liên lạc với Gakki 24/7
            </p>
            <button className='text-16 border-collapse border-[#96FEAE] bg-[#2D4B49] hover:scale-[105%] hover:duration-200 hover:bg-white hover:text-[#2D4B49] hover:border-[#2D4B49] hover:border-collapse text-white font-medium rounded-lg py-3 mx-auto w-[90%] my-6  '>
             <a href=""> Mở Messenger </a> 
            </button>
          </div> 
      <div className='bg-[#F3FFF1] text-center  shadow-md  py-5 w-[50%] md:w-[60%] xl:w-[70%]'>
            <div className='  flex justify-center'>
            <PhoneCall className='' size={89}></PhoneCall>
            </div>
            <p className='text-center font-bold text-[#1B3735] text-30'>Chat</p>
            <p className='text-center font-medium text-[#1B3735] text-16'>
            Gọi cho Gakki
            </p>
            <button className='text-16 border-collapse border-[#96FEAE] bg-[#2D4B49] hover:scale-[105%] hover:duration-200 hover:bg-white hover:text-[#2D4B49] hover:border-[#2D4B49] hover:border-collapse text-white font-medium rounded-lg py-3 mx-auto w-[90%]  my-6 '>
             <a href=""> Gọi Ngay </a> 
            </button>
          </div>         
      </div>
      <p className='text-center py-8 font-bold text-30 '>Hoặc Điền Biểu Mẫu Dưới Đây</p>
      <div className='bg-[#FFFAF1] justify-center w-[50%] h-3/4 mx-auto shadow-md p-14 text-[#1B3735]'>
          <form action="">
            <p className=' font-medium text-18'>Đội ngũ chăm sóc khách hàng của chúng tôi luôn túc trực để giải đáp những thắc mắc và khó khăn bạn gặp phải trong quá trình trải nghiệm với Gakki</p>
            <div className='w-full my-5 '>
            <p className='text-20 font-bold'> Tên</p>
            <input className='w-full text-white' type="text" placeholder='Tên' />
            <hr />
            </div>
            <div className='w-full my-5'>
            <p className='text-20 font-bold' >Email</p>
            <input className='w-full' type="text" placeholder='Email' />
            <hr />
            </div>
            <div className='w-full my-5'>
            <p className='text-20 font-bold' > Số Điện Thoại</p>
            <input className='w-full' type="text" placeholder='Điện thoại' />
            <hr />
            </div>
            <div>
              <p className='text-20 font-bold'>
                Nội dung
              </p>
              <textarea className='w-full' name="" id="" cols="30" rows="10" placeholder='Nội dung'></textarea>
            </div>
            <div className='flex gap-5'>
              <input type="checkbox"  /><p>Đăng ký nhận thông báo để được ưu đãi tốt nhất và cập nhật tin tức mới nhất về Gakki.</p>
            </div>
           <div className='flex justify-items-center mx-auto  w-[25%] '>
            <button className=' text-20 font-bold bg-[#2D4B49] py-3 px-20 rounded-md text-white my-9'>Gửi</button>
           </div>
          </form>
      </div>
    </div>
  );
}

export default ContactUs;