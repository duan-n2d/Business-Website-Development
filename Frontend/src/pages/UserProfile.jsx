import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UserAccount from "../components/UserAccount";
import UserHistory from "../components/UserHistory";
import ChangeAddress from "../components/ChangeAddress";
import ChangePW from "../components/ChangePW";
import { PiUser, PiArrowsCounterClockwise, PiClockCounterClockwise, PiHouseLineDuotone } from "react-icons/pi";

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

const sideBarUser = [
  {
    name: "Thông tin tài khoản",
    part: "UserAccount",
    icon: <PiUser size={20} />,
  },
  {
    name: "Lịch sử mua hàng",
    link: "UserHistory",
    icon: <PiClockCounterClockwise size={20} />,
  },
  {
    name: "Đổi mật khẩu",
    link: "ChangePassword",
    icon: <PiArrowsCounterClockwise size={20} />,
  },
  {
    name: "Đổi địa chỉ mặc định",
    link: "ChangeAddress",
    icon: <PiHouseLineDuotone size={20} />,
  },
];

const UserProfile = () => {
  const [component, setComponent] = useState("UserAccount");
  const user_id = localStorage.getItem('user_id')||null;

  const handleComponentChange = (part) => {
    setComponent(part);
  };

  if (user_id !== null) {
  return (
    <div className="font-nunito flex-col justyfy-center items-center">
      <div className="fixed right-0 z-50 top-0 w-full bg-green-50 shadow-md">
        <Header />
        <NavBar />
      </div>
      <div className="w-full mt-60">
        <div className="w-full md:w-10/12 mx-auto flex-wrap lg:flex justify-between">
          <div className="user-side-bar w-full lg:w-[25%]">
            <div className="avatar w-full flex justify-center items-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
                alt="avatar"
                className="my-5 w-32 h-32 rounded-full"
              />
            </div>
            <ul>
              {sideBarUser.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center py-2 px-4 border-b border-gray-300 hover:bg-gray-100"
                >
                  {item.icon}
                  <button
                    className="ml-3"
                    onClick={() => handleComponentChange(item.part || item.link)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="user-content w-full lg:w-[70%] mt-10 lg:mt-0">
            <div id="account bg-red-900">
                {component === "UserAccount" && <UserAccount />}
                {component === "UserHistory" && <UserHistory />}
                {component === "ChangeAddress" && <ChangeAddress />}
                {component === "ChangePassword" && <ChangePW />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
  }
  else {
    window.location.href = '/login';
  }
};

export default UserProfile;
