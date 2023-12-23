import React from "react";
import { PiArrowCircleLeftFill, PiArrowCircleRightFill, PiArrowRight, PiTrashBold, PiGuitarBold, PiTruckLight } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { BsTag } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function AdminOrder() {
    const Orders = [
        {
            ID: '#2301',
            Customer: 'Nguyễn Thảo Nguyên',
            OrderDate: '24/12/2023',
            Status: 'Đã thanh toán',
            Shipment: 'Đang giao',
            SubTotal: '1.000.000'
        },
        {
            ID: '#4302',
            Customer: 'Nguyễn Thảo Nguyên',
            OrderDate: '24/12/2023',
            Status: 'Đã thanh toán',
            Shipment: 'Đang giao',
            SubTotal: '1.000.000'
        },
        {
            ID: '#7603',
            Customer: 'Nguyễn Thảo Nguyên',
            OrderDate: '24/12/2023',
            Status: 'Đã thanh toán',
            Shipment: 'Đang giao',
            SubTotal: '1.000.000'
        },
        {
            ID: '#1204',
            Customer: 'Nguyễn Thảo Nguyên',
            OrderDate: '24/12/2023',
            Status: 'Đã thanh toán',
            Shipment: 'Đang giao',
            SubTotal: '1.000.000'
        },
        {
            ID: '#6705',
            Customer: 'Nguyễn Thảo Nguyên',
            OrderDate: '24/12/2023',
            Status: 'Đã thanh toán',
            Shipment: 'Đang giao',
            SubTotal: '1.000.000'
        },
        {
            ID: '#4506',
            Customer: 'Nguyễn Thảo Nguyên',
            OrderDate: '24/12/2023',
            Status: 'Đã thanh toán',
            Shipment: 'Đang giao',
            SubTotal: '1.000.000'
        },
        {
            ID: '#5607',
            Customer: 'Nguyễn Thảo Nguyên',
            OrderDate: '24/12/2023',
            Status: 'Đã thanh toán',
            Shipment: 'Đang giao',
            SubTotal: '1.000.000'
        },
        {
            ID: '#2308',
            Customer: 'Nguyễn Thảo Nguyên',
            OrderDate: '24/12/2023',
            Status: 'Đã thanh toán',
            Shipment: 'Đang giao',
            SubTotal: '1.000.000'
        },
    ]

    return (
        <div className="font-nunito flex bg-gradient-to-r from-[#FEFEFE] to-[#EBFFE4]">
            {/* Menu */}
            <div className="bg-gradient-to-r from-[#374884] to-[#4F609D] w-[22%] h-[1100px] pl-[3%] text-white text-22 space-y-10 pt-10">
                <p className="pl-5">Dashboard</p>
                <button className="flex focus:bg-[#FAFFFD26] rounded-[8px] xl:w-[230px] md:w-[200px] h-[50px] align-middle"><HiOutlineShoppingBag className="text-30 w-[50px]" /> Đơn hàng</button>
                <button className="flex focus:bg-[#FAFFFD26] rounded-[8px] xl:w-[230px] md:w-[200px] h-[50px] align-middle"><GoPeople className="text-30 w-[50px]" />Khách hàng</button>
                <button className="flex focus:bg-[#FAFFFD26] rounded-[8px] xl:w-[230px] md:w-[200px] h-[50px] align-middle"><FaRegEdit className="text-30 w-[50px]" />Blog</button>
                <button className="flex focus:bg-[#FAFFFD26] rounded-[8px] xl:w-[230px] md:w-[200px] h-[50px] align-middle"><PiGuitarBold className="text-30 w-[50px]" />Sản phẩm</button>
                <button className="flex focus:bg-[#FAFFFD26] rounded-[8px] xl:w-[230px] md:w-[200px] h-[50px] align-middle"><PiTruckLight className="text-30 w-[50px]" />Vận chuyển</button>
                <button className="flex focus:bg-[#FAFFFD26] rounded-[8px] xl:w-[230px] md:w-[200px] h-[50px] align-middle"><BsTag className="text-30 w-[50px]" />Khuyến mãi</button>
                <button className="flex border-white rounded-[7px] border p-2">Đăng xuất <PiArrowRight className="text-30 w-[50px]" /></button>


            </div>

            {/* Order */}
            <div className="w-[70%] h-[1100px] mx-auto">

                <div className="bg-white shadow w-[300px] h-[80px] rounded-[12px] float-right flex font-bold">
                    <div className="bg-[#2D9CDB26] rounded-[15px] w-[48px] h-[48px] mt-[16px] ml-[16px]">
                        <button className="mt-[7px] ml-[7px]">
                        <CiCalendar className="w-[34px] h-[34px] text-[#2D9CDB]" />
                        </button>
                    </div>
                    <div className="mt-[16px] ml-[16px]">
                    <p className="text-18">17:00</p>
                    <p className="text-[12px]">12/10/2023 - 21/12/2023</p>
                    </div>
                    <button className=" my-auto mx-auto">
                    <IoIosArrowDown className="w-[24px] h-[24px] text-gray-300"/>
                    </button>
                </div>
                <header className="text-30 font-bold mb-20">Đơn hàng</header>

                <div>
                    <div className=" pb-5">
                        <div className="bg-white rounded-2xl flex pt-5 pb-5 font-bold xl:text-20 md:text-18 xl:text-left align-middle shadow">
                            <center className="w-[10%] justify-center">Mã đơn</center>
                            <div className="w-[20%]">Tên khách hàng</div>
                            <div className="w-[15%]">Ngày đặt</div>
                            <div className="w-[15%]">Thanh toán</div>
                            <div className="w-[15%]">Vận chuyển</div>
                            <div className="w-[15%]">Tổng tiền</div>
                            <center>
                                <button className="w-[10%]"><PiTrashBold className="w-[25px] h-[28px]"></PiTrashBold></button>
                            </center>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl pb-5 shadow">
                        {Orders.map((item, index) => (
                            <div className="pb-5">
                                <div key={index} className="flex xl:text-16 text-14 space-y-3">
                                    <center className="w-[10%] pt-3">{item.ID}</center>
                                    <div className="w-[20%]">{item.Customer}</div>
                                    <div className="w-[15%]">{item.OrderDate}</div>
                                    <div className="w-[15%]">{item.Shipment}</div>
                                    <div className="w-[15%]">{item.Status}</div>
                                    <div className="w-[15%]">{item.SubTotal}</div>
                                    <center>
                                        <button className="w-[10%]"><PiTrashBold className="w-[18px] h-[19px]"></PiTrashBold></button>
                                    </center>
                                </div>
                                {index !== Orders.length - 1 && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width='' height="4" viewBox="0 0 1021 4" fill="none" className="mt-5">
                                        <path d="M0.999979 3L1020 1" stroke="#D8D8D8" stroke-width="2" stroke-miterlimit="4.62023" stroke-linecap="round" stroke-dasharray="7 7" />
                                    </svg>
                                )}
                            </div>
                        ))}
                        {/* Buttons */}
                        <div className='xl:text-22 lg:text-20 font-bold space-x-5 justify-center flex pt-10'>
                            <a href="#">
                                <button>
                                    <PiArrowCircleLeftFill className='xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px] text-[#1B3735]'></PiArrowCircleLeftFill>
                                </button>
                            </a>
                            <a href="#">
                                <button className='border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]'>1</button>
                            </a>
                            <a href="#">
                                <button className='border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]'>2</button>
                            </a>
                            <a href="#">
                                <button className='border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]'>3</button>
                            </a>
                            <a href="#">
                                <button>
                                    <PiArrowCircleRightFill className='xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px] text-[#1B3735]'></PiArrowCircleRightFill>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrder