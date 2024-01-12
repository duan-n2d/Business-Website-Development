import axios from 'axios';
import React, {useEffect, useState} from 'react';

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

function UserAccount() {
    const user_id = localStorage.getItem("user_id");
    const [user_name, setUsername] = useState("");
    const [dob, setDob] = useState(null);
    const [phone_number, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        axios.get(`${API}/user/${user_id}`)
            .then((res) => {
                const user = res.data.user;
                setUsername(user.first_name + " " + user.last_name);
                if (user.dob === undefined) {
                    setDob(null);
                } else {
                    setDob(user.dob);
                }
                setPhoneNumber(user.phone_number);
                if (user.address === undefined || user.city === undefined || user.country === undefined) {
                    setAddress("Địa chỉ, thành phố, quốc gia");
                } else {
                    setAddress(user.address + ", " + user.city + ", " + user.country);
                }
                setEmail(user.email);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleUpdate = () => {
        // update from input of form
        
    }

    return (
        <div className='font-nunito'>
            <div className='w-full mx-auto mt-10 bg-[#F3FFF1]'>

                <div className='w-[85%] mx-auto'>
                    <p className='font-bold text-26 text-[#1b3735] text-center py-6'>
                        Thông tin tài khoản
                    </p>
                    <div className='grid grid-cols-1 gap-5'>
                        <form action="">
                            <div className='grid grid-cols-1 gap-12'>

                                <div>
                                        <div className='flex text-22 font-bold text-[#1b3735]'>
                                            <label htmlFor="">Họ và tên :</label>
                                            <input className='w-[70%] mx-auto px-4 text-18 font-medium' type="text" placeholder={user_name} />
                                        </div>
                                </div>
                                <div>
                                        <div className='flex text-22 font-bold  text-[#1b3735]'>
                                            <label htmlFor="">Ngày sinh</label>
                                            <input className=' w-[70%] mx-auto px-4 text-18 font-medium' type="date"
                                            placeholder={dob}/>
                                        </div>
                                </div>
                                <div>
                                        <div className='flex text-22 font-bold text-[#1b3735]'>
                                            <label htmlFor="">Số điện thoại:</label>
                                            <input className='w-[70%] mx-auto px-4 text-18 font-medium' type="text" placeholder={phone_number} />
                                        </div>
                                </div>
                                <div>
                                        <div className='flex text-22 font-bold text-[#1b3735]'>
                                            <label htmlFor="">Địa chỉ</label>
                                            <input className='w-[70%] mx-auto px-4 text-18 font-medium' type="email" placeholder={address} />
                                        </div>
                                </div>
                                <div>
                                        <div className='flex text-22 font-bold text-[#1b3735]'>
                                            <label htmlFor="">Email</label>
                                            <input className='w-[70%] mx-auto px-4 text-18 font-medium' type="text" placeholder={email} />
                                        </div>
                                </div>

                            </div>

                        </form>
                        <div className='text-center py-4'>
                            <button className='border-2 rounded-lg border-[#0f4a1d] px-4 py-2 hover:bg-[#0f4a1d] hover:text-white text-22 font-bold font-nunito focus:bg-[#0f4a1d] focus:text-white'
                            onClick={handleUpdate}
                            >
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
