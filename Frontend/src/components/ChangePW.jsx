import React from 'react';

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

function ChangePW() {
    return (
        <main className='font-nunito'>
            <div className='lg:w-[56%] lg:mx-auto w-[90%] mx-[5%] bg-[#F3FFF1]'>
                <div className='p-5 px-10'>
                    <center className='text-30 font-bold mb-10'>Đổi mật khẩu</center>

                    <div>
                        <div className='md:flex justify-between my-5'>
                            <label htmlFor="oldpw" className='font-bold text-22 w-[35%] mt-1'>Mật khẩu cũ: </label> <br />
                            <input type="text" name='oldpw' id='oldpw' className='md:w-[60%] w-[100%] md:mt-0 mt-2 rounded-[8px] h-[43px] pl-2 shadow'/>
                        </div>
                        
                        <div className='md:flex justify-between my-5'>
                            <label htmlFor="newpw" className='font-bold text-22 w-[35%] mt-1'>Mật khẩu mới: </label> <br />
                            <input type="text" name='newpw' id='newpw' className='md:w-[60%] w-[100%] md:mt-0 mt-2 rounded-[8px] h-[43px] pl-2 shadow'/>
                        </div>

                        <div className='md:flex justify-between my-5'>
                            <label htmlFor="retypepw" className='font-bold text-22 w-[35%] mt-1'>Nhập lại mật khẩu mới: </label>
                            <input type="text" name='retypepw' id='retypepw' className='md:w-[60%] w-[100%] md:mt-0 mt-2 rounded-[8px] h-[43px] pl-2 shadow'/>
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

export default ChangePW;