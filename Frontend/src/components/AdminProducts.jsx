import React, { useState } from 'react';
import {
  PiArrowCircleLeftFill,
  PiArrowCircleRightFill,
  PiTrashBold,
} from "react-icons/pi";

function Admin_Product() {
  const [allProducts, setAllProducts] = useState([
    {
      name: "ĐÀN PIANO",
      brand: "Epipphone",
      category: "Guitar",
      status: "#",
      price: "1.000.000Đ"
    },
    {
      name: "ĐÀN PIANO",
      brand: "Epipphone",
      category: "Guitar",
      status: "#",
      price: "1.000.000Đ"
    },
    {
      name: "ĐÀN PIANO",
      brand: "Epipphone",
      category: "Guitar",
      status: "#",
      price: "1.000.000Đ"
    },
    {
      name: "ĐÀN PIANO",
      brand: "Epipphone",
      category: "Guitar",
      status: "#",
      price: "1.000.000Đ"
    },
    {
      name: "ĐÀN PIANO",
      brand: "Epipphone",
      category: "Guitar",
      status: "#",
      price: "1.000.000Đ"
    },
    {
      name: "ĐÀN PIANO",
      brand: "Epipphone",
      category: "Guitar",
      status: "#",
      price: "1.000.000Đ"
    },
    {
      name: "ĐÀN PIANO",
      brand: "Epipphone",
      category: "Guitar",
      status: "#",
      price: "1.000.000Đ"
    },
    {
      name: "ĐÀN PIANO",
      brand: "Epipphone",
      category: "Guitar",
      status: "#",
      price: "1.000.000Đ"
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...allProducts];
    updatedProducts.splice(index, 1);
    setAllProducts(updatedProducts);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className='font-nunito bg-gradient-to-r from-[#FEFEFE] via-[#FFFFFF] to-[#EBFFE4]'>
      <h1 className="text-30 font-bold my-5 mx-5 text-[#1B3735]">Sản Phẩm </h1>
      <div className='flex justify-end mx-5'>
        <button className='bg-[#1B3735] px-3 py-3 rounded-md text-white text-20 font-bold f'>
        <a href="#">Tạo sản phẩm</a>
      </button>
      </div>
      
      <div className='w-[100%] mx-auto rounded-md shadow-md px-4 py-7 '>
<div className='my-8 shadow-lg text-[#1B3735]'>

  <table className=' text-22 font-bold my-8-'>
          <tr>
            <th className=' '>STT</th>
            <th className='px-12 py-2'>Tên Sản Phẩm</th>
            <th className='px-32 py-2'>Thương Hiệu</th>
            <th className='px-20 py-2'> Loại</th>
            <th className='px-4 py-2'>Tình Trạng</th>
            <th className='px-16 py-2'>Giá</th>
            <th className='pl-52 py-2'><PiTrashBold size={19}/></th>
          </tr>
        </table>
</div>
        

         <table className="  text-16 font-medium  w-[100%] ">
        
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={index}>

              <td className="px-4 py-2 border-dashed border-b-4 border-[#D8D8D8] text-[#1B3735]" >{index+1}</td>
              <td className="px-4 py-2 border-dashed border-b-4 border-[#D8D8D8] text-[#1B3735]" >{product.name}</td>
              <td className="px-4 py-2 border-dashed border-b-4 border-[#D8D8D8] text-[#1B3735]">{product.brand}</td>
              <td className="px-4 py-2 border-dashed border-b-4 border-[#D8D8D8] text-[#1B3735]">{product.category}</td>
              <td className="px-4 py-2 border-dashed text-[#1B3735] border-b-4 border-[#D8D8D8]">{product.status}</td>
              <td className="px-4 py-2 border-dashed text-[#1B3735] border-b-4 border-[#D8D8D8]">{product.price}</td>
              <td className='py-2 px-4 rounded border-dashed border-b-4  border-[#D8D8D8] '>
                <button
                  className=" "
                  onClick={() => handleDeleteProduct(index)}
                >
                  <PiTrashBold size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>




      </div>
     
      <div className="flex justify-center mt-4">
        <button
          className="rounded-full bg-[#1B3735] w-10 h-10 flex items-center justify-center focus:outline-none"
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          <PiArrowCircleLeftFill color='#CAFFD6' />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-3  px-3 rounded-full ${
              index + 1 === currentPage ? 'bg-[#CAFFD6] text-[#1B3735]' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => handlePageChange('0'+ index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="rounded-full bg-[#1B3735] w-10 h-10 flex items-center justify-center focus:outline-none"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          <PiArrowCircleRightFill color='#CAFFD6' />
        </button>
      </div>
    </div>
  );
}

export default Admin_Product;
