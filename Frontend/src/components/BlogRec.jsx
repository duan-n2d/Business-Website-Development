import React from 'react';
import BlogCard from './BlogCard';

const BlogRec = (listBlog) => {
  // object to array
  const objectBlog = Object.values(listBlog);
  if (!Array.isArray(objectBlog)) {
    return null;
  }
  const blogs = objectBlog[0];
  return (
    <div className="w-full md:w-10/12 mx-auto bg-white flex-col justify-center">
      <hr className='border-black'/>
      <div className='font-bold text-center text-[32px] my-12'>
        <h3 className='font-bold text-center text-[32px] uppercase'>Trích từ Blog</h3>
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