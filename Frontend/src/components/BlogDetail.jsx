import React from 'react';
import BlogDetail1 from '../assets/blogdetail/BlogDetail1.jpg'
import BlogDetail2 from '../assets/blogdetail/BlogDetail2.jpg'
import BlogDetail3 from '../assets/blogdetail/BlogDetail3.jpg'
import BlogDetail4 from '../assets/blogdetail/BlogDetail4.jpg'

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

      <center><img className='w-[70%]' src={BlogDetail1}/></center>
      {/* body */}
      <div className='lg:w-[70%] ml-[15%] mr-[15%] md:text-16 leading-8'>
        <br />
        <p className='text-justify'>Bạn đang vắt óc nghĩ xem nên chọn quà gì cho người thân? Với nhiều thương hiệu uy tín trong danh mục sản phẩm, Swee Lee tự hào là điểm đến hoàn hảo để bạn tặng món quà ý nghĩa nhất cho guitarist bạn mến mộ trong năm 2023 này. Tìm đâu xa nữa, dưới đây là những món quà khiến ai cũng phải nhảy lên vì vui thích.</p>

        {/* Table of contents */}
        <div className='md:w-[80%] lg:ml-[15%] lg:mr-[15%] mx-auto md:text-16 leading-8 bg-[#CAFFD661] pl-10 p-3 m-3'>
          <ol className="toc-list"><p className='font-bold text-center'>Table Of Contents</p>
            <div className='md:pl-10 italic underline text-gray-600'>
              <li className=' hover:not-italic hover:text-orange-500'><a href="#section-1">1. Elixir Guitar String 3-Packs</a></li>
              <li className=' hover:not-italic hover:text-orange-500'><a href="#section-2">2. Harmony Ukuleles</a></li>
              <li className=' hover:not-italic hover:text-orange-500'><a href="#section-3">3. Ibanez AZ-ES Series</a></li>
            </div>
          </ol>
        </div>

        <section id='section-1'>
          <h1 className='text-yellow-700 text-20 font-semibold pb-5 pt-10 text-justify'>1. Elixir Guitar String 3-Packs</h1>
          <center>
            <a href="#">
              <img src={BlogDetail2}></img>
            </a>
          </center>
          <p>Tích trữ dây đàn là cần thiết và không bao giờ thừa, đặc biệt là khi coated Elixir (dây có lớp phủ) là một trong những dây đàn guitar tốt nhất, được giới chuyên nghiệp công nhận. <br />
            Tuổi thọ cao: Những sợi dây này rất bền và có khả năng chống oxy hóa cực kỳ tốt, ít bị ảnh hưởng bởi độ ẩm và nhiệt độ thất thường. Nhờ đó, âm sắc của đàn vẫn đẹp sau thời gian dài sử dụng. <br />
            Siêu tiết kiệm: Bộ Elixir có 3 dây đàn với mức giá cực đẹp, mua 3 dây với giá 2 dây, thực sự không cần phải đắn đo. <br />
            Cho mọi cầm thủ: Elixir Guitar String 3-Pack có nhiều lớp phủ khác nhau (Nanoweb, Optiweb và Polyweb) và nhiều cỡ dây khác nhau để phù hợp với những nhu cầu chơi nhạc khác nhau và luôn mang lại cảm giác thoải mái khi bấm dây.</p>
        </section>

        <section id='section-2'>
          <h1 className='text-yellow-700 text-20 font-semibold pb-5 pt-10 text-justify'>2. Harmony Ukuleles</h1>
          <center>
            <a href="#">
              <img src={BlogDetail3}></img>
            </a>
          </center>
          <p>Tiếng đàn uke sống động, vui tai và mang mọi người đến gần nhau hơn. Hoàn hảo cho người mới lẫn tay chơi nhiều kinh nghiệm, Harmony Ukuleles chắc chắn sẽ cùng bạn tạo nên những kỷ niệm đẹp khó phai. <br />
            Cho mọi người: Dễ chơi. Harmony Ukuleles lý tưởng cho những ai mới tìm hiểu nhạc cụ dây hoặc cần một nhạc cụ cỡ nhỏ, dễ mang theo. <br />
            Đa dạng lựa chọn: Harmony Ukuleles có nhiều kích cỡ khác nhau như soprano, concert, tenor để phù hợp với nhiều sở thích chơi nhạc khác nhau. <br />
            Chất lượng cao: Harmony Ukuleles được chế tác từ vật liệu chất lượng cao cho độ bền vượt trội và chất âm đẹp, đầy cộng hưởng.</p>
        </section>

        <section id='section-3'>
          <h1 className='text-yellow-700 text-20 font-semibold pb-5 pt-10 text-justify'>3. Ibanez AZ-ES Series</h1>
          <center>
            <a href="#">
              <img src={BlogDetail4}></img>
            </a>
          </center>
          <p>Nếu bạn đang ưu tiên tặng một cây guitar điện có tầm giá đẹp, tinh tế, thì Ibanez AZ-ES Series chắc chắn là một lựa chọn hoàn hảo. <br />
            Siêu dễ chơi: Ibanez AZ-ES Series có cần đàn mượt, mặt cần hỗ trợ lướt ngón siêu êm và dễ dàng trên tất cả các phím. Dáng thân công thái học mang đến cảm giác ôm đàn rất thoải mái, cả trong những ngày tập chơi nhiều giờ liên tục. <br />
            Âm sắc linh hoạt: Nhờ hệ thống dyna-MIX switching và phần điện tử tiên tiến mà Ibanez AZ-ES Series sở hữu dải âm sắc rộng, linh hoạt. <br />
            Nhiều chi tiết hiện đại: Ibanez AZ-ES Series trang bị nhiều chi tiết hiện đại, trong đó hardware thật sự cải thiện trải nghiệm chơi nhạc của guitarist.</p>
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
