import React from 'react';
import { PiCreditCardBold, PiMoneyBold } from "react-icons/pi";

function AdminHistory() {
    const Orders = [
        {
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 1,
            subTotal: 1000000
        },
        {
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 2,
            subTotal: 4000000
        },
        {
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 3,
            subTotal: 5000000
        },
    ]

    let Total = 0;

    Orders.map((item) => {
        Total += item.subTotal;
        return null
    });
    return (
        <main className='w-[60%] font-nunito'>
            {/* Đưa vào chung với sidebar thì bỏ cái w-[60%] trong main đi */}
            <div className='text-center bg-[#F3FFF1] flex text-22 p-2 font-bold rounded-[10px] mb-10'>
                <a href='#' className='w-[25%] focus:text-[#DD2B0C]'>Chờ xác nhận</a>
                <a href='#' className='w-[25%] focus:text-[#DD2B0C]'>Đang giao</a>
                <a href='#' className='w-[25%] focus:text-[#DD2B0C]'>Đã giao</a>
                <a href='#' className='w-[25%] focus:text-[#DD2B0C]'>Đã hủy</a>
            </div>

            <div className='bg-[#ECFAFF] rounded-[10px]'>
                <div className='font-bold text-[#DD2B0C] text-20 flex justify-between pt-5 pb-10 px-[5%] w-full'>
                    <div>#11223</div>
                    <div>Đã giao thành công</div>
                </div>

                <div className='ml-[5%] mr-[5%]'>
                    {Orders.map((post, index) => (
                        <div className=' leading-10'>
                            <div key={index} className='flex my-5 h-[130px]'>
                                <div className='h-[128px] bg-white w-[100px]'>
                                    <img className='w-[100%] h-[100%]' src={post.img} alt={post.productName} />
                                </div>
                                <div className='pl-5 w-[100%]'>
                                    <p className='text-20 font-bold'>{post.productName}</p>
                                    <p className='text-18'>Số lượng: {post.qty}</p>
                                    <div className='bg-[#FEFFDE] w-[50%] text-center ml-auto'>
                                        <p className='text-20 font-bold flex p-1'><PiCreditCardBold className='ml-4 mr-4 mt-1 w-[32px] h-[32px]'></PiCreditCardBold>Thành tiền: {post.subTotal.toLocaleString('en-US')}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='border-2 border-[#E0E0E0] w-[100%]' />
                        </div>
                    ))}

                    <div className='font-bold text-22 flex justify-around w-[45%] ml-auto my-5'>
                        <div className='flex'>
                            <PiMoneyBold className='text-30 mr-5' />
                            <span className='text-[#DD2B0C]'>TỔNG TIỀN:</span>
                        </div>
                        <div>
                            {Total.toLocaleString('en-US')}
                        </div>
                    </div>

                    <div className='flex justify-between w-[45%] ml-auto pb-10'>
                        <a href='#' className='border-2 border-[#0F4A1D] rounded-[7px] py-2 px-10 bg-[#DCFFD3] hover:bg-[#4a9936]'>Mua lại</a>
                        <a href='#' className='border-2 border-[#0F4A1D] rounded-[7px] py-2 px-10'>Đánh giá</a>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default AdminHistory;