import React, { useState } from 'react';
import { PiArrowCircleLeftFill, PiArrowCircleRightFill } from "react-icons/pi";

function BlogRec() {
  const blogNews = [
    {
      imageUrl: 'https://blog.sweelee.com/uploads/2023/03/Neural-DSP-Quad-ortex-Processor-Next-Generation-Amplifier-and-Effects-Modelling-banner@1200x630-480x252.jpg',
      heading: 'Phụ kiện hay cho đàn của bạn',
      link: '#'
    },
    {
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Content-creators-2023-banner@1200x630-480x252.jpg',
      heading: 'Phòng thu chất lượng tốt',
      link: '#'
    },

    {
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Keyboardists-2023-banner@1200x630-480x252.jpg',
      heading: 'Chọn Organ cho người mới',
      link: '#'
    },
    {
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Content-creators-2023-banner@1200x630-480x252.jpg',
      heading: 'Quà 2023 Cho Guitarists',
      link: '#',
    },
    {
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-recording-musicians-2023-banner@1200x630-480x252.jpg',
      heading: 'Quà 2023 Cho Guitarists',
      link: '#',
    },
    {
      imageUrl: 'https://blog.sweelee.com/uploads/2023/11/Gift-Guide-for-Keyboardists-2023-banner@1200x630-480x252.jpg',
      heading: 'Quà 2023 Cho Guitarists',
      link: '#',
    },
  ]

  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((prevGroup) => (prevGroup === 0 ? 1 : 0));
  };

  const next = () => {
    setCurr((prevGroup) => (prevGroup === 0 ? 1 : 0));
  };

  return (
    <div className='font-nunito'>
      <br />
      <hr className='border-black ml-[5%] mr-[5%]' />
      <h3 className='font-bold text-center text-30 p-10'>TRÍCH TỪ BLOG</h3>

      <div className='flex ml-[10%] mr-[10%] space-x-5 absolute overflow-hidden mb-10 transition-transform ease-out duration-500'>
        {curr === 0
          ? blogNews.slice(0, 3).map((post, index) => (
            <div key={index} className=''>
            <div className=' pb-2'>
              <div className='article-card__image'>
                <a href={post.link}>
                  <img width={1500} className='rounded-xl' src={post.imageUrl} alt={post.heading} />
                </a>
              </div>
              <div className='article-card__copy pt-5'>
                <h4 className='article-card__heading text-center'>
                  <a href={post.link} className='font-bold text-24'>{post.heading}</a>
                </h4>
              </div>
            </div>
          </div>
            ))
          : blogNews.slice(3, 6).map((post, index) => (
            <div key={index} className=''>
            <div className=' pb-2'>
              <div className='article-card__image'>
                <a href={post.link}>
                  <img width={1500} className='rounded-xl' src={post.imageUrl} alt={post.heading} />
                </a>
              </div>
              <div className='article-card__copy pt-5'>
                <h4 className='article-card__heading text-center'>
                  <a href={post.link} className='font-bold text-24'>{post.heading}</a>
                </h4>
              </div>
            </div>
          </div>
            ))}
      </div>
      
      <div className='flex items-center justify-between pt-20 p-[5%]'>
        <button
          onClick={prev}
          className=' bg-white/80 text-[#1B3735]  hover:text-white'
        >
          <PiArrowCircleLeftFill className='xl:w-[40px] xl:h-[40px] bg-gray-300 border-black border-1  text-white rounded-full hover:bg-orange-500'/>
        </button>
        <button
          onClick={next}
          className=' bg-white/80 text-[#1B3735] hover:text-white'
        >
          <PiArrowCircleRightFill className='xl:w-[40px] xl:h-[40px] bg-gray-300 border-black border-1  text-white rounded-full hover:bg-orange-500'/>
        </button>
      </div>

      <br />
      <br />
      <center>
        <a href="#">
        <button className='border-green-400 border-solid border-2 rounded-full w-52 p-2 mt-10 font-bold text-22 hover:bg-orange-500'>
          View All &#8594;
        </button>
        </a>
      </center>
      <br />
    </div>
  )
}

export default BlogRec