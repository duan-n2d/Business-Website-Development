import React from 'react';
import BlogCard from './BlogCard';

import Blog1 from '../assets/blogs/Blog1.jpg'
import Blog2 from '../assets/blogs/Blog2.jpg'
import Blog3 from '../assets/blogs/Blog3.jpeg'

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

const BlogRec = (blogData) => {
  // const blogs = blogData.data;
  const blogNews = [
    {
      category: '#Hướng dẫn chọn đàn',
      imageUrl: Blog1,
      heading: 'Mua đàn nào là tốt?',
      excerpt: 'Bạn mới bắt đầu học đàn và đang đối diện với thách thức lựa chọn loại đàn phù hợp?',
      link: '#',
    },
    {
      category: '#Bí kíp Produce',
      imageUrl: Blog2,
      heading: 'Xóa tạp âm khi thu',
      excerpt: 'Để mang đến âm thanh chuyên nghiệp và tinh tế, việc biết cách sử dụng công cụ...',
      link: '#',
    },
    {
      category: '#Kiến thức âm nhạc',
      imageUrl: Blog3,
      heading: 'EQ là gì?',
      excerpt: 'Mỗi loại nhạc cụ đều có những đặc điểm âm thanh riêng biệt. Bài viết này sẽ phân tích...',
      link: '#',
    },
  ]

  return (
    <div className="w-full md:w-10/12 mx-auto bg-white flex-col justify-center font-nunito">
      <hr className='border-black'/>
      <div className='font-bold text-center my-12'>
        <h3 className='font-bold text-center text-[26px] uppercase'>Trích từ Blog</h3>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 my-2 mx-[5%]'>
        {blogNews.map((blog, index) => (
          <BlogCard
            key={index}
            blog={blog}
          />
        ))}
      </div>

      <div className='mt-10 mb-5 flex justify-center'>
        <a href='/blogs' className='text-center border-green-400 border-solid border-2 rounded-full w-32 p-2 font-bold text-xl hover:bg-green-300'>
          View All
        </a>
      </div>
      <br />
    </div>
  );
};

export default BlogRec;