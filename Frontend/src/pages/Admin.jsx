import React, { useState, useEffect } from "react";
import axios from "axios";
const API = 'https://gakki.onrender.com/api/auth/';

import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Sales from "../components/Sales";
// import AdminBlog from "../components/AdminBlog";
import AdminAllBlog from "../components/AdminAllBlog";
import AdminProduct from "../components/AdminProducts";
import AdminOrder from "../components/AdminOrder";
import AdminCustomer from "../components/AdminCustomer";

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem('tokenStore') || null);
  const [userInfo, setUserInfo] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  if (!token) {
    window.location.href = '/login';
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (token) {
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace('-', '+').replace('_', '/');
          const user = JSON.parse(window.atob(base64));

          const res = await axios.get(`${API}/user/${user.user_id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          setUserInfo(res.data.user);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [token]);

  if (userInfo && userInfo.role === 'admin') {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const renderComponent = () => {
      switch (selectedComponent) {
        case "dashboard":
          return <Sales />;
        case "order":
          return <AdminOrder />;
        case "customer":
          return <AdminCustomer />;
        case "blog":
          return <AdminAllBlog />;
        case "product":
          return <AdminProduct />;
        default:
          return null;
      }
    };

    const handleComponentChange = (component) => {
      setSelectedComponent(component);
      scrollToTop();
    };

    return (
      <div className="flex">
        <div className="fixed">
          <Sidebar setSelectedComponent={handleComponentChange} />
        </div>
        <div className="w-full bg-green-50">
          <div className="fixed z-50">
            <Header />
          </div>
          <div className="content mt-20 ml-64 p-10">{renderComponent()}</div>
        </div>
      </div>
    );
  }
  else {
    window.location.href = '/';}
}
