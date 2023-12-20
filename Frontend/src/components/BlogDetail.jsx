import React from 'react';

function BlogDetail() {
  return (
    <div className='font-nunito text-14'>
      {/* header */}
      <br />
      <br />
      <header className='md:text-18 text-center w-[80%] mx-auto'>
        <a href="#" className='text-yellow-700'>Hướng dẫn mua hàng</a> / Thứ hai, 18 Tháng 12 Năm 2023 15:21 (GMT+7)
      </header>
      <br />
      <h1 className='font-inter md:text-30 text-24 text-center font-bold'>Quà 2023 Cho Guitarists</h1><br /><br />

      <center><img className='w-[70%]' src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-banner@1200x630-480x252.jpg" /></center>
      {/* body */}
      <div className='lg:w-[70%] ml-[15%] mr-[15%] md:text-16 leading-8'>
        <br />
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>

        {/* Table of contents */}
        <div className='md:w-[80%] lg:ml-[15%] lg:mr-[15%] mx-auto md:text-16 leading-8 bg-[#CAFFD661] pl-10 p-3 m-3'>
          <ol className="toc-list"><p className='font-bold'>Table Of Contents</p>
            <div className='md:pl-10 italic underline text-gray-600'>
            <li className=' hover:not-italic hover:text-orange-500'><a href="#section-1">1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</a></li>
            <li className=' hover:not-italic hover:text-orange-500'><a href="#section-2">2. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</a></li>
            <li className=' hover:not-italic hover:text-orange-500'><a href="#section-3">3. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</a></li>
            </div>
          </ol>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, in ex! Eaque enim vitae, consequuntur molestias temporibus, et provident incidunt iusto reiciendis neque quasi consequatur quod quas rem voluptate iste?
        </p>

        <section id='section-1'>
          <h1 className='text-yellow-700 text-20 font-semibold pb-5 pt-10 text-justify'>1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
          <center>
            <a href="#">
              <img src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-elixir-strings@1000x400.jpg"></img>
            </a>
          </center>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
        </section>

        <section id='section-2'>
          <h1 className='text-yellow-700 text-20 font-semibold pb-5 pt-10 text-justify'>2. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
          <center>
            <a href="#">
              <img src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-elixir-strings@1000x400.jpg"></img>
            </a>
          </center>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
        </section>

        <section id='section-3'>
          <h1 className='text-yellow-700 text-20 font-semibold pb-5 pt-10 text-justify'>3. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
          <center>
            <a href="#">
              <img src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-elixir-strings@1000x400.jpg"></img>
            </a>
          </center>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
        </section>

        {/* Footer */}
        <div class="writer" className='text-right p-10'>
          <p className='font-bold text-18'>Nhân Võ</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
