import React from 'react';

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

const UserInfos = [
    {
        user_name: "Nguyễn Mai Như Luận",
        dob: "22/04/2003",
        phone_number: "0332323388",
        address: "KTX Khu B, Đông Hòa , Dĩ An, Bình Dương",
        email: "nhuluancbt@gmail.com",
    }
]
function UserAccount() {
    return (
        <div className='font-nunito'>
            <div className='w-[90%] mx-auto mt-10 bg-[#F3FFF1]'>

                <div className='w-[85%] mx-auto'>
                    <p className='font-bold text-26 text-[#1b3735] text-center py-6'>
                        Thông tin tài khoản
                    </p>
                    <div className='grid grid-cols-1 gap-5'>
                        <form action="">
                            <div className='grid grid-cols-1 gap-12'>

                                <div>
                                    {UserInfos.map((UserInfo, index) => (
                                        <div key={index} className='flex text-22 font-bold text-[#1b3735]'>
                                            <label htmlFor="">Họ và tên :</label>
                                            <input className='w-[70%] mx-auto px-4 text-18 font-medium' type="text" placeholder={UserInfo.user_name} />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {UserInfos.map((UserInfo, index) => (
                                        <div key={index} className='flex text-22 font-bold  text-[#1b3735]'>
                                            <label htmlFor="">Ngày sinh</label>
                                            <input className=' w-[70%] mx-auto px-4 text-18 font-medium' type="date" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {UserInfos.map((UserInfo, index) => (
                                        <div key={index} className='flex text-22 font-bold text-[#1b3735]'>
                                            <label htmlFor="">Số điện thoại:</label>
                                            <input className='w-[70%] mx-auto px-4 text-18 font-medium' type="text" placeholder={UserInfo.phone_number} />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {UserInfos.map((UserInfo, index) => (
                                        <div key={index} className='flex text-22 font-bold text-[#1b3735]'>
                                            <label htmlFor="">Địa chỉ</label>
                                            <input className='w-[70%] mx-auto px-4 text-18 font-medium' type="email" placeholder={UserInfo.address} />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {UserInfos.map((UserInfo, index) => (
                                        <div key={index} className='flex text-22 font-bold text-[#1b3735]'>
                                            <label htmlFor="">Email</label>
                                            <input className='w-[70%] mx-auto px-4 text-18 font-medium' type="text" placeholder={UserInfo.email} />
                                        </div>
                                    ))}
                                </div>






                            </div>



                        </form>
<div className='text-center py-4'>
    <button className='border-2 rounded-lg border-[#0f4a1d] px-4 py-2 hover:bg-[#0f4a1d] hover:text-white text-22 font-bold font-nunito focus:bg-[#0f4a1d] focus:text-white'>
        Cập nhật thông tin
    </button>
</div>






                    </div>





                </div>




            </div>




        </div>
    );
}

export default UserAccount;
