import React from 'react';
import { Select, Option } from "@material-tailwind/react";
// Sử dụng thêm thư viện material của tailwind
const productdetails =[
  {brand_name:"Fender", brand_id:"FDR",category_id:"ACO", category_name:"Acoustic" },
  {brand_name:"Fender", brand_id:"FDR",category_id:"ACO", category_name:"Acoustic" },
  {brand_name:"Fender", brand_id:"FDR",category_id:"ACO", category_name:"Acoustic" },
  {brand_name:"Fender", brand_id:"FDR",category_id:"ACO", category_name:"Acoustic" },
  {brand_name:"Fender", brand_id:"FDR",category_id:"ACO", category_name:"Acoustic" },
  {brand_name:"Fender", brand_id:"FDR",category_id:"ACO", category_name:"Acoustic" },
]
function Admin_Productdetail() {
  return (
    <div className='font-nunito  w-[95%] mx-auto text-[#1B3735]'>
      <form action="">
<p className='text-30 font-bold  my-3'>
    Chi Tiết Sản Phẩm
</p>
<div>
    <p className='text-[#1B3735] font-bold text-22'>
        Tên sản phẩm
    </p>
    <input type="text" name="product_name" id="product_name" className='shadow-sm py-1 border border-[#D1D1D1] rounded-lg w-[100%] px-5 font-medium text-18 '/>
</div>

 <div className='grid grid-cols-4 gap-3'>
    <div className='grid grid-cols-1'>
        <p className='text-22 font-bold my-2'>
          Thương Hiệu
        </p>
        <Select  variant="outlined" label="Select Version">
        {productdetails.map((productdetail, index) => (
        <Option value={productdetail.brand_id}>{productdetail.brand_name}</Option>
        ))}
      </Select>
    </div>
    <div className='grid grid-cols-1'>
        <p className='text-22 font-bold my-2'>
         Loại sản phẩm
        </p>
        <Select variant="outlined" label="Select Version">
        {productdetails.map((productdetail, index) => (
        <Option value={productdetail.category_id}>{productdetail.category_name}</Option>
        ))}
      </Select>
    </div>
    
    <div className='grid grid-cols-1'>
          <label className='text-22 font-bold my-2' for="">Đơn giá </label>
          <input type="text" className='block w-full p-2  border border-gray-300 rounded-lg   '/>
          
    </div>
    <div className='grid grid-cols-1'>
          <label className='text-22 font-bold my-2' for="">Số lượng tồn kho</label>
          <input type="text" className='block w-full p-2  border border-gray-300 rounded-lg   '/>
          
    </div>
        
 </div>

<div>


<label for="product_des" class="block my-3 font-bold text-22 text-[#1B3735] ">Mô tả sản phẩm</label>
<textarea id="product_des" rows="4" class="block p-2.5 w-full text-[#1B3735] text-16 font-medium  rounded-lg border  focus:ring-blue-500 focus:border-blue-500 " placeholder="Nhập mô tả sản phẩm"></textarea>




</div>
<div>


<p  class="block my-3 font-bold text-22 text-[#1B3735]  ">Hình ảnh sản phẩm</p>
<div className='grid grid-cols-5  border-2 border-gray-300 rounded-lg cursor-pointer'>
  <label for="product_img" class="flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer m-10 h-52  ">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
           <p className=' rounded-lg py-2 px-8 border-[#0F4A1D] bg-[#E0E0E0] border-2'>
             Thêm ảnh
           </p>
            
        </div>
        <input id="product_img" type="file" class="hidden" />
    </label>
    
    </div>




</div>
<div>


<label for="product_des" class="block my-3 font-bold text-22 text-[#1B3735] ">Một số thông tin sản phẩm nếu có</label>
<textarea id="product_des" rows="8" class="block p-2.5 w-full text-[#1B3735] text-16 font-medium  rounded-lg border  focus:ring-blue-500 focus:border-blue-500 " ></textarea>
</div>
<div className='justify-center items-center flex'>
  <button className='text-20 font-bold border-[#96FEAE] text-white bg-[#2D4B49] my-10 px-8 py-4 rounded-lg border-2 focus:bg-white focus:text-[#2D4B49] focus:border-[#2D4B49] hover:bg-white hover:text-[#2D4B49] hover:border-[#2D4B49]' htmlFor="">
LƯU VÀ CẬP NHẬT
  </button>
</div>
</form>


    </div>
  );
}

export default Admin_Productdetail;
