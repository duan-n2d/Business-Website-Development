import React, { useState } from "react";
import img1 from '../assets/logoweb__.png';
import img2 from '../assets/other-image-1.jpg';
import img3 from '../assets/other-image-2.jpg';
import img4 from '../assets/other-image-3.jpg';
import { Star } from "@phosphor-icons/react";
import { Cube } from "@phosphor-icons/react";
import { Truck } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react";

const ProductDetails = () => {
  const [isZoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(img1);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setPosition({ x, y });
  };

  const handleThumbnailClick = (image) => {
    setZoomed(false); // Reset zoom when switching images
    setSelectedImage(image);
  };

  const zoomedStyle = {
    backgroundImage: `url(${selectedImage})`,
    backgroundPosition: `${position.x * 100}% ${position.y * 100}%`,
    backgroundSize: '150% 150%', // Scale to 125%
    width: '100%', // Keep the width 100%
    height: '100%', // Keep the height 100%
  };

  return (
    <div className="font-nunito">
      <div className="py-5 pl-4">
        <h1 className="font-bold ">
          Fender CB-60SCE Acoustic Bass Guitar, Natural
        </h1>
        <div className="flex w-[30%]">
          <span className="flex gap-2 w-[50%]">
            <Star className="" size={36}></Star>
            <Star className="" size={36}></Star>
            <Star className="" size={36}></Star>
            <Star className="" size={36}></Star>
            <Star className="" size={36}></Star>
          </span>
          <span>

            <button className="align-middle mt-2 mx-3 w-32">
              <a href="" className="font-medium text-center text-[#1B3735]">Thêm đánh giá</a>
            </button>
          </span>
        </div>
      </div>

















      <div className=" flex sm:flex-wrap ">

        <div className=" flex w-[70%] sm:w-[100%]  md:w-[70%] " >






          <div className="ml-4 grid grid-cols-1 gap-6 ">
            <img className="border border-gray-400"
              src={img1}
              alt="Thumbnail 1"
              style={{ width: '100px', height: '100px', marginRight: '10px', cursor: 'pointer' }}
              onClick={() => handleThumbnailClick(img1)}
            />
            <img className="border border-gray-400"
              src={img2}
              alt="Thumbnail 2"
              style={{ width: '100px', height: '100px', marginRight: '10px', cursor: 'pointer' }}
              onClick={() => handleThumbnailClick(img2)}
            />
            <img className="border border-gray-400"
              src={img3}
              alt="Thumbnail 3"
              style={{ width: '100px', height: '100px', marginRight: '10px', cursor: 'pointer' }}
              onClick={() => handleThumbnailClick(img3)}
            />
            <img className="focus:bg-[#D9D9D9] border border-gray-400"
              src={img4}
              alt="Thumbnail 4"
              style={{ width: '100px', height: '100px', cursor: 'pointer' }}
              onClick={() => handleThumbnailClick(img4)}
            />
          </div>


          <div
            className="relative overflow-hidden mx-4"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setZoomed(true)}
            onMouseLeave={() => setZoomed(false)}
            style={{ width: '800px', height: '800px', marginRight: '40px' }}
          >
            <img
              className="w-[100%] h-[100%] focus:bg-[#D9D9D9]"
              src={selectedImage}
              alt="Hình ảnh"
              style={{ display: isZoomed ? 'none' : 'block' }}
            />
            {isZoomed && (
              <div
                className="absolute bg-no-repeat bg-cover"
                style={zoomedStyle}
              ></div>
            )}
          </div>


        </div>








        <div className="w-[30%] sm:w-[100%] md:w-[30%] pl-6 ">
          <table className="bg-[#F3FFF1] w-[95%] ml-6 py-10">
            <tr>
              <td className="font-bold">
                <p className="">1.000.000Đ</p>
              </td>
              <td rowSpan={2}>
                <img src={img1} alt="" className="w-[90px] h-[90px]" />
              </td>
            </tr>
            <tr>
              <td className="font-medium">
                Số lượng
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="text-center " >
                <button className="  text-white font-bold rounded bg-[#2D4B49] w-[80%] h-[56.24px] border border-[#96FEAE] flex justify-center align-middle items-center gap-3">
                  <a href="">Thêm Vào Giỏ Hàng</a>
                  <ArrowRight color="#96FEAE"></ArrowRight>
                </button></td>
            </tr>
          </table>
          <table className="bg-[#F3FFF1] w-[100%] ml-6 ">
            <tr c>
              <td >
                <Cube size={34}></Cube>
              </td>
              <td className="text-[#2D4B49]">
                Sản phẩm còn hàng
              </td>
            </tr>
            <tr>
              <td >
                <Truck size={34}></Truck>

              </td>
              <td className="text-[#2D4B49]">
                Sản phẩm còn hàng
              </td>
            </tr>
          </table>
          <p className="font-medium text-[#1B3735] ml-6 bg-[#F3FFF1]">
            Cách thức giao hàng có thể khác nhau  khi bạn thanh toán tùy thuộc vào  sản phẩm trong giỏ hàng của bạn
          </p>
        </div>
      </div>















      <div className="grid grid-cols-1 mx-5 my-9 sm:grid-cols-1 gap-4 lg:grid-cols-2 md:grid-cols-2" >




        <div className="w-[100%]">


          <p className="text-center text-[#1B3735] font-bold">Thông Số Kỹ Thuật</p>



          <table className=" border border-black text-[#1B3735] font-bold w-[100%] ">
            <tr className="bg-[#CAFFD6]">
              <td className="border border-black">
                Thông tin
              </td>
              <td>
                Thông Số
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-black">
                Kiểu thân
              </td>
              <td className="border border-black">
                Concert-sized
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-black">
                Gỗ Thân
              </td>
              <td className="border border-black" >
                olid Spruce Top, Laminated Mahogany Back & Sides
              </td>
            </tr>
            <tr className="border border-black">
              <td className="border border-black">
                Màu Thân
              </td>
              <td>
                Natural
              </td>
            </tr >
            <tr className="border border-black">
              <td className="border border-black" >
                Mặt cần
              </td>
              <td>
                Laurel
              </td>
            </tr>

          </table>


        </div>





        <div>
          <p className="text-center text-[#1B3735] font-bold">Thông Tin Sản Phẩm </p>
          <p className="w-[90%] mx-auto bg-[#FFF5E3]  p-9 text-justify">
            Series Classic Design hoàn thiện cùng CB-60SCE, bass acoustic vượt xa tầm khúc của mình. Model này sử dụng taper mảnh, dáng cần dễ thao tác như trên tất cả guitar Classic Design. Mặt đàn gỗ solid spruce và lưng & mặt bên gỗ mahogany góp phần vào thân đàn kích thước concert, tạo nên âm bass dịu và articulate. Người bạn đồng hành hoàn hảo khi hoạt động độc lập, CB-60SCE được trang bị electronics Fishman® linh hoạt, thích hợp cả trên sân khấu và trong studio.
          </p>
        </div>

      </div>




    </div>
  );
};

export default ProductDetails;
