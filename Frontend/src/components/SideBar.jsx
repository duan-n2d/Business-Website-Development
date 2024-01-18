import React from 'react';
import logo from '../assets/Gakki.png';
import * as PiIcons from 'react-icons/pi';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: PiIcons.PiChartPieSliceFill },
  { id: 'order', label: 'Đơn hàng', icon: PiIcons.PiBasketFill },
  { id: 'customer', label: 'Khách hàng', icon: PiIcons.PiUsersBold },
  { id: 'blog', label: 'Bài viết', icon: PiIcons.PiNotePencilBold },
  { id: 'product', label: 'Sản phẩm', icon: PiIcons.PiGuitarFill },
  { id: 'delivery', label: 'Vận chuyển', icon: PiIcons.PiTruckFill },
];

const Sidebar = ({ setSelectedComponent }) => {
  const handleMenuItemClick = (id) => {
    setSelectedComponent(id);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="relative font-nunito">
      <aside
        id="sidebar-multi-level-sidebar"
        className="w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="logo w-full">
          <img className="w-9/12" src={logo} alt="" />
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-r from-[#374884] to-[#4F609D]">
          <ul className="space-y-2 font-medium">
            {menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(menuItem.id)}
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <menuItem.icon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" />
                  <span className="ms-3">{menuItem.label}</span>
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <PiIcons.PiSignOutBold className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Đăng xuất</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
