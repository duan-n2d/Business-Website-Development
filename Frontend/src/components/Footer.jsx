import React from 'react';
<<<<<<< Updated upstream
import { PiPhoneFill } from "react-icons/pi";
import { PiMapPinFill } from "react-icons/pi";
import { PiEnvelopeFill } from "react-icons/pi";
import { PiShoppingCartFill } from 'react-icons/pi';
import { PiHouseLineFill } from 'react-icons/pi';
import { PiTagFill } from 'react-icons/pi';
import { PiTruckFill } from 'react-icons/pi';
import { FaShoppingCart } from "react-icons/fa";
import { GiHouse, GiPriceTag } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
=======
import { PiPhoneFill, PiMapPinFill, PiEnvelopeFill, PiShoppingCartFill, PiHouseLineFill, PiTagFill, PiTruckFill } from 'react-icons/pi';
import Instagram from '../assets/icons/instagram.svg';
import Facebook from '../assets/icons/Facebook.svg';

const Footer = () => {
  const trustItems = [
    { icon: <PiHouseLineFill className='w-20 h-20 mx-auto mb-2'/>, description: ['Ngôi Nhà Âm Nhạc'] },
    { icon: <PiTruckFill className='w-20 h-20 mx-auto mb-2'/>, description: ['Giao Hàng Miễn Phí','Đảm Bảo Vận Chuyển'] },
    { icon: <PiShoppingCartFill className='w-20 h-20 mx-auto mb-2'/>, description: ['Mua Sắm Trực Tuyến','Đảm Bảo An Toàn'] },
    { icon: <PiTagFill className='w-20 h-20 mx-auto mb-2'/>, description: ['Đơn Giá Đã Bao Gồm Các Khoản Thuế'] },
  ];
  const contactInfo = [
    {
      icon: <PiMapPinFill size="25" />,
      detail: 'Số 669 Quốc lộ 1A, Khu phố 3, phường Linh Xuân, TP Thủ Đức, TP Hồ Chí Minh',
      url: null
    },
    {
      icon: <PiPhoneFill size="25" />,
      detail: '0847468525',
      url: 'tel:0847468525'
    },
    {
      icon: <PiEnvelopeFill size="25" />,
      detail: 'gakki.support@gmail.com',
      url: 'mailto:gakki.support@gmail.com'
    },
  ];

  const policyLinks = [
    { url: '/policy/', text: 'Điều khoản dịch vụ' },
    { url: '/policy/1', text: 'Chính sách bảo mật' },
    { url: '/policy/2', text: 'Chính sách đổi trả' },
    { url: '/policy/3', text: 'Chế độ bảo hành' },
  ];
>>>>>>> Stashed changes

function Footer() {
  return (
    <footer>
      {/* Phần Trust */}
      <div className='bg-green-100 p-5'>
        <table align='center' className='lg:w-[100%] text-[18px]'>
          <tr>
            <td align='center'>
              <div className='p-5'><PiHouseLineFill size={80} /></div>
              <h3><strong>Ngôi Nhà Âm Nhạc <br /> &amp; Cá Tính Âm Nhạc</strong></h3>
            </td>
            <td align='center'>
              <div className='p-5'><PiTruckFill size={80} /></div>
              <h3><strong>Giao Hàng Miễn Phí <br />&amp; Đảm Bảo Vận Chuyển</strong></h3>
            </td>
            <td align='center'>
              <div className='p-5'><PiShoppingCartFill size={80} /></div>
              <h3><strong>Mua Sắm Trực Tuyến <br />Đảm Bảo An Toàn</strong></h3>
            </td>
            <td align='center'>
              <div className='p-5'><PiTagFill size={80} /></div>
              <h3><strong>Đơn Giá Đã Bao Gồm <br />Các Khoản Thuế</strong></h3>
            </td>
          </tr>
        </table>
      </div>

      {/* Phần Contact */}
      <div className='bg-yellow-50 pl-[5%] pr-[5%] text-[18px]'>
        <br />
        <br />
        <br />
        <hr className='lg:w-full border-black' />
        <div class="contact" className='flex'>
          <div class='image' className='w-[25%] p-5'>
            <center>
              <a href="#">
                <img src="./src/assets/Gakki.png" alt="Gakki" width={275} />
              </a>
            </center>
            <div className='text-justify mt--1'>Với mong muốn chữa lành những trái tim bằng âm vang giai điệu, chúng tôi hi vọng sẽ là người bạn đồng hành trên con đường âm nhạc của bạn.</div>
          </div>
          <div class='info' className='w-[30%] p-5 pt-10'>
            <div className='text-center font-bold text-red-500 text-2xl pt-3'>THÔNG TIN LIÊN HỆ</div> <br />
            <table >
              <tr>
                <td valign='center'><div className='p-1 mr-5 m-2 rounded-full shadow bg-gray-800 text-white'><a href="#"><PiMapPinFill size="30" /></a></div></td>
                <td><div className='font-semibold text-justify'>Số 669 Quốc lộ 1A, Khu phố 3, phường Linh Xuân, TP Thủ Đức, TP Hồ Chí Minh</div></td>
              </tr>
              <tr>
                <td><div className='p-1 mr-5 m-2 rounded-full shadow bg-gray-800 text-white'><a href="#"><PiPhoneFill size="30" /></a></div></td>
                <td><div className='font-semibold text-justify'>090909090</div></td>
              </tr>
              <tr>
                <td><div className='p-1 mr-5 m-2 rounded-full shadow bg-gray-800 text-white'><a href="#"><PiEnvelopeFill size="30" /></a></div></td>
                <td><div className='font-semibold text-justify'>gakki.support@gmail.com</div></td>
              </tr>
            </table>
          </div>
          <div class='policy' className='w-[25%] p-5 pt-10'>
            <div className='font-bold text-red-500  text-2xl pt-3'>CHÍNH SÁCH VÀ HỖ TRỢ</div> <br />
            <div className='leading-10 ml-8 font-semibold'>
              <a href="#" className='hover:underline'>Điều khoản dịch vụ</a><br />
              <a href="#" className='hover:underline'>Chính sách bảo mật</a><br />
              <a href="#" className='hover:underline'>Chính sách đổi trả</a><br />
              <a href="#" className='hover:underline'>Chế độ bảo hành</a>
            </div>
          </div>
          <div class='login' className='w-[20%] p-5 pt-10 mt-2 font-semibold leading-7'>
            <div className='text-center pb-2'>Đăng ký nhận thông báo <br /> qua email</div>
            <div>
                <a href="#"><div className='border-black border-0 p-1 ml-3 mb-3 mt-3 w-[70%] text-center font-semibold rounded-md bg-green-200'>Đăng ký &rarr;</div></a>
                <a href="#" className='hover:underline ml-3'>Hướng dẫn mua hàng</a><br />
                <a href="#" className='hover:underline ml-3'>Tìm cửa hàng</a><br />
            </div>
          </div>
        </div>

        <hr className='lg:w-[90%] border-black ml-[5%]' />
      </div>
    </footer>
  );
}

export default Footer;
