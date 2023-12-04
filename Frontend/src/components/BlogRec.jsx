import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

function BlogRec() {
    return (
        <div class="related read">
        <br />
        <hr className='border-black ml-[10%] mr-[10%]' />
          <h3 className='font-bold font-sans text-center text-3xl p-10'>TRÍCH TỪ BLOG</h3>
            <div className=' absolute inset-0 flex items-center justify-between'>
            <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-orange-500 ml-[5%] border-gray-300 border-2 hover:text-white'>
            <FaLongArrowAltLeft size={40} />
            </button>
            <button className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-orange-500 mr-[5%] border-gray-300 border-2 hover:text-white'>
            <FaLongArrowAltRight size={40} />
            </button>
            </div>

        <div className='flex space-x-10 ml-[10%] mr-[10%]'>
          <div className='flex'>
            <div>
              <div>
                <a href="#">
                  <img width={400} src="https://blog.sweelee.com/uploads/2023/03/Neural-DSP-Quad-ortex-Processor-Next-Generation-Amplifier-and-Effects-Modelling-banner@1200x630-480x252.jpg"/></a>
              </div>
              <div className='w-80 text-justify'>
                <h5 className='italic'>#Hướng dẫn mua hàng</h5>
                <h4 className='font-bold text-xl'>
                  <a href="#">Effects Modelling Thế Hệ Mới</a>
                </h4>
                <p class="article-card__excerpt">Lorem ipsum, dolor sit amet consectetur...
                  <a href="#" className='text-yellow-600'>Đọc thêm</a>
                </p>
              </div>
            </div>
          </div>

          <div className='flex'>
            <div>
              <div>
                <a href="#">
                  <img width={400} src="https://blog.sweelee.com/uploads/2023/03/Neural-DSP-Quad-ortex-Processor-Next-Generation-Amplifier-and-Effects-Modelling-banner@1200x630-480x252.jpg"/></a>
              </div>
              <div className='w-80 text-justify'>
              <h5 className='italic'>#Hướng dẫn mua hàng</h5>
                <h4 className='font-bold text-xl'>
                  <a href="#">Effects Modelling Thế Hệ Mới</a>
                </h4>
                <p class="article-card__excerpt">Lorem ipsum, dolor sit amet consectetur...
                  <a href="#" className='text-yellow-600'>Đọc thêm</a>
                </p>
              </div>
            </div>
          </div>

          <div className='flex'>
            <div>
              <div>
                <a href="#">
                  <img width={400} src="https://blog.sweelee.com/uploads/2023/03/Neural-DSP-Quad-ortex-Processor-Next-Generation-Amplifier-and-Effects-Modelling-banner@1200x630-480x252.jpg"/></a>
              </div>
              <div className='w-80 text-justify'>
              <h5 className='italic'>#Hướng dẫn mua hàng</h5>
                <h4 className='font-bold text-xl'>
                  <a href="#">Effects Modelling Thế Hệ Mới</a>
                </h4>
                <p class="article-card__excerpt">Lorem ipsum, dolor sit amet consectetur...  
                  <a href="#" className='text-yellow-600'>Đọc thêm</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <center>
            <button className='border-green-400 border-solid border-2 rounded-full w-32 p-2 font-bold text-xl hover:bg-orange-500'>
                View All &#8594;
            </button>
        </center>
        <br />
      </div>
    )
}

export default BlogRec
