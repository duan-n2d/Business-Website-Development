import React from 'react';
import { PiGridFourFill } from "react-icons/pi";
import { PiListBold } from "react-icons/pi";
import { PiPlusBold } from "react-icons/pi";
import { PiMinusBold } from "react-icons/pi";
import Card from './Card';
import Banner from './Banner';

function ProductsGrid() {
  return (
    <div className="container mt-10 flex justify-center">
      <div className='mt-5 w-11/12 flex justify-center'>

        <div className='w-1/4 mt-20'>
          <div className='flex flex-col'>

            <div className='flex justify-center'>
              <p className='text-2xl font-bold'></p>
            </div>

            <div className='flex'>
              <div className='w-10/12'>
                <div className='mb-3 flex justify-between'>
                  <p className='text-l'>Giá</p>
                  <PiPlusBold className='w-6 h6'/>
                </div>
                <hr/>

                <div className='my-3 flex justify-between'>
                  <p className='text-l'>Loại sản phẩm</p>
                  <PiPlusBold className='w-6 h6'/>
                </div>
                <hr/>

                <div className='my-3 flex justify-between'>
                  <p className='text-l'>Thương hiệu</p>
                  <PiPlusBold className='w-6 h6'/>
                </div>
                <hr/>

                <div className='my-3 flex justify-between'>
                  <p className='text-l'>Mức giá</p>
                  <PiPlusBold className='w-6 h6'/>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div className='w-3/4'>
          <div className='flex flex-col'>
            <div className='mb-10 flex justify-between'>
              <p className='text-xl uppercase'>Tất cả sản phẩm</p>

              <div className='flex items-center justify-center'>
                <p className='text-l'>Sắp xếp theo: &nbsp;</p>
                <select className='text-l'>
                  <option value="price">Giá</option>
                  <option value="name">Tên</option>
                  <option value="brand">Thương hiệu</option>
                </select>
              </div>

              <div className='flex'>
                <PiGridFourFill className="h-8 w-8" color='#DA3E1A'/>
                &nbsp;&nbsp;
                <PiListBold className="h-8 w-8"/>
              </div>
            </div>
            
            <div className='grid grid-cols-4 gap-10'>
              <div>
                <Card/>
              </div>
              <div>
                <Card/>
              </div>
              <div>
                <Card/>
              </div>
              <div>
                <Card/>
              </div>
              <div>
                <Card/>
              </div>
              <div>
                <Card/>
              </div>
              <div>
                <Card/>
              </div>
              <div>
                <Card/>
              </div>
              <div>
                <Card/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsGrid;