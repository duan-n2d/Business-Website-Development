import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { PiArrowCircleLeftFill, PiArrowCircleRightFill, PiPlusBold } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Blogs() {
  const blogNews = [
    {
      category: '#Huớng dẫn mua hàng',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/03/Neural-DSP-Quad-ortex-Processor-Next-Generation-Amplifier-and-Effects-Modelling-banner@1200x630-480x252.jpg',
      heading: 'Quà 2023 Cho Guitarists',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit…',
      link: '#',
    },
    {
      category: '#Bí kíp Produce',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Content-creators-2023-banner@1200x630-480x252.jpg',
      heading: 'Quà 2023 Cho Guitarists',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit…',
      link: '#',
    },

    {
      category: '#Kiến thức âm nhạc',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Keyboardists-2023-banner@1200x630-480x252.jpg',
      heading: 'Quà 2023 Cho Guitarists',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit…',
      link: '#',
    },
  ]

  const blogPosts = [
    {
      category: '#Huớng dẫn mua hàng',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-banner@1200x630-480x252.jpg',
      heading: 'Quà 2023 Cho Guitarists',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
    {
      category: '#Huớng dẫn mua hàng',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/03/Neural-DSP-Quad-ortex-Processor-Next-Generation-Amplifier-and-Effects-Modelling-banner@1200x630-480x252.jpg',
      heading: 'Quà 2023 Cho Guitarists',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
    {
      category: '#Huớng dẫn mua hàng',
      imageUrl: 'https://blog.sweelee.com/uploads/2022/08/WhatsApp-Image-2022-08-01-at-6.51.29-PM-480x252.jpeg',
      heading: 'Quà 2023 Cho Guitarists',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
    {
      category: '#Bí kíp Produce',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Content-creators-2023-banner@1200x630-480x252.jpg',
      heading: 'Quà 2023 Cho Guitarists',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
    {
      category: '#Huớng dẫn mua hàng',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-recording-musicians-2023-banner@1200x630-480x252.jpg',
      heading: 'Quà 2023 Cho Guitarists',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
    {
      category: '#Kiến thức âm nhạc',
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Keyboardists-2023-banner@1200x630-480x252.jpg',
      heading: 'Quà 2023 Cho Guitarists',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt maxime earum neque eligendi consequatur rerum! Voluptatum dicta soluta fuga quo. Cumque pariatur doloremque impedit debitis ex laudantium iure eum?…',
      link: '#',
    },
  ];
  return (
    <div className='font-nunito text-[#1B3735]'>
      <br />
      <h1 className='font-inter md:text-40 text-30 text-center font-bold'>TẤT CẢ BÀI VIẾT</h1><br /><br />
      <div className='lg:flex lg:justify-between'>

        <div className='lg:w-[22%] lg:ml-[3%] xl:mr-[2%] xl:text-16 lg:text-14'>
          {/* Part 1 */}
          <div className=' ml-[5%] mr-[5%]'>
            <div className='flex'>
              <h4 className='font-bold w-[95%]'>Từ khóa</h4>
                <MdKeyboardArrowDown size={25} />
            </div>
            <br />
            <hr className='border-black border-1 mb-5' />
            <div className='bg-white border-gray-300 border-2 p-2 flex items-center'>
              <IoIosSearch className='text-[20px] text-gray-300' />
              <input type="text" placeholder='Search' className='outline-none ml-2' />
            </div>
            <button type="submit" className='items-center p-2 mt-5 mb-5 w-[100%] bg-[#1B3735] text-white font-bold'>Tìm kiếm</button>

            {/* <div className='leading-10'>
              <div className='flex'>
                <p className='w-[95%] font-bold'>Huớng dẫn chọn đàn</p>
                <PiPlusBold size={25} className='mt-3' />
              </div>

              <div id="instruct"></div>

              <hr className='border-black border-1 mt-5 mb-5' />
              <div className='flex'>
                <p className='w-[95%] font-bold'>Tin tức nổi bật</p>
                <PiPlusBold size={25} className='mt-3' />
              </div>
              <hr className='border-black border-1 mt-5 mb-5' />
              <div className='flex'>
                <p className='w-[95%] font-bold'>Tips chăm sóc đàn</p>
                <PiPlusBold size={25} className='mt-3' />
              </div>
            </div> */}
              <hr className='border-black border-1 mt-5' /><br />

            {/* Part 2 */}
            <div className='hidden lg:block'>
            <div className='items-center p-2 mt-5 w-[100%] bg-[#1B3735] text-white text-center font-bold'>
              Bài viết mới nhất
            </div>
            <br />
            {blogNews.map((post, index) => (
              <div key={index} className='mb-10'>
                <div className='bg-[#CAFFD661] pb-2'>
                  <div className='article-card__image'>
                    <a href={post.link}>
                      <img width={1500} src={post.imageUrl} alt={post.heading} />
                    </a>
                  </div>
                  <div className='article-card__copy p-2 text-justify'>
                    <h5 className='article-card__pre-heading'>
                      <a href={post.link} className='italic'>{post.category}</a>
                    </h5>
                    <h4 className='article-card__heading'>
                      <a href={post.link} className='font-bold text-16 text-center '>{post.heading}</a>
                    </h4>
                    <p className='article-card__excerpt'>
                      <span className='article-card__excerpt-copy'>{post.excerpt}</span>
                      <a href={post.link} className='text-yellow-500'>Đọc thêm</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className='xl:w-[60%] lg:w-[60%] lg:ml-[2%] ml-[5%] lg:mr-[3%] mr-[5%] xl:text-16 md:text-14'>
          {blogPosts.map((post, index) => (
            <div key={index} className='md:flex bg-[#F9FFD7] mb-10'>
              <div className='article-card__image max-h-56 min-w-0'>
                <a href={post.link}>
                  <img className='w-[100%] h-[100%] object-cover' src={post.imageUrl} alt={post.heading} />
                </a>
              </div>
              <div className='article-card__copy p-5 text-justify xl:w-[63%] lg:w-[100%]'>
                <h5 className='article-card__pre-heading'>
                  <a href={post.link} className='italic'>{post.category}</a>
                </h5>
                <h4 className='article-card__heading'>
                  <a href={post.link} className='font-bold text-20'>{post.heading}</a>
                </h4>
                <p className='article-card__excerpt xl:max-h-24 lg:max-h-20 max-h-24 overflow-hidden overflow-ellipsis'>
                  <span className='article-card__excerpt-copy'>{post.excerpt}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className='xl:text-22 lg:text-20 font-bold space-x-5 justify-center flex'>
        <a href="#">
        <button>
          <PiArrowCircleLeftFill className='xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px]'></PiArrowCircleLeftFill>
        </button>
        </a>
        <a href="#">
        <button className='border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]'>1</button>
        </a>
        <a href="#">
        <button className='border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]'>2</button>
        </a>
        <a href="#">
        <button className='border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]'>3</button>
        </a>
        <a href="#">          
        <button>
          <PiArrowCircleRightFill className='xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px]'></PiArrowCircleRightFill>
        </button>
        </a>
      </div>
    </div>
  );
}

export default Blogs;
