import React from 'react';
import BlogCard from './BlogCard';

import BlogImg1 from "../assets/banners/Blog_01.png";
import BlogImg2 from "../assets/banners/Blog_02.png";
import BlogImg3 from "../assets/banners/Blog_03.png";

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

const BlogRec = (blogData) => {
  const blogs = blogData.data;

  return (
    <div className="w-full md:w-10/12 mx-auto bg-white flex-col justify-center font-nunito">
      <hr className='border-black'/>
      <div className='font-bold text-center my-12'>
        <h3 className='font-bold text-center text-[26px] uppercase'>Trích từ Blog</h3>
      </div>

      <div className='mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-4 m-2'>
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            blog={blog}
          />
        ))}
      </div>

      <div className='my-2 flex justify-center'>
        <a href='/blogs' className='text-center border-green-400 border-solid border-2 rounded-full w-32 p-2 font-bold text-xl hover:bg-green-300'>
          View All
        </a>
      </div>
      <br />
    </div>
  );
};

export default BlogRec;