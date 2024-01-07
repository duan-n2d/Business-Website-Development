import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { ReactDOM } from 'react';

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

function Blogs() {
  return (
    <div>
      <br />
      <h1 className=' font-nunito text-5xl text-center font-bold'>Tất cả bài viết</h1><br /><br />
      <div className='flex'>

        <div className='w-[30%] ml-[3%] mr-[2%]'>
          {/* Part 1 */}
          <div className=' ml-[5%] mr-[20%] text-lg'>
            <div className='flex'>
            <h4 className='font-bold w-[95%]'>Từ khóa</h4>
            <FaPlus size={25}/>
            </div>
            <br />
            <hr className='border-black border-1 mb-5' />
            <div className='bg-white border-gray-400 border-2 p-2 flex items-center'>
              <IoIosSearch className='text-[20px] text-gray-400' />
              <input type="text" placeholder='Search' className='outline-none ml-2' />
            </div>
            <button type="submit" className='items-center border-2 p-2 mt-5 mb-5 w-[100%] bg-green-900 text-white font-bold'>Tìm kiếm</button>

            <div className='leading-10'>
              <div className='flex'>
                <p className='w-[95%] font-bold'>Huớng dẫn chọn đàn</p>
                <FaPlus size={25} className='mt-3' />
              </div>

              <div id="instruct"></div>

              <hr className='border-black border-1 mt-5 mb-5' />
              <div className='flex'>
                <p className='w-[95%] font-bold'>Tin tức nổi bật</p>
                <FaPlus size={25} className='mt-3' />
              </div>
              <hr className='border-black border-1 mt-5 mb-5' />
              <div className='flex'>
                <p className='w-[95%] font-bold'>Tips chăm sóc đàn</p>
                <FaPlus size={25} className='mt-3' />
              </div>
              <hr className='border-black border-1 mt-5' /><br />
            </div>

            {/* Part 2 */}
            <div className='items-center border-2 p-2 mt-5 w-[100%] bg-green-900 text-white text-center font-bold'>Bài viết mớI nhất</div>
            <br />

            <div className='bg-green-100 pb-2'>
              <div class="article-card__image" className='min-w-0'>
                <a href="#">
                  <img width={1500} src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-banner@1200x630-480x252.jpg" /></a>
              </div>
              <div class="article-card__copy" className='p-2 text-justify'>
                <h5 class="article-card__pre-heading">
                  <a href="#" className='italic'>#Hướng dẫn mua hàng</a>
                </h5>
                <h4 class="article-card__heading">
                  <a href="#" className='font-bold text-xl text-center '>Quà 2023 Cho Guitarists</a>
                </h4>
                <p class="article-card__excerpt">
                  <span class="article-card__excerpt-copy">Lorem ipsum dolor sit amet…</span>
                  <a href="#" className='text-yellow-500'>Đọc thêm</a>
                </p>
              </div>
            </div>

            <br />

            <div className='bg-green-100 pb-2'>
              <div class="article-card__image" className='min-w-0'>
                <a href="#">
                  <img width={1500} src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-banner@1200x630-480x252.jpg" /></a>
              </div>
              <div class="article-card__copy" className='p-2 text-justify'>
                <h5 class="article-card__pre-heading">
                  <a href="#" className='italic'>#Hướng dẫn mua hàng</a>
                </h5>
                <h4 class="article-card__heading">
                  <a href="#" className='font-bold text-xl text-center '>Quà 2023 Cho Guitarists</a>
                </h4>
                <p class="article-card__excerpt">
                  <span class="article-card__excerpt-copy">Lorem ipsum dolor sit amet…</span>
                  <a href="#" className='text-yellow-500'>Đọc thêm</a>
                </p>
              </div>
            </div>

            <br />

            <div className='bg-green-100 pb-2'>
              <div class="article-card__image" className='min-w-0'>
                <a href="#">
                  <img width={1500} src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-banner@1200x630-480x252.jpg" /></a>
              </div>
              <div class="article-card__copy" className='p-2 text-justify'>
                <h5 class="article-card__pre-heading">
                  <a href="#" className='italic'>#Hướng dẫn mua hàng</a>
                </h5>
                <h4 class="article-card__heading">
                  <a href="#" className='font-bold text-xl text-center '>Quà 2023 Cho Guitarists</a>
                </h4>
                <p class="article-card__excerpt">
                  <span class="article-card__excerpt-copy">Lorem ipsum dolor sit amet…</span>
                  <a href="#" className='text-yellow-500'>Đọc thêm</a>
                </p>
              </div>
            </div>
          </div>



        </div>

        <div className='w-[60%] ml-[2%] mr-[3%]'>
          {/* 1 */}
          <div className='flex bg-yellow-50 mb-10'>
            <div class="article-card__image" className='min-w-0'>
              <a href="#">
                <img width={1500} src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-banner@1200x630-480x252.jpg" /></a>
            </div>
            <div class="article-card__copy" className='p-5 text-justify'>
              <h5 class="article-card__pre-heading">
                <a href="#" className='italic'>#Hướng dẫn mua hàng</a>
              </h5>
              <h4 class="article-card__heading">
                <a href="#" className='font-bold text-xl '>Quà 2023 Cho Guitarists</a>
              </h4>
              <p class="article-card__excerpt">
                <span class="article-card__excerpt-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…</span>
                <a href="#" className='text-yellow-500'>Đọc thêm</a>
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className='flex bg-yellow-50 mb-10'>
            <div class="article-card__image">
              <a href="#">
                <img width={1500} src="https://blog.sweelee.com/uploads/2023/03/Neural-DSP-Quad-ortex-Processor-Next-Generation-Amplifier-and-Effects-Modelling-banner@1200x630-480x252.jpg" class="attachment-card-thumb size-card-thumb wp-post-image" /></a>
            </div>

            <div class="article-card__copy" className='p-5 text-justify'>
              <h5 class="article-card__pre-heading">
                <a href="#" className='italic'>#Hướng dẫn mua hàng</a>
              </h5>
              <h4 class="article-card__heading">
                <a href="#" className='font-bold text-xl '>Quà 2023 Cho Guitarists</a>
              </h4>
              <p class="article-card__excerpt">
                <span class="article-card__excerpt-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…</span>
                <a href="#" className='text-yellow-500'>Đọc thêm</a>
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className='flex bg-yellow-50 mb-10'>
            <div class="article-card__image">
              <a href="#">
                <img width={1500} src="https://blog.sweelee.com/uploads/2022/08/WhatsApp-Image-2022-08-01-at-6.51.29-PM-480x252.jpeg" /></a>
            </div>

            <div class="article-card__copy" className='p-5 text-justify'>
              <h5 class="article-card__pre-heading">
                <a href="#" className='italic'>#Hướng dẫn mua hàng</a>
              </h5>
              <h4 class="article-card__heading">
                <a href="#" className='font-bold text-xl '>Quà 2023 Cho Guitarists</a>
              </h4>
              <p class="article-card__excerpt">
                <span class="article-card__excerpt-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…</span>
                <a href="#" className='text-yellow-500'>Đọc thêm</a>
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className='flex bg-yellow-50 mb-10'>
            <div class="article-card__image">
              <a href="#">
                <img width={1500} src="https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Content-creators-2023-banner@1200x630-480x252.jpg" /></a>
            </div>

            <div class="article-card__copy" className='p-5 text-justify'>
              <h5 class="article-card__pre-heading">
                <a href="#" className='italic'>#Hướng dẫn mua hàng</a>
              </h5>
              <h4 class="article-card__heading">
                <a href="#" className='font-bold text-xl '>Quà 2023 Cho Guitarists</a>
              </h4>
              <p class="article-card__excerpt">
                <span class="article-card__excerpt-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…</span>
                <a href="#" className='text-yellow-500'>Đọc thêm</a>
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className='flex bg-yellow-50 mb-10'>
            <div class="article-card__image">
              <a href="#">
                <img width={1500} src="https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-recording-musicians-2023-banner@1200x630-480x252.jpg" />                </a>
            </div>

            <div class="article-card__copy" className='p-5 text-justify'>
              <h5 class="article-card__pre-heading">
                <a href="#" className='italic'>#Hướng dẫn mua hàng</a>
              </h5>
              <h4 class="article-card__heading">
                <a href="#" className='font-bold text-xl '>Quà 2023 Cho Guitarists</a>
              </h4>
              <p class="article-card__excerpt">
                <span class="article-card__excerpt-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…</span>
                <a href="#" className='text-yellow-500'>Đọc thêm</a>
              </p>
            </div>
          </div>
          {/* 6 */}
          <div className='flex bg-yellow-50 mb-10'>
            <div class="article-card__image" data-img-height="252" data-img-width="480">
              <a href="#">
                <img width={1500} src="https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Keyboardists-2023-banner@1200x630-480x252.jpg" /></a>
            </div>

            <div class="article-card__copy" className='p-5 text-justify'>
              <h5 class="article-card__pre-heading">
                <a href="#" className='italic'>#Hướng dẫn mua hàng</a>
              </h5>
              <h4 class="article-card__heading">
                <a href="#" className='font-bold text-xl '>Quà 2023 Cho Guitarists</a>
              </h4>
              <p class="article-card__excerpt">
                <span class="article-card__excerpt-copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…</span>
                <a href="#" className='text-yellow-500'>Đọc thêm</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-xl font-bold space-x-5 ml-[40%]'>
        <button className='border-gray-300 border-2 pl-3 pr-3 pt-2 pb-2 rounded-full shadow bg-green-900 text-blue-200 '>&#8592;</button>
        <button className='border-gray-300 border-2 pl-4 pr-4 pt-2 pb-2 rounded-full shadow bg-white/80 text-gray-800 focus:bg-green-500'>1</button>
        <button className='border-gray-300 border-2 pl-4 pr-4 pt-2 pb-2 rounded-full shadow bg-white/80 text-gray-800 focus:bg-green-500'>2</button>
        <button className='border-gray-300 border-2 pl-4 pr-4 pt-2 pb-2 rounded-full shadow bg-white/80 text-gray-800 focus:bg-green-500'>3</button>
        <button className='border-gray-300 border-2 pl-3 pr-3 pt-2 pb-2 rounded-full shadow bg-green-900 text-blue-200'>&#8594;</button>
      </div>
    </div>
  );
}

export default Blogs;
