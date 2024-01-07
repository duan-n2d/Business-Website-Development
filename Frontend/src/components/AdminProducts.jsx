import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PiArrowCircleLeftFill,
  PiArrowCircleRightFill,
  PiTrashBold,
} from "react-icons/pi";

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

function getProduct(products, setproducts) {
  axios
    .get(`${API}/products`)
    .then((response) => {
      setproducts(response.data.products);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  let Product = [];
  for (let i = 0; i < products.length; i++) {
    let Category = "Chưa cập nhật";
    if (products[i].category_id) {
      Category = products[i].category_id;
    }

    Product.push({
      ID: products[i].product_id,
      Title: products[i].product_name,
      Brand: products[i].brand_id,
      Category: Category,
      Status: products[i].quantity_in_stock,
      Price: products[i].current_price,
    });
  }
  return Product;
}

function AdminProduct() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => {
        setproducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  let Product = getProduct(products, setproducts);

  const itemsPerPage = 10;
  const PricePages = Math.ceil(Product.length / itemsPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);

  const getPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Product.slice(startIndex, endIndex);
  };

  const deleteProduct = (id) => {
    axios
      .patch(`${API}/delete-product`, { product_id: id })
      .then((response) => {
        console.log(response);
        alert("Xóa sản phẩm thành công!");
        Product = getProduct(products, setproducts);
      })
      .catch((error) => {
        alert("Xóa sản phẩm thất bại!");
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className=" w-full  font-nunito">
      <p className="text-30 font-bold mb-5">Sản phẩm</p>
      <div>
        <div className="pb-5">
          <div className="bg-white rounded-2xl flex pt-5 pb-5 font-bold xl:text-20 md:text-18 xl:text-left align-middle shadow">
            <center className="w-[10%] justify-center">STT</center>
            <div className="w-[32%]">Tên sản phẩm</div>
            <div className="w-[15%]">Thương hiệu</div>
            <div className="w-[13%]">Loại</div>
            <div className="w-[15%]">Trạng thái</div>
            <div className="w-[9%]">Đơn giá</div>
            <center>
              <button className="w-[14%]">
                <PiTrashBold className="w-8 h-8"></PiTrashBold>
              </button>
            </center>
          </div>
        </div>
        <div className="bg-white rounded-2xl pb-5 shadow">
          {getPageItems().map((item, index) => (
            <div className="" key={item.ID}>
              <div className="py-5 flex xl:text-16 text-14 space-y-3">
                <center className="w-[10%] mr-9 pt-3">{item.ID}</center>
                <div className="w-[32%]">{item.Title}</div>
                <div className="w-[12%]">{item.Brand}</div>
                <div className="w-[13%]">{item.Category}</div>
                <div className="w-[15%]">{item.Status}</div>
                <div className="w-[10%]">{item.Price}</div>
                <center>
                  <button
                    className="w-[14%]"
                    onClick={() => deleteProduct(item.ID)}
                  >
                    <PiTrashBold className="w-6 h-6"></PiTrashBold>
                  </button>
                </center>
              </div>
              {index !== getPageItems().length - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width=""
                  height="4"
                  viewBox="0 0 1021 4"
                  fill="none"
                  className=""
                >
                  <path
                    d="M0.999979 3L1020 1"
                    stroke="#D8D8D8"
                    strokeWidth="2"
                    strokeMiterlimit="4.62023"
                    strokeLinecap="round"
                    strokeDasharray="7 7"
                  />
                </svg>
              )}
            </div>
          ))}
          {/* Buttons */}
          <div className="xl:text-22 lg:text-20 font-bold space-x-5 justify-center flex">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <PiArrowCircleLeftFill className="xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px] text-[#1B3735]" />
            </button>
            {Array.from({ length: PricePages }, (_, i) => (
              <a key={i} href="#">
                <button
                  className={`border-gray-300 border-2 rounded-full shadow bg-white text-[#1B3735] xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px] ${
                    currentPage === i + 1 ? "bg-emerald-100" : ""
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              </a>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, PricePages))
              }
            >
              <PiArrowCircleRightFill className="xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px] text-[#1B3735]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
