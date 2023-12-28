import React from 'react';
import logo from "../assets/Gakki.png";
import { PiChartPieSliceFill } from "react-icons/pi";
import { PiBasketFill } from "react-icons/pi";
import { PiTruckFill } from "react-icons/pi";
import { PiUsersBold } from "react-icons/pi";
import { PiGuitarFill } from "react-icons/pi";
import { PiNotePencilBold } from "react-icons/pi";
import { PiSignOutBold } from "react-icons/pi";

const Sidebar = ({ setSelectedComponent }) => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
  return (
    <div className="relative">
        <aside id="sidebar-multi-level-sidebar" className="w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="logo w-full">
            <img className='w-9/12' src={logo} alt="" />
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-r from-[#374884] to-[#4F609D]">
        <ul className="space-y-2 font-medium">
            <li>
                <button
                type="button"
                onClick={() => setSelectedComponent("dashboard")}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    <PiChartPieSliceFill className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true"/>
                    <span className="ms-3">Dashboard</span>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    onClick={() => setSelectedComponent("order")}
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    <PiBasketFill className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" />
                    <span className="ms-3 text-left rtl:text-right whitespace-nowrap">Đơn hàng</span>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    onClick={() => setSelectedComponent("customer")}
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    <PiUsersBold className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true"/>
                    <span className="ms-3 whitespace-nowrap">Khách hàng</span>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    onClick={() => setSelectedComponent("blog")}
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    <PiNotePencilBold className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true"/>
                    <span className="ms-3 whitespace-nowrap">Bài viết</span>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    onClick={() => setSelectedComponent("product")}
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    <PiGuitarFill className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true"/>
                    <span className="ms-3 whitespace-nowrap">Sản phẩm</span>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    onClick={() => setSelectedComponent("delivery")}
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    <PiTruckFill className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true"/>
                    <span className="ms-3 whitespace-nowrap">Vận chuyển</span>
                </button>
            </li>
            <li>
                <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    <PiSignOutBold className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                    <span className="ms-3 whitespace-nowrap">Đăng xuất</span>
                </button>
            </li>
        </ul>
        </div>
        </aside>
    </div>
  );
};

export default Sidebar;
