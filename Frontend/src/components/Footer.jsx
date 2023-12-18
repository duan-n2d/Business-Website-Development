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
    <footer>
      {/* Phần Trust */}
      <div className='bg-[#F3FFF1] pl-[5%] pr-[5%] sm:text-lg lg:text-xl'>
        <div className='flex justify-around flex-wrap'>
          <center className='sm:pr-3 pt-5 pb-5 w-[50%] lg:w-auto'>
            <div><GiHouse className='sm:text-5xl lg:text-6xl xl:text-7xl text-4xl xl:m-5' /></div>
            <h3><strong>Ngôi Nhà Âm Nhạc <br /> &amp; Cá Tính Âm Nhạc</strong></h3>
          </center>
          <center className='sm:pl-3 pt-5 pb-5 w-[50%] lg:w-auto'>
            <div><FaTruckFast className='sm:text-5xl lg:text-6xl xl:text-7xl text-4xl xl:m-5' /></div>
            <h3><strong>Giao Hàng Miễn Phí <br />&amp; Đảm Bảo Vận Chuyển</strong></h3>
          </center>
          <center className='sm:pr-3 pt-5 pb-5 w-[50%] lg:w-auto'>
            <div><FaShoppingCart className='sm:text-5xl sm:mr-3 lg:text-6xl xl:text-7xl text-4xl xl:m-5' /></div>
            <h3><strong>Mua Sắm Trực Tuyến <br />Đảm Bảo An Toàn</strong></h3>
          </center>
          <center className='sm:pl-5 pt-5 pb-5 w-[50%] lg:w-auto'>
            <div><GiPriceTag className='sm:text-5xl sm:mr-3 lg:text-6xl xl:text-7xl text-4xl xl:m-5' /></div>
            <h3><strong>Đơn Giá Đã Bao Gồm <br />Các Khoản Thuế</strong></h3>
          </center>
        </div>
      </div>


      {/* Phần Contact */}
      <div className=' bg-[#FFFFED85] pl-[5%] pr-[5%] sm:text-lg text-sm'>
        <br />
        <div className='flex space-x-20 sm:space-x-14 p-auto justify-center align-middle'>
          <a href="#"><RiInstagramFill className='text-5xl lg:text-6xl' /></a>
          <a href="#"><FaFacebook className='text-5xl lg:text-6xl' /></a>
        </div>
        <br />
        <hr className='lg:w-full border-black' />

        <div class="contact" className='flex flex-wrap sm:space-x-9 xl:space-x-11 sm:justify-center'>
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
          <div class='info' className='lg:w-[31%] xl:w-[23%] lg:pt-5'>
            <div className='sm:text-center font-bold text-red-500 text-xl pt-5 xl:pb-2'>THÔNG TIN LIÊN HỆ</div> <br />

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
          <div class='policy' className='lg:w-[18%] sm:w-full lg:pt-10 pt-5 xl:w-auto'>
            <div className='font-bold text-red-500 text-xl text-center'>CHÍNH SÁCH VÀ HỖ TRỢ</div> <br />
            <div className='leading-10'>
              <a href="#" className='hover:underline hover:cursor-pointer'>Điều khoản dịch vụ</a><br />
              <a href="#" className='hover:underline hover:cursor-pointer'>Chính sách bảo mật</a><br />
              <a href="#" className='hover:underline hover:cursor-pointer'>Chính sách đổi trả</a><br />
              <a href="#" className='hover:underline hover:cursor-pointer'>Chế độ bảo hành</a>
            </div>
            <br />
          </div>

          {/* Register */}
          <div class='Register' className='xl:w-[22%] lg:w-[20%] sm:w-[49%] lg:pt-10 mt-2 leading-7  sm:pt-5'>
            <div className='sm:text-center pb-2'>Đăng ký nhận thông báo qua email</div>
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
