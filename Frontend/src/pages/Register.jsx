import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Logo from '../assets/Gakki.png';
import LoginBanner from '../assets/banners/banner_login.png';
import LoginBackground from '../assets/banners/bg_login_page.png';

const Register = () =>{
  const [u_name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // u_name to first_name and last_name
        const first_name = u_name.split(' ').slice(0, -1).join(' ');
        const last_name = u_name.split(' ').slice(-1).join(' ');

        //Check password
        if(password !== confirm_password)
            return alert("Không khớp mật khẩu");

        //register
        const res = await axios.post('http://localhost:5000/api/auth/register', {
            first_name,
            last_name,
            email,
            phone_number,
            password,
            role: "user",
        });

        //Save token to local storage
        localStorage.setItem('tokenStore', res.data.token);

        //Check role
        if(res.data.role === 1) window.location.href = '/admin';

        //Redirect to homepage
        window.location.href = '/login';
    } catch (err){
      alert(err.response.data.msg);
    }
  }

  return (
    <div className="py-6 bg-cover bg-repeat bg-center h-screen"
    style={{backgroundImage: `url(${LoginBackground})`}}>
      
      <div className="flex bg-white rounded-[38px] shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-3/5 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${LoginBanner})`}}
        ></div>

        <div className="w-full p-8 lg:w-2/5 bg-orange-100 rounded-[38px]">
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="w-1/2 mx-auto object-cover object-center h-[50px] w-[100px] transform scale-150" />
          </div>

          <h2 className="mt-4 text-2xl font-extrabold text-gray-800 text-center uppercase">Đăng ký tài khoản</h2>

          <form onSubmit = {handleSubmit}>
            <div className="mt-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">Họ và tên</label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-[80px] py-2 px-4 block w-full appearance-none"
                type="text"
                value={u_name}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="mt-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-[80px] py-2 px-4 block w-full appearance-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div className="mt-3">
                <label className="block text-gray-700 text-sm font-bold mb-2">Số điện thoại</label>
                <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-[80px] py-2 px-4 block w-full appearance-none"
                type=""
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                />
            </div>

            <div className="mt-3">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Mật khẩu</label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-[80px] py-2 px-4 block w-full appearance-none"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mt-3">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nhập lại mật khẩu</label>
                </div>
                <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-[80px] py-2 px-4 block w-full appearance-none"
                    type="password"
                    value={confirm_password}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>

            <div className="mt-6">
                <button className="bg-orange-300 text-gray-800 font-bold py-2 px-4 w-full rounded-[80px]">
                Tạo tài khoản
                </button>
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default Register;
