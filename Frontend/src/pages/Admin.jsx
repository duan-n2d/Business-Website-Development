import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Sales from "../components/Sales";
// import AdminBlog from "../components/AdminBlog";
import AdminAllBlog from "../components/AdminAllBlog";
import AdminProduct from "../components/AdminProducts";
import AdminOrder from "../components/AdminOrder";
import AdminCustomer from "../components/AdminCustomer";

export default function Admin() {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

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
