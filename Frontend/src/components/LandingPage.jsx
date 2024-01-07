import React, { useState, useEffect } from 'react';
const products = [
  { name: 'Đàn Ukulele Harmony Foundation Series Sierra Classic  ABS Soprano', price: '3.080.000 đ', img: 'https://i.ibb.co/68ytCLs/F03-037-0045-506-1.jpg', masp: "F03-037-0910-506", des: "Được thiết kế cho người mới bắt đầu đang tìm kiếm một loại nhạc cụ  linh hoạt, thời thượng với giá cả phù hợp, Squier® Stratocaster® HT  có vẻ ngoài và chất âm cổ điển - một nhạc cụ được yêu thích ở mọi  thời đại. Sở hữu nhiều ưu thế nổi bật như thân đàn nhẹ và mảnh,  cần đàn kiểu chữ “C” rất dễ chơi, scale ngắn hơn - 22.5”, ba pickups single-coil với nút xoay 5 chiều cho sự đa dạng về âm sắc, ngựa  nguyên khối (hardtail bridge) cho tuning đáng tin cậy." },
  { name: 'Fender FA-125 Dreadnought Acoustic Guitar w/bag, Walnut FB, Natural', price: '4.620.000 đ', img: 'https://i.ibb.co/d0HjwWC/F03-097-1210-521-1.jpg', masp: "F03-097-1210-521", des: "FA-125 là một cây guitar có vẻ ngoài đẹp với mức giá phải chăng. Cấu tạo bằng  gỗ laminate chất lượng cao cùng 3 headstock Fender 3 hiện đại và ngựa đàn  Viking cho lối chơi dễ dàng và âm thanh tuyệt hảo. Những ai mới chơi đàn và đã chơi được một thời gian sẽ đánh giá cao cần đàn nato mang lại cho cây đàn  giai điệu sống động và cảm giác chơi mượt mà, dễ dàng."},
  { name: 'Đàn Ukulele Fender Grace VanderWaal "Moonlight" Soprano (B-Stock)', price: '2.530.000 đ', img: 'https://i.ibb.co/BZ1b3TQ/F03-097-1610-102-BSTK-1-1.jpg', masp: "F03-097-1610-102-BSTK", des: "Lấy cảm hứng từ ukulele soprano đồng hành cùng Grace VanderWaal khi cô bé tập chơi đàn, Grace VanderWaal Moonlight Soprano Ukulele là màn ra mắt tuyệt vời của cây đàn dễ thao tác này. Với thân đàn nhỏ, âm thanh lôi cuốn và các đặc tính sẵn sàng bước lên sân khấu, Grace VanderWaal Moonlight Soprano Ukulele là cộng sự hoàn hảo cho âm nhạc của cô nghệ sĩ bé nhỏ. Thể hiện phong cách Boho Chic của Grace, cây đàn có lớp phủ satin Navy Blue, rosette màu vàng đồng, hardware vàng đồng, label soundhole (lỗ thoát âm) hình cây hoa lấy cảm hứng từ album xuất bản khi cô bé debut, Just The Beginning, và   chữ ký hình trái tim đặc trưng của Grace ở mặt sau đầu đàn." },
  { name: 'Đàn guitar Epiphone Les Paul SL Electric, Heritage Cherry Sunburst', price: '3.630.000 đ', img: 'https://i.ibb.co/TtzSP4r/E09-ENOLHSCH1.jpg', masp: "E09-ENOLHSCH1", des: "Là thành viên đáng tự hào trong đại gia đình Gibson Family, bạn chỉ mong đợi chất lượng cao nhất từ Epiphone guitars. Epiphone Les  Paul SL là cây Les Paul 2 pick-up, giá tốt với thân đàn từ chất liệu gỗ Poplar nhẹ ký và Epiphone Ceramic pickups mạnh mẽ. Mang đến vẻ  ngoài và cảm giác của một trong những electric guitar thịnh hành nhất thế giới, Les Paul SL hoàn hảo cho rock và blues, và tương tự như  những cái tên đắt giá khác, guitar linh hoạt tuyệt vời ở nhiều phong cách khác nhau. Lựa chọn pickup 3 chiều, điều chỉnh Master Volume và Master Tone giúp khám phá vô vàng âm thanh một cách dễ dàng và  nhanh chóng, trái ngược với các nút điều chỉnh volume và tone riêng biệt cho mỗi pickup. Hơn nữa, Les Paul SL có stopbar tailpiece mà bạn không cần điều chỉnh để có được hiệu chỉnh tối ưu. Những đặc tính này  khiến cây guitar khởi đầu trở nên hoàn hảo, sẽ giúp bạn duy trì được  cảm hứng chơi đàn." },
  { name: 'Đàn Ukulele Fender Venice Soprano, Seafoam Green', price: '2.420.000 đ', img: 'https://i.ibb.co/VSNMsSM/F03-097-1610-557-1.jpg', masp: "F03-097-1610-557", des: "Mang nguồn cảm hứng từ ngoại hình thú vị và tinh thần vô tư, độc đáo của Venice, California, Fender đã sản xuất ukulele soprano bắt trọn cảm giác đó—Venice Ukulele. Nhờ thân đàn có kích thước nhỏ gọn, Venice có thể đi khắp mọi nơi nhưng vẫn giữ được âm thanh sáng, classic, là cây đàn cần có đối với người chơi đàn  hiện nay." },
  { name: 'Đàn Ukulele Harmony Foundation Series Sierra Classic ABS Soprano, Sea Blue', price: '1.210.000 đ', img: 'https://i.ibb.co/cYT6Ngk/HMN-0641020116-1.jpg', masp: " HMN-0641020116", des: "Đắm chìm trong giai điệu mượt mà và những kỷ niệm ấm áp với Sierre ukulele từ Harmony. Bén rễ trong sự sáng tạo và khả năng nối kết, Sierra ukulele là nhạc cụ kích thước nhỏ, hoàn hảo cho chuyến cắm trại của bạn, giúp bạn thư giãn tại nhà và thỏa đam mê chơi nhạc. Harmony Sierra Classic thân đàn ABS kháng nước, chịu được điều kiện thời tiết khắc nghiệt và mang đến cảm giác thoải mái khi chơi. Với ba màu sắc bắt mắt và có dây đàn Aquila, đây là cây ukulele sẵn sàng cất tiếng và cùng bạn tạo thêm nhiều kỷ niệm đẹp ở bất cứ đâu.Được chế tác để mang đến trải nghiệm chơi nhạc hấp dẫn và đầy cảm hứng, Harmony Foundation Series hoàn hảo cho người mới bắt đầu hành trình âm nhạc và cho những ai đam mê xê dịch." },
  { name: 'Đàn guitar Fender Limited Edition FA-15 3/4 Size Steel String Acoustic, Midnight ', price: '4.070.000 đ', img: 'https://i.ibb.co/zn0MQ3g/F03-097-1170-135-5.jpg" alt="F03-097-1170-135-5" border="0"></a>', masp: "F03-097-1170-135", des: "FA-15 dây thép kích thước ¾ là một cây guitar có vẻ ngoài tuyệt đẹp với mức giá phải chăng. Được sản xuất từ gỗ ép chất lượng cao và headstock Fender 3+3, model này không chỉ dễ chơi mà còn có chất âm tuyệt vời. Với cần đàn nato mang đến âm sắc và cảm nhận sống động, đây là một guitar lý tưởng cho người mới bắt đầu và cầm thủ đang phát triển các kỹ năng chơi nhạc của mình." },
  { name: 'Đàn guitar  Ibanez GRX20-BKN Electricr, Black Night', price: '4.620.000 đ', img: 'https://i.ibb.co/qFdJmdH/dan-guitar-acoustic-poshman-1-removebg.png', masp: "I01-GRX20BKN", des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus asperiores voluptas molestias eos cupiditate? Soluta labore nesciunt voluptates perspiciatis a id repellendus, unde ab dolorem repudiandae, corrupti corporis quae ducimus." },
]

import frame from '../assets/frame.png'
function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const calculateDaysUntilChristmas = () => {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 0, 15);
    const millisecondsUntilChristmas = christmas.getTime() - today.getTime();
    const daysUntilChristmas = Math.floor(millisecondsUntilChristmas / (1000 * 60 * 60 * 24));
    const hoursUntilChristmas = Math.floor((millisecondsUntilChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesUntilChristmas = Math.floor((millisecondsUntilChristmas % (1000 * 60 * 60)) / (1000 * 60));
    const secondsUntilChristmas = Math.floor((millisecondsUntilChristmas % (1000 * 60)) / 1000);
    return {
      days: daysUntilChristmas,
      hours: hoursUntilChristmas,
      minutes: minutesUntilChristmas,
      seconds: secondsUntilChristmas,
    };
  };
  const [timeUntilChristmas, setTimeUntilChristmas] = useState(calculateDaysUntilChristmas);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeUntilChristmas(calculateDaysUntilChristmas);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const { days, hours, minutes, seconds } = timeUntilChristmas;
  return (
    <div className='font-nunito mt-3'>
      <div className='w-[100%] flex  mx-auto text-center justify-center'>

        <hr className='my-auto border-t-2 border-dashed w-[15%] border-[#D8D8D8] ' />
        <p className=' font-bold xl:text-26 text-[12px] mx-3 md:text-20'>ƯU ĐÃI ẤM ÁP CHO MÙA ĐÔNG</p>
        <hr className='my-auto border-[#D8D8D8] border-t-2 border-dashed w-[15%]' />
        <div>
        </div>
      </div>
      <p className='text-center xl:text-22 md:text-16 font-bold text-[8px]'>
        Kết thúc sau
      </p>
      <div className='text-center my-4'>
        <div className='w-[85%]  md:w-[40%] lg:w-[30%] xl:w-[20%] justify-center grid grid-cols-4 mx-auto gap-2'>
          <div className='bg-[#539863] w-[95%] rounded-md py-2 '>
            <div className='font-semibold  text-[#76DC8D] text-18 bg-white rounded-sm h-[50%] w-[65%] my-1 mx-auto justify-center'>
              <p>{`${days}`}</p>
            </div>
            <div className='text-white  my-2'>
              Ngày
            </div>
          </div>
          <div className='bg-[#539863] w-[95%] rounded-md py-2 '>
            <div className='font-semibold  text-[#76DC8D] text-18 bg-white rounded-sm h-[50%] w-[65%] my-1 mx-auto justify-center'>
              <p>{`${hours.toString().padStart(2, '0')}`}</p>
            </div>
            <div className='text-white  my-2'>
              Giờ
            </div>
          </div>
          <div className='bg-[#539863] w-[95%] rounded-md py-2 '>
            <div className='font-semibold  text-[#76DC8D] text-18 bg-white rounded-sm h-[50%] w-[65%] my-1 mx-auto justify-center'>
              <p>{`${minutes.toString().padStart(2, '0')}`}</p>
            </div>
            <div className='text-white  my-2'>
              Phút
            </div>
          </div>
          <div className='bg-[#539863] w-[95%] rounded-md py-2 '>
            <div className='font-semibold  text-[#76DC8D] text-18 bg-white rounded-sm h-[50%] w-[65%] my-1 mx-auto justify-center'>
              <p>{`${seconds
                .toString()
                .padStart(2, '0')}`}</p>
            </div>
            <div className='text-white  my-2'>
              Giây
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[100%] px-12 justify-center items-center font-nunito">
          <div className="grid grid-cols-1 gap-9 2xl:grid-cols-4 md:grid-cols-3 md:gap-12 sm:gap-20 lg:grid-cols-4 lg:gap-8 p-4 px-4  ">
            {products.slice(0, 12).map((product, index) => (
              <div key={index} className="mx-auto bg-white  max-w-sm shadow-xl  duration-300 ">
                <div className="relative  ">
                  <a>
                    <div className='relative w-full h-full'>
                      <img src={frame} alt="" className='absolute xl:top-[47%]  top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-640 h-640 object-cover' />
                      <div className="w-[65%] mx-auto object-cover mt-9 xl:mt-12 md:mt-6 ">
                        <img className=''
                          src={product.img}
                          alt={product.name}
                        />
                      </div>
                    </div>
                  </a>
                  <div className="absolute h-[115%] w-full  flex items-center justify-center -bottom-9   hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                    <button className="bg-[#598E75] text-white hover:scale-110 duration-200 hover:border-2 py-3 px-6 opacity-100 hover:opacity-100 font-semibold rounded w-[60%] " onClick={() => setShowModal(true)}>
                      Xem nhanh
                    </button>
                    {showModal ? (
                      <>
                        <div className="fixed inset-0 z-10 overflow-y-auto">
                          <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                          ></div>
                          <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative lg:w-[65%]  duration-150 p-4 mx-auto bg-[#F3FFF1] rounded-md shadow-lg">
                              <div className="mt-3 ">

                                <div className="mt-2 text-center sm:ml-4 sm:text-left md:flex ">
                                  <div className='md:w-[50%] w-[70%] mx-auto  rounded-md'>
                                    <img className='rounded-md' src={product.img} alt={product.name} />
                                  </div>
                                  <div className='md:w-[50%] mx-7'>
                                    <span><h1 className='font-nunito  md:text-30 font-bold'>{product.name}</h1>
                                    </span>
                                    <span className='md:text-24'>{product.masp}</span>
                                    <div className='font-medium md:text-22 text-justify  '>
                                      {product.des}
                                    </div>
                                    <div className=' my-6 md:text-[40px] text-center font-bold text-[#1B3735] text-30 border-2 border-[#76DC8D] rounded-md'>{product.price}</div>
                                  </div>
                                </div>
                              </div>
                              <button className='bg-[#598E75] text-white  duration-200  py-3 px-6 opacity-100 hover:opacity-100 font-semibold rounded w-[40%] justify-center items-center flex  mx-auto' onClick={() => setShowModal(false)}>
                                Đóng
                              </button>
                            </div>

                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className="px-5 pb-5 mt-14 md:pb-2">
                  <a href="#">
                    <h3 className="text-[#1B3735] font-semibold text-center text-xl tracking-tight">
                      {product.name}
                    </h3>
                  </a>
                  <a href="#">
                    <h3 className="text-[#1B3735] font-semibold text-center text-xl tracking-tight">
                      {product.masp}
                    </h3>
                  </a>
                  <div className="flex items-center justify-center mt-2.5 mb-5">
                    <h5 className="text-gray-900 text-xl tracking-tight ">
                      {product.price}
                    </h5>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href="#"
                      className="text-[#1B3735] bg-white ring-[#76DC8D] border border-[#76DC8D] w-[100%]  focus:ring-2 focus: font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:scale-110 hover:transition-all hover:duration-300 md:w-[100%] "
                    >
                      ĐẶT MUA <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
