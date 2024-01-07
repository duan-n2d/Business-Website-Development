import React, { useEffect, useState } from 'react';
import { PiCreditCardBold, PiMoneyBold } from 'react-icons/pi';

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

function AdminHistory() {
    const Orders = [
        {
            OrderID: '#11222',
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 1,
            subTotal: 1000000,
            status: 4,
        },
        {
            OrderID: '#11222',
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 1,
            subTotal: 1000000,
            status: 4,
        },
        {
            OrderID: '#11223',
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 1,
            subTotal: 1000000,
            status: 3,
        },
        {
            OrderID: '#11223',
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 2,
            subTotal: 4000000,
            status: 3,
        },
        {
            OrderID: '#11223',
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 3,
            subTotal: 5000000,
            status: 3,
        },
        {
            OrderID: '#11224',
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 3,
            subTotal: 5000000,
            status: 3,
        },
        {
            OrderID: '#11224',
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 3,
            subTotal: 5000000,
            status: 3,
        },
        {
            OrderID: '#11225',
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 3,
            subTotal: 5000000,
            status: 2,
        },
        {
            OrderID: '#11226',
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 3,
            subTotal: 5000000,
            status: 1,
        },
        {
            OrderID: '#11226',
            img: './src/assets/AnyConv.png',
            productName: 'Đàn guitar gỗ tự nhiên 111xxzx',
            qty: 3,
            subTotal: 5000000,
            status: 1,
        },
    ];

    const [ordersGrouped, setOrdersGrouped] = useState([]);
    const [currentStatus, setCurrentStatus] = useState(null);

    useEffect(() => {
        const orderGroups = {};

        Orders.forEach((item) => {
            const { OrderID, subTotal, qty, status } = item;

            if (!orderGroups[OrderID]) {
                // Nếu chưa được tạo
                orderGroups[OrderID] = {
                    OrderID,
                    total: subTotal,
                    items: [
                        {
                            ...item,
                            total: subTotal,
                        },
                    ],
                };
            } else {
                // Nếu đã tạo
                orderGroups[OrderID].total += subTotal;
                orderGroups[OrderID].items.push({
                    ...item,
                    total: subTotal,
                });
            }
        });

        // Lọc đơn hàng
        const filteredOrders = currentStatus
            ? Object.values(orderGroups).filter(
                (order) => order.items[0].status === currentStatus
            )
            : Object.values(orderGroups);

        // Chuyển đổi đối tượng thành mảng để render
        setOrdersGrouped(filteredOrders);
    }, [Orders, currentStatus]);

    const handleStatusClick = (status) => {
        setCurrentStatus(status);
    };

    return (
        <main className='w-[60%] font-nunito'>
            <div className='text-center bg-[#F3FFF1] flex xl:text-22 md:text-20 p-2 font-bold rounded-[10px]'>
                <button
                    className={`w-[20%] focus:text-[#DD2B0C] ${currentStatus === null ? 'text-[#DD2B0C]' : ''
                        }`}
                    onClick={() => handleStatusClick(null)}
                >
                    Tất cả
                </button>
                <button
                    className={`w-[20%] focus:text-[#DD2B0C] ${currentStatus === 1 ? 'text-[#DD2B0C]' : ''
                        }`}
                    onClick={() => handleStatusClick(1)}
                >
                    Chờ xác nhận
                </button>
                <button
                    className={`w-[20%] focus:text-[#DD2B0C] ${currentStatus === 2 ? 'text-[#DD2B0C]' : ''
                        }`}
                    onClick={() => handleStatusClick(2)}
                >
                    Đang giao
                </button>
                <button
                    className={`w-[20%] focus:text-[#DD2B0C] ${currentStatus === 3 ? 'text-[#DD2B0C]' : ''
                        }`}
                    onClick={() => handleStatusClick(3)}
                >
                    Đã giao
                </button>
                <button
                    className={`w-[20%] focus:text-[#DD2B0C] ${currentStatus === 4 ? 'text-[#DD2B0C]' : ''
                        }`}
                    onClick={() => handleStatusClick(4)}
                >
                    Đã hủy
                </button>
            </div>

            {ordersGrouped.map((order, index) => (
                <div className='bg-[#ECFAFF] rounded-[10px] my-10' key={index}>
                    <div className='font-bold text-[#DD2B0C] text-20 flex justify-between py-5 px-[5%] w-full'>
                        <div>{order.OrderID}</div>
                        <div>
                            {order.items[0].status === 1 && 'Chờ xác nhận'}
                            {order.items[0].status === 2 && 'Đang giao'}
                            {order.items[0].status === 3 && 'Đã giao thành công'}
                            {order.items[0].status === 4 && 'Đã hủy'}
                        </div>
                    </div>

                    <div className='ml-[5%] mr-[5%]'>
                        {order.items.map((item, subIndex) => (
                            <div className=' leading-10' key={subIndex}>
                                <div className='flex my-5 h-[130px]'>
                                    <div className='h-[128px] bg-white w-[100px]'>
                                        <img
                                            className='w-[100%] h-[100%]'
                                            src={item.img}
                                            alt={item.productName}
                                        />
                                    </div>
                                    <div className='pl-5 w-[100%]'>
                                        <p className='text-20 font-bold'>{item.productName}</p>
                                        <p className='text-18'>Số lượng: {item.qty}</p>
                                        <div className='bg-[#FEFFDE] xl:w-[50%] md:w-[65%] text-center ml-auto'>
                                            <p className='text-20 font-bold flex p-1'>
                                                <PiCreditCardBold className='ml-4 mr-4 mt-1 w-[32px] h-[32px]' />
                                                Thành tiền: {item.total.toLocaleString('en-US')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='border-2 border-[#E0E0E0] w-[100%]' />
                            </div>
                        ))}

                        <div className='font-bold text-22 flex justify-around xl:w-[45%] md:w-[60%] ml-auto my-5'>
                            <div className='flex'>
                                <PiMoneyBold className='text-30 mr-5' />
                                <span className='text-[#DD2B0C]'>TỔNG TIỀN:</span>
                            </div>
                            <div>{order.total.toLocaleString('en-US')}</div>
                        </div>

                        <div>
                            {order.items[0].status === 1 && (
                                <div className='flex justify-end xl:w-[45%] w-[60%] ml-auto pb-10'>
                                    <button className='border-2 border-[#0F4A1D] rounded-[7px] py-2 px-10 bg-[#DCFFD3] hover:bg-[#4a9936]'>
                                        Hủy đơn hàng
                                    </button>
                                </div>
                            )}
                            {order.items[0].status === 2 && (
                                <div className='flex justify-end xl:w-[45%] w-[60%] ml-auto pb-10'>
                                    <button className='border-2 border-[#0F4A1D] rounded-[7px] py-2 px-10 bg-[#DCFFD3] hover:bg-[#4a9936]'>
                                        Liên hệ
                                    </button>
                                </div>
                            )}
                            {order.items[0].status === 3 && (
                                <div className='flex justify-between xl:w-[45%] w-[60%] ml-auto pb-10'>
                                    <button className='border-2 border-[#0F4A1D] rounded-[7px] py-2 px-10 bg-[#DCFFD3] hover:bg-[#4a9936]'>
                                        Mua lại
                                    </button>
                                    <button className='border-2 border-[#0F4A1D] rounded-[7px] py-2 px-10'>
                                        Đánh giá
                                    </button>
                                </div>
                            )}
                            {order.items[0].status === 4 && (
                                <div className='flex justify-end xl:w-[45%] w-[60%] ml-auto pb-10'>
                                    <button className='border-2 border-[#0F4A1D] rounded-[7px] py-2 px-10 bg-[#DCFFD3] hover:bg-[#4a9936]'>
                                        Mua lại
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default AdminHistory;
