import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  PiPackageFill,
  PiBellRinging,
  PiMapPinFill,
  PiEnvelopeFill,
  PiMagnifyingGlassBold,
  PiShoppingCartFill,
  PiPlusBold,
  PiMinusBold,
} from 'react-icons/pi';

import logo from '../assets/Gakki.png';
import gakki from '../assets/logo.ico';

const API = 'https://gakki.onrender.com/api/auth/';

function Header() {
  const [token, setToken] = useState(localStorage.getItem('tokenStore') || null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (token) {
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          const user = JSON.parse(window.atob(base64));

          const res = await axios.get(`${API}/user/${user.user_id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          setUserInfo(res.data.user);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [token]);

  const url = window.location.href;
  const isUrlAdmin = url.includes("/admin");

  const handleLogout = () => {
    localStorage.removeItem('tokenStore');
    window.location.href = '/login';
  };

  const adminHeader = (
    <div className="fixed right-0 top-0 w-full  bg-green-50"> 
        <div className="mx-auto flex justify-between items-center">
            <div className="logo w-[307px] justify-center items-center bg-white">
                <a href="">
                    <img className='w-2/3 mx-auto py-2' src={logo} alt="" />
                </a>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="w-3/4 mx-5 flex justify-center items-center bg-white text-gray-700 border border-gray-300 rounded-full py-2 px-1 block">
                    <input className='px-5 w-11/12 bg-white focus:outline-none focus:shadow-outline' type="text" placeholder="Tìm kiếm sản phẩm" aria-label="Search" aria-describedby="button-search"/>
                    <button className='w-1/12' type="submit" id='button-search'>
                        <PiMagnifyingGlassBold className='w-6 h-6 mx-auto my-auto'/>
                    </button>
                </div>

                <div className="w-1/4 flex justify-between items-center text-cyan-900">

                    <div className="bell">
                        <PiBellRinging className="w-8 h-8"/>
                    </div>

                    <div className="font-bold">|</div>

                    <div className="account flex justify-between items-center">
                        <div className="font-bold"> Welcome back!</div>
                        <div className="avatar px-5">
                            <a href="/profile">Tài khoản
                                <img className="w-12 h-12 rounded-full" src={gakki} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

  const userHeader = (
    <div className="justify-center items-center bg-[#fff]">
        <div className="hidden lg:flex items-center justify-center bg-[#1B3735]">
            <div className="text-white uppercase py-0.5">Miễn phí vận chuyển cho đơn hàng trên 500k</div>
        </div>

        <div className="hidden lg:flex">
            <div className="w-2/3"></div>
            <div className="w-1/3 pr-[10%] flex justify-between items-center pt-2">
                <div className="flex">
                    <PiPackageFill className="w-4 h-4"/>
                    &nbsp;
                    <p className="text-[12px]">Tra cứu đơn hàng</p>
                </div>
                <div className="flex">
                    <PiMapPinFill className="w-4 h-4"/>
                    &nbsp;
                    <a href="https://maps.app.goo.gl/Zd8tverfXZN9vuks8" className="hover:underline text-[12px]">
                        Tìm cửa hàng
                    </a>
                </div>
                <div className="flex">
                    <PiEnvelopeFill className="w-4 h-4"/>
                    &nbsp;
                    <a href="/contact-us" className="hover:underline text-[12px]">
                    Liên hệ
                    </a>
                </div>
            </div>
        </div>
        <hr/>

        <div className="my-1 w-11/12 mx-auto">
            <div className="flex justify-center items-center">
                <div className="logo w-1/6">
                    <a href="/">
                        <img className='w-9/12' src={logo} alt="" />
                    </a>
                </div>
                
                <div className="search w-5/12 mr-20 flex justify-center items-center bg-gray-200 text-gray-700 border border-gray-300 rounded-full py-2 px-1 block">
                    <input className='px-5 w-11/12 bg-gray-200 focus:outline-none focus:shadow-outline' type="text" placeholder="Tìm kiếm sản phẩm" aria-label="Search" aria-describedby="button-search"/>
                    <button className='w-1/12' type="submit" id='button-search'>
                        <PiMagnifyingGlassBold className='w-6 h-6 mx-auto my-auto'/>
                    </button>
                </div>

                <div className="w-1/3 flex justify-between items-center text-[#173F5F] text-[16px]">
                    <div className="cart relative">
                        <a href="/cart">
                            <div className='flex justify-center items-center'>
                                <div className="font-bold uppercase">
                                    <div className="t-0 absolute left-4">
                                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2.5 text-[12px] text-white">3</p>
                                    </div>
                                    <PiShoppingCartFill className="w-8 h-8"/>
                                </div>
                                &nbsp;
                                &nbsp;
                                <div className="font-bold uppercase">Giỏ hàng</div>
                            </div>
                        </a>
                    </div>

                    |

                    <div className="account">
                        <div className="font-bold">
                            <div className="font-bold uppercase">
                                <a href="/profile">Tài khoản</a>
                            </div>
                        </div>
                    </div>
                    |

                    <div className="account">
                        <div className="font-bold">
                            <div className="font-bold uppercase">
                                <button onClick={handleLogout}>Đăng xuất</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );

  const guestHeader = (
    <div className="justify-center items-center bg-[#fff]">
        <div className="hidden lg:flex items-center justify-center bg-[#1B3735]">
            <div className="text-white uppercase py-0.5">Miễn phí vận chuyển cho đơn hàng trên 500k</div>
        </div>

        <div className="hidden lg:flex">
            <div className="w-2/3"></div>
            <div className="w-1/3 pr-[10%] flex justify-between items-center pt-2">
                <div className="flex">
                    <PiPackageFill className="w-4 h-4"/>
                    &nbsp;
                    <p className="text-[12px]">Tra cứu đơn hàng</p>
                </div>
                <div className="flex">
                    <PiMapPinFill className="w-4 h-4"/>
                    &nbsp;
                    <a href="https://maps.app.goo.gl/Zd8tverfXZN9vuks8" className="hover:underline text-[12px]">
                        Tìm cửa hàng
                    </a>
                </div>
                <div className="flex">
                    <PiEnvelopeFill className="w-4 h-4"/>
                    &nbsp;
                    <a href="/contact-us" className="hover:underline text-[12px]">
                    Liên hệ
                    </a>
                </div>
            </div>
        </div>
        <hr/>

        <div className="my-1 w-11/12 mx-auto">
            <div className="flex justify-center items-center">
                <div className="logo w-1/6">
                    <a href="/">
                        <img className='w-9/12' src={logo} alt="" />
                    </a>
                </div>
                
                <div className="search w-5/12 mr-20 flex justify-center items-center bg-gray-200 text-gray-700 border border-gray-300 rounded-full py-2 px-1 block">
                    <input className='px-5 w-11/12 bg-gray-200 focus:outline-none focus:shadow-outline' type="text" placeholder="Tìm kiếm sản phẩm" aria-label="Search" aria-describedby="button-search"/>
                    <button className='w-1/12' type="submit" id='button-search'>
                        <PiMagnifyingGlassBold className='w-6 h-6 mx-auto my-auto'/>
                    </button>
                </div>

                <div className="w-1/3 flex justify-between items-center text-[#173F5F] text-[16px]">
                    <div className="">
                        <div className="login">
                            <div className="font-bold uppercase">
                                <a href="/login">Đăng nhập</a>
                            </div>
                        </div>
                        <div className="register mt-2">
                            <div className="font-bold uppercase">
                                <a href="/register">Đăng ký</a>
                            </div>
                        </div>
                    </div>

                    |

                    <div className="contact">
                        <div className="font-bold uppercase">
                            <a href="/contact-us">Liên hệ</a>
                        </div>
                    </div>


                    |

                    <div className="cart relative">
                        <a href="/cart">
                            <div className='flex justify-center items-center'>
                                <div className="font-bold uppercase">
                                    <div className="t-0 absolute left-4">
                                        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2.5 text-[12px] text-white">3</p>
                                    </div>
                                    <PiShoppingCartFill className="w-8 h-8"/>
                                </div>
                                &nbsp;
                                &nbsp;
                                <div className="font-bold uppercase">Giỏ hàng</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <>
      {!userInfo ? guestHeader : null}
      {userInfo && userInfo.role === 'admin' ? (
        isUrlAdmin ? adminHeader : userHeader
      ) : null}
      {userInfo && userInfo.role !== 'admin' ? userHeader : null}
    </>
  );
}

export default Header;
