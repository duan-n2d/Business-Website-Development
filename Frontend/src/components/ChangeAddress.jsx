import React from 'react';

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

function ChangeAddress() {
    return (
        <main className='font-nunito'>
            <div className='w-full lg:mx-auto mx-[5%] bg-[#F3FFF1]'>
                <div className='p-5 px-10'>
                    <center className='text-30 font-bold mb-10'>Đổi địa chỉ</center>

                    <div>
                        <div className='md:flex justify-between my-5'>
                            <label htmlFor="city" className='font-bold text-22 w-[30%] mt-1'>Địa chỉ mặc định: </label> <br />
                            <div className='md:w-[70%] w-[100%]'>
                                <input type="text" name='city' id='city' className='md:w-[45%] w-[100%] md:mt-0 mt-2 mb-3 rounded-[8px] h-[43px] pl-2 shadow mr-[5%]' placeholder='Tỉnh/Thành phố'/>
                                <input type="text" name='district' id='district' className='md:w-[45%] w-[100%] md:mt-0 mt-2 mb-3 rounded-[8px] h-[43px] pl-2 shadow' placeholder='Quận/Huyện'/>
                                <input type="text" name='prefecture' id='prefecture' className='md:w-[45%] w-[100%] md:mt-0 mt-2 mb-3 rounded-[8px] h-[43px] pl-2 shadow mr-[5%]' placeholder='Phường/Xã'/>
                                <input type="text" name='street' id='street' className='md:w-[45%] w-[100%] md:mt-0 mt-2 mb-3 rounded-[8px] h-[43px] pl-2 shadow' placeholder='Tên đường'/>
                            </div>
                        </div>
                    </div>

                    <center className='text-22 font-bold pt-5 pb-10'>
                        <button className='border-2 border-[#0F4A1D] rounded-[7px] w-[312px] h-[62px]'>Cập nhật thông tin</button>
                    </center>
                </div>
            </div>
        </main>
    )
}

export default ChangeAddress;