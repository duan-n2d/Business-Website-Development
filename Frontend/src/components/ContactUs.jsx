import React from 'react';
import img1 from '../assets/logoweb__.png'
function ContactUs() {
  return (
    <div className='w-full h-full'>
      <p className='h-1/12 w-1/2 ml-4 text-4xl my-7'>Chúng tôi rất vui và mong chờ tin nhắn của bạn </p>
      <div className=' h-1/5  flex justify-center'>
          <div className='bg-slate-200 h-3/5 w-1/5 mx-2 my-10 text-center'>
            <img src={img1} alt="" className='h-5/6 w-5/6' />




            
            <p className='text-center font-bold'>Chat</p>
            <p className='text-center'>
            Trò chuyện cùng chuyên gia
10:00 sáng - 10:00 tố
            </p>
            <button className='border-collapse bg-red-500 rounded-sm px-4 mx-auto my-8 h-1/6 w-3/5'>
              Mở Khung Chat 
            </button>
          </div>
          <div className='bg-slate-200 h-3/5 w-1/5 mx-2 my-10 text-center'>
            <img src={img1} alt="" className='h-5/6 w-5/6' />
            <p className='text-center font-bold'>Chat</p>
            <p className='text-center'>
            Trò chuyện cùng chuyên gia
10:00 sáng - 10:00 tố
            </p>
            <button className='border-collapse bg-red-500 rounded-sm px-4 mx-auto my-8 h-1/6 w-3/5'>
              Mở Khung Chat 
            </button>
          </div>
          <div className='bg-slate-200 h-3/5 w-1/5 mx-2 my-10 text-center'>
            <img src={img1} alt="" className='h-5/6 w-5/6' />
            <p className='text-center font-bold'>Chat</p>
            <p className='text-center'>
            Trò chuyện cùng chuyên gia
10:00 sáng - 10:00 tố
            </p>
            <button className='border-collapse bg-red-500 rounded-sm px-4 mx-auto my-8 h-1/6 w-3/5'>
              Mở Khung Chat 
            </button>
          </div>
          <div className='bg-slate-200 h-3/5 w-1/5 mx-2 my-10 text-center'>
            <img src={img1} alt="" className='h-5/6 w-5/6' />
            <p className='text-center font-bold'>Chat</p>
            <p className='text-center'>
            Trò chuyện cùng chuyên gia
10:00 sáng - 10:00 tố
            </p>
            <button className='border-collapse bg-red-500 rounded-sm px-4 mx-auto my-8 h-1/6 w-3/5'>
              Mở Khung Chat 
            </button>
          </div>
          
          
          



      </div>
      <p className='text-center text-4xl '>Điền Mẫu Phía Dưới Để Liên Hệ</p>
      <div className='bg-blue-400 justify-center w-[75%] h-3/4 mx-auto p-14'>
          <form action="">
            <p>Đội Ngũ Chăm Sóc Khách Hàng của chúng tôi luôn túc trực giải đáp mọi câu hỏi hoặc giải quyết những khó khăn bạn gặp phải.</p>
            <div className='w-full my-5 '>
            <p>Tên</p>
            <input className='w-full text-white bg-blue-200' type="text" placeholder='Tên' />
            <hr />
            </div>
            <div className='w-full my-5'>
            <p>Email</p>
            <input className='w-full' type="text" placeholder='Email' />
            <hr />
            </div>
            <div className='w-full my-5'>
            <p>Điện Thoại (tùy chọn)</p>
            <input className='w-full' type="text" placeholder='Điện thoại' />
            <hr />
            </div>
            
            <div className='w-full my-5'>
            <p>Cửa hàng</p>
            <select className='w-full' name="Cửa hàng" id="Cửa hàng" >
              <option selected>Chọn chủ để</option>
              <option value="status">Tình trạng mua hàng</option>
              <option value="Takecare">Tư vấn và cung cấp thông tin sản phẩm</option>
              <option value="bảo hành">Chế độ bảo hành</option>
              <option value="gift">Gợi ý quà tặng</option>
              <option value="infor">Tìm hiểu cửa hàng</option>
              <option value="other">Khác</option>
            </select>
            <hr />
            </div>
            <div>
              <p>
                Nội dung
              </p>
              <textarea className='w-full' name="" id="" cols="30" rows="10" placeholder='Nội dung'></textarea>
            </div>
            <input type="checkbox"  />Đăng ký nhận thông báo để được ưu đãi tốt nhất và cập nhật tin tức mới nhất.
           <div className='flex justify-end'>

            <button className=' bg-green-600 px-4 rounded-xl text-white mt-9'>Gửi</button>
           </div>
           
          </form>
      </div>
      
      






    </div>
  );
}

export default ContactUs;
