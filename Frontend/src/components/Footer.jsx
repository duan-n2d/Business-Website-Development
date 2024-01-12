import React from 'react';
import { PiPhoneFill, PiMapPinFill, PiEnvelopeFill, PiShoppingCartFill, PiHouseLineFill, PiTagFill, PiTruckFill } from 'react-icons/pi';
import Gakki from '../assets/Gakki.png';
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
    { url: '/policy/3', text: 'Chính sách đổi trả' },
    { url: '/policy/3', text: 'Chế độ bảo hành' },
  ];

  return (
    <footer className="bg-white font-nunito">
      <div className="bg-green-100">
        <div className=' hidden md:w-10/12 md:mx-auto md:grid md:grid-cols-4 md:gap-4 items-center text-[18px] py-8'>
        {trustItems.map((item, index) => (
          <div key={index} className="text-center mx-5 flex-col justify-center items-center">
            <div>{item.icon}</div>
            <div className='font-bold'>
            {item.description.map((description, index) => (
              <div key={index}>
                <p className='text-[18px] font-bold'>{description}</p>
              </div>
            ))}
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Phần Contact */}
      <div className="flex-col justify-center">
        <hr className="w-full md:w-10/12" />
        <div className="mx-auto flex justify-center space-x-10 md:space-x-20 my-5">
          <a href="https://www.facebook.com/gakkishop"><img src={Facebook} alt="Facebook" className="w-10 h-10" /></a>
          <a href="#"><img src={Instagram} alt="Instagram" className="w-10 h-10" /></a>
        </div>
        <hr className="w-full  md:w-10/12" />

        <div className="w-full lg:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-2">
          <div className="py-5 px-2 text-center">
            <img src={Gakki} alt="Gakki" className="w-48 mx-auto" />
            <div className="text-justify mt-1">
              Với mong muốn chữa lành những trái tim bằng âm vang giai điệu, chúng tôi hi vọng sẽ là người bạn đồng hành trên con đường âm nhạc của bạn.
            </div>
          </div>

          <div className="py-5 px-2">
            <div className="text-center font-bold text-red-500 text-[22px] my-2">THÔNG TIN LIÊN HỆ</div>
            <div className="text-justify">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center my-1">
                  <a href={contact.url} className='flex'>
                    <div className="mr-2">
                      <div className='rounded-full bg-gray-800 text-white p-1'>{contact.icon}</div>
                    </div>
                    <div className="font-semibold">{contact.detail}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="py-5 px-2">
            <div className="font-bold text-red-500 text-[22px] my-2">CHÍNH SÁCH VÀ HỖ TRỢ</div>
            <div className="font-semibold">
              <ul className="list-policy">
                {policyLinks.map((policy, index) => (
                  <li key={index} className='pb-2'>
                    <a href={policy.url} className="hover:underline">
                      {policy.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="py-5 px-2 font-semibold flex-col justify-center">
            <div className="text-center my-3 font-bold">Đăng ký nhận thông báo qua email</div>
              <div className='ml-2 mt-3 w-full flex justify-center'>
                <div className="mx-auto">
                  <ul className="list-support">
                    <li className='pb-2'><a href="#"><p className="border-black border-0 p-2 text-center font-semibold rounded-md bg-green-200">Đăng ký &rarr;</p></a></li>
                    <li className='pb-2'><a href="/contact-us" className="hover:underline">Hướng dẫn mua hàng</a></li>
                    <li className='pb-2'><a href="https://maps.app.goo.gl/Zd8tverfXZN9vuks8" className="hover:underline">Tìm cửa hàng</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-[90%] border-black ml-[5%]" />
      </div>
    </footer>
  );
}

export default Footer;
