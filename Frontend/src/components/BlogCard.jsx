import React from 'react';

const BlogCard = (blog ) => {
  blog = blog.blog;
  if (!blog) {
    return null;
  }
  return (
    <div className='card max-w-[400px] min-w-60 m-2 font-nunito'>
      <a href={`/${blog.id}`}>
        <div className='image-blog-card'>
          <img className='' src={blog.imageUrl} alt={blog.title}/>
        </div>
        <div className=''>
          <p className='hash-tag italic text-[16px]'>{blog.hashtag}</p>
          <p className='title font-bold text-[20px]'>{blog.title}</p>
          <p className='content text-[16px]'>{blog.content}</p>
          <p className='action text-[#0a62f0] text[16px]'>Đọc thêm</p>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
