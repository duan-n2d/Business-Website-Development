import React from 'react';
import { MdLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaShoppingCart } from "react-icons/fa";
import { GiHouse, GiPriceTag } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className='font-nunito xl:text-18 lg:text-16'>
      {/* Phần Trust */}
      <div className='bg-[#F3FFF1] pl-[5%] pr-[5%] sm:text-lg lg:text-base'>
        <div className='flex justify-around flex-wrap'>
          <center className='pt-5 pb-5 w-[50%] lg:w-auto'>
            <div><GiHouse className='w-[40px] h-[60px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[50px] md:m-5 xl:w-[130px] xl:h-[100px]' /></div>
            <h3><strong>Ngôi Nhà Âm Nhạc <br /> &amp; Cá Tính Âm Nhạc</strong></h3>
          </center>
          <center className='pt-5 pb-5 w-[50%] lg:w-auto'>
            <div><FaTruckFast className='w-[40px] h-[60px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[50px] md:m-5 xl:w-[130px] xl:h-[100px]' /></div>
            <h3><strong>Giao Hàng Miễn Phí <br />&amp; Đảm Bảo Vận Chuyển</strong></h3>
          </center>
          <center className='pt-5 pb-5 w-[50%] lg:w-auto'>
            <div><FaShoppingCart className='w-[40px] h-[60px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[50px] md:m-5 xl:w-[130px] xl:h-[100px]' /></div>
            <h3><strong>Mua Sắm Trực Tuyến <br />Đảm Bảo An Toàn</strong></h3>
          </center>
          <center className='pt-5 pb-5 w-[50%] lg:w-auto'>
            <div><GiPriceTag className='w-[40px] h-[60px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[50px] md:m-5 xl:w-[130px] xl:h-[100px]' /></div>
            <h3><strong>Đơn Giá Đã Bao Gồm <br />Các Khoản Thuế</strong></h3>
          </center>
        </div>
      </div>


      {/* Phần Contact */}
      <div className=' bg-[#FFFFED85] pl-[5%] pr-[5%] text-16'>
        <br />
        <div className='flex space-x-20 sm:space-x-14 p-auto justify-center align-middle text-5xl lg:text-30'>
          <a href="#"><RiInstagramFill className='xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]'/></a>
          <a href="#"><FaFacebook className='xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]' /></a>
        </div>
        <br />
        <hr className='lg:w-full border-black' />

        <div class="contact" className='lg:flex lg:flex-wrap xl:space-x-11 lg:space-x-9 sm:justify-center'>
          {/* Image */}
          <div class='image' className='lg:w-[19%] xl:w-[22%] md:w-full pt-5'>
            <center>
            <a href="#">
              <img src=".\src\assets\Gakki.png" alt="Gakki" className='lg:w-[100%] w-[30%]' />
            </a>
            </center>
            <div className='text-justify mt-1'>Với mong muốn chữa lành những trái tim bằng âm vang giai điệu, chúng tôi hi vọng sẽ là người bạn đồng hành trên con đường âm nhạc của bạn.</div>
          </div>
          {/* Info */}
          <div class='info' className='lg:w-[31%] xl:w-[23%] lg:pt-5 pt-10'>
            <div className='lg:text-center font-bold text-red-500 text-20 pt-5 xl:pb-2'>THÔNG TIN LIÊN HỆ</div> <br />

            <div className='flex'>
            <div className='p-1 mr-5 m-2 rounded-full shadow bg-gray-800 text-white w-10 h-10'><a href="#"><FaMapLocationDot className='w-8 h-8' /></a></div>
            <div className=' text-justify sm:mr-8'>Số 669 Quốc lộ 1A, Khu phố 3, phường Linh Xuân, TP Thủ Đức, TP Hồ Chí Minh</div>
            </div>

            <div className='flex'>
            <div className='p-1 mr-5 m-2 rounded-full shadow bg-gray-800 text-white w-10 h-10'><a href="#"><MdLocalPhone className='w-8 h-8' /></a></div>
            <div className='text-justify pt-3'>090909090</div>
            </div>

            <div className='flex'>
            <div className='p-1 mr-5 m-2 rounded-full shadow bg-gray-800 text-white w-10 h-10'><a href="#"><CiMail className='w-8 h-8' /></a></div>
            <div className='text-justify pt-3'>gakki.support@gmail.com</div>
            </div>
          </div>

          {/* Policy */}
          <div class='policy' className='lg:w-[18%] sm:w-full lg:pt-10 pt-10 xl:w-auto'>
            <div className='font-bold text-red-500 text-20 lg:text-center'>CHÍNH SÁCH VÀ HỖ TRỢ</div> <br />
            <div className='leading-10'>
              <a href="#" className='hover:underline hover:cursor-pointer'>Điều khoản dịch vụ</a><br />
              <a href="#" className='hover:underline hover:cursor-pointer'>Chính sách bảo mật</a><br />
              <a href="#" className='hover:underline hover:cursor-pointer'>Chính sách đổi trả</a><br />
              <a href="#" className='hover:underline hover:cursor-pointer'>Chế độ bảo hành</a>
            </div>
            <br />
          </div>

          {/* Register */}
          <div class='Register' className='xl:w-[22%] lg:w-[20%] lg:pt-10 mt-2 leading-7 sm:pt-5'>
            <div className='lg:text-center pb-2'>Đăng ký nhận thông báo qua email</div>
            <div>
              <a href="#"><div className='border-black border-0 p-1 ml-3 mb-3 mt-3 w-[70%] text-center font-semibold rounded-md bg-[#BAFFCA]'>Đăng ký &rarr;</div></a>
              <div className='leading-10 pt-1'>
              <a href="#" className='hover:underline hover:cursor-pointer'>Hướng dẫn mua hàng</a><br />
              <a href="#" className='hover:underline hover:cursor-pointer'>Tìm cửa hàng</a>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <hr className='border-black' />
        <br />
      </div>
    </footer>
  );
}

export default Footer;
