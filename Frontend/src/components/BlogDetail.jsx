import React from 'react';

// const API = 'http://localhost:5000/api/auth';
const API = 'https://gakki.onrender.com/api/auth/'

function BlogDetail() {
  return (
    <div className=' font-nunito'>
      {/* header */}
      <br />
      <br />
      <header className='font-inter text-xl text-center'>
        <a href="#" className='text-yellow-700'>Hướng dẫn mua hàng</a> / Thứ hai, 18 Tháng 12 Năm 2023 15:21 (GMT+7)
      </header>
      <br />
      <h1 className='font-inter text-5xl text-center font-bold'>Quà 2023 Cho Guitarists</h1><br /><br />

      <center><img width={1000} src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-banner@1200x630-480x252.jpg" /></center>
      {/* body */}
      <div className='lg:w-[70%] ml-[15%] mr-[15%] text-xl leading-8'>
        <br />
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?<br /> <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, in ex! Eaque enim vitae, consequuntur molestias temporibus, et provident incidunt iusto reiciendis neque quasi consequatur quod quas rem voluptate iste?</p>

        <h1 className='text-yellow-700 text-3xl pb-5 pt-10 text-justify'>1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
        <center>
          <a href="#">
            <img src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-elixir-strings@1000x400.jpg"></img>
          </a>
        </center>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
        <h1 className='text-yellow-700 text-3xl pb-5 pt-10 text-justify'>1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
        <center>
          <a href="#">
            <img src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-elixir-strings@1000x400.jpg"></img>
          </a>
        </center>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
        <h1 className='text-yellow-700 text-3xl pb-5 pt-10 text-justify'>1. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
        <center>
          <a href="#">
            <img src="https://blog.sweelee.com/uploads/2023/10/Gift-Guide-for-Guitarists-2023-elixir-strings@1000x400.jpg"></img>
          </a>
        </center>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repudiandae aut voluptas aperiam reiciendis necessitatibus quo deserunt, facere natus, magnam optio illo officia dolores asperiores quia error. Doloribus, aperiam blanditiis?</p>
      
      {/* Footer */}
      <div class="writer" className='text-right p-10'>
        <p className='font-bold'>Nhân Võ</p>
      </div>
      </div>
    </div>
  );
}

export default BlogDetail;
