import logo from "../assets/Gakki.png";
import { PiPackageFill } from "react-icons/pi";
import { PiMapPinFill } from "react-icons/pi";
import { PiEnvelopeFill } from "react-icons/pi";
import { PiMagnifyingGlassBold  } from "react-icons/pi";
import { PiShoppingCartFill } from 'react-icons/pi';

import NavBar from "./NavBar";

function Header() {
  return (
    <>
        <div className="justify-center items-center">
            <div className="flex items-center justify-center bg-[#1B3735]">
                <div className="text-white uppercase py-0.5">Miễn phí vận chuyển cho đơn hàng trên 500k</div>
            </div>
        
            <div className="flex">
                <div className="w-2/3"></div>
                <div className="w-1/3 pr-20 flex justify-between py-0.5">
                    <div className="flex">
                        <PiPackageFill className="w-6 h-6"/>
                        &nbsp;
                        <p>Tra cứu đơn hàng</p>
                    </div>
                    <div className="flex">
                        <PiMapPinFill className="w-6 h-6"/>
                        &nbsp;
                        <p>Tìm cửa hàng</p>
                    </div>
                    <div className="flex">
                        <PiEnvelopeFill className="w-6 h-6"/>
                        &nbsp;
                        <p>Liên hệ</p>
                    </div>
                </div>
            </div>
            <hr/>

            <div className="my-1 w-11/12 mx-auto">
                <div className="flex justify-center items-center">
                    <div className="logo w-1/6">
                        <img className='w-9/12' src={logo} alt="" />
                    </div>
                    
                    <div className="search w-5/12 mr-20 flex justify-center items-center bg-gray-200 text-gray-700 border border-gray-300 rounded-full py-2 px-1 block">
                        <input className='px-5 w-11/12 bg-gray-200 focus:outline-none focus:shadow-outline' type="text" placeholder="Tìm kiếm sản phẩm" aria-label="Search" aria-describedby="button-search"/>
                        <button className='w-1/12' type="submit" id='button-search'>
                            <PiMagnifyingGlassBold className='w-6 h-6 mx-auto my-auto'/>
                        </button>
                    </div>

                    <div className="w-1/3 flex justify-between items-center text-cyan-900">
                        <div className="">
                            <div className="login">
                                <div className="font-bold uppercase">
                                    <a href="/login">Đăng nhập</a>
                                </div>
                            </div>
                            <div className="register">
                                <div className="font-bold uppercase">
                                    <a href="/register">Đăng ký</a>
                                </div>
                            </div>
                        </div>

                        |

                        <div className="contact">
                            <div className="font-bold uppercase">Liên hệ</div>
                        </div>

                        |

                        <div className="account">
                            <div className="font-bold uppercase">Tài khoản</div>
                        </div>

                        |

                        <div className="cart">
                            <PiShoppingCartFill className="w-8 h-8"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Header;