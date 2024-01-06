import React from "react";
import { useState } from "react";
import axios from "axios";

import Logo from "../assets/Gakki.png";
import LoginBanner from "../assets/banners/banner_login.png";
import LoginBackground from "../assets/banners/bg_login_page.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("tokenStore", res.data.accessToken);

      console.log(res.data.accessToken);

      const role = res.data.role;

      if (role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div
      className="py-6 bg-cover bg-repeat bg-center h-screen font-nunito"
      style={{ backgroundImage: `url(${LoginBackground})` }}
    >
      <div className="flex bg-white rounded-[38px] shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-3/5 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${LoginBanner})` }}
        ></div>

        <div className="w-full p-8 lg:w-2/5 bg-orange-100 rounded-[38px]">
          <div className="flex justify-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-1/2 mx-auto object-cover object-center h-[50px] w-[100px] transform scale-150"
            />
          </div>

          <h2 className="mt-4 text-20 font-bold text-gray-800 text-center uppercase">
            Đăng nhập
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Địa chỉ email/Số điện thoại
              </label>
              <input
                className="bg-white-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-[80px] py-2 px-4 block w-full appearance-none"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mật khẩu
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Quên mật khẩu?
                </a>
              </div>
              <input
                className="bg-white-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-[80px] py-2 px-4 block w-full appearance-none"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mt-8">
              <button
                className="bg-green-200 text-gray-800 font-bold py-2 px-4 w-full rounded-[80px]  hover:text-white py-2 px-4 hover:border-transparent rounded"
                type="submit"
              >
                Đăng nhập
              </button>
            </div>
          </form>

          <div className="mt-4">
            <p className="text-xs text-center text-gray-500">
              Bạn chưa có tài khoản?
            </p>
          </div>
          <div className="mt-4">
            <button className="bg-orange-300 text-gray-800 font-bold py-2 px-4 w-full rounded-[80px]  hover:text-white py-2 px-4 hover:border-transparent rounded">
              <a href="/register">Tạo tài khoản</a>
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500">
              Hoặc tiếp tục với
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>

          <a
            href="#"
            className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 bg-white"
          >
            <div className="px-4 py-3">
              <svg className="h-6 w-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
              Sign in with Google
            </h1>
          </a>

          <a
            href="#"
            className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 bg-white"
          >
            <div className="px-4 py-3">
              <svg
                className="w-6 h-6 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
              Sign in with Facebook
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
