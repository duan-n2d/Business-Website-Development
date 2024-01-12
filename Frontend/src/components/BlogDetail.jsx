import React from 'react';

const API = 'https://gakki.onrender.com/api/auth/';

const blogDataDefault = {
  "id": 1,
  "category": "Hướng dẫn mua hàng",
  "title": "Quà 2023 Cho Guitarists",
  "author": "Nhân Võ",
  "date": "Thứ hai, 18 Tháng 12 Năm 2023 15:21 (GMT+7)",
  "content":[
    {
      type: 'img',
      src: 'https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-banner@1200x630-480x252.jpg',
      alt: 'Image Alt Text',
    },
    {
      type: 'p',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?<br /> <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, in ex! Eaque enim vitae, consequuntur molestias temporibus, et provident incidunt iusto reiciendis neque quasi consequatur quod quas rem voluptate iste?',
    },
    {
      type: 'h1',
      text: 'Quà 2023 Cho Guitarists',
    },
  ]
}

function BlogDetail(blog) {
  const blogData = blog.data || blogDataDefault;
  const contentData = blogData.content
  return (
    <div className='font-nunito flex flex-col'>
      {/* header */}
      <br />
      <br />
      <header className='font-inter text-xl text-center'>
        <a href="" className='text-yellow-700 text-[20px]'>{blogData.category}</a> / {blogData.date}
      </header>
      <br />
      <h1 className='font-inter text-[30px] text-center font-bold'>{blogData.title}</h1><br /><br />

      {/* Render content dynamically */}
      <div className='w-full lg:w-[70%] mx-auto text-xl leading-8'>
      {contentData.map((content, index) => {
        switch (content.type) {
          case 'img':
            return (
              <center key={index}>
                <img width={1000} src={content.src} alt={content.alt} className='my-5'/>
              </center>
            );
          case 'p':
            return <p key={index} dangerouslySetInnerHTML={{ __html: content.text }} />;
          case 'h1':
            return <h1 key={index} className='text-yellow-700 text-3xl pb-5 pt-10 text-justify'>{content.text}</h1>;
          default:
            return null;
        }
      })}
      </div>

      {/* Footer */}
      <div className='lg:w-[70%] ml-[15%] mr-[15%] text-xl leading-8'>
        <div className='text-right p-10'>
          <p className='font-bold'>{blogData.author}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
