import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import logo from "../assets/aboutus/logoweb_gakki.png";
import hinh2 from "../assets/aboutus/hinh2.png";
import hinh_3 from "../assets/aboutus/hinh_3.png";
import hinh4 from "../assets/aboutus/hinh4.png";
import uudai from "../assets/aboutus/ưu_đãi_giá.png";
import hotro from "../assets/aboutus/hỗ_trợ.png";
import chatluong from "../assets/aboutus/chất_lượng.png";
import giaohang from "../assets/aboutus/giao_hàng.png";
import instrument from "../assets/aboutus/instrument.png";
import nguyen from "../assets/aboutus/nguyen.jpg";
import duan from "../assets/aboutus/duan.jpg";
import nhan from "../assets/aboutus/nhan.jpg";
import luan from "../assets/aboutus/luan.jpg";

function AboutUs() {
  return (
    <div className="text-[#1B3735]">
      <NavBar />
      <Banner />
      <div className=" container mx-auto px-[50px] font-nunito mt-8">
        <h1 className="text-30 text-center font-bold mb-4 mx-10">About Us</h1>
        <div className="flex flex-row px-[100px] max-[900px]:flex-col max-[900px]:px-[0px]">
          <div className="flex-1 basic-1/2">
            <div className="flex flex-col mx-2 my-2 basic-1/2">
              <p className="text-18 font-medium mx-5 mt-5 text-justify pb-[10px] basic-1/2">
                Xuất phát điểm là những người yêu nhạc cụ, chúng mình luôn mong
                muốn có thể đưa những âm thanh tuyệt vời này đến mọi người, đó
                cũng là lý do mà Gakki ra đời trong một mùa đông ấm áp.
              </p>
              <p className="text-18 font-medium mx-5 mb-5 text-justify pb-5 basic-1/2">
                Chúng mình cũng đem đến dịch vụ khách hàng tốt nhất, từ quá
                trình mua sắm đến bạn hàng, bạn sẽ luôn được hỗ trợ trong quá
                trình mua hàng, vận chuyển và thanh toán, mọi sự cố xảy ra chúng
                mình đều sẽ cố gắng xử lý nhanh nhất có thể
              </p>
              <img
                src={hinh2}
                alt="Banner"
                className="object-fill rounded-[2rem] mx-auto my-2 w-[450px] h-auto basic-1/2 "
              />
            </div>
          </div>
          <div className="flex-1 basic-1/2">
            <div className="flex flex-col-reverse mx-2 mt-2 basic-1/2 max-[900px]:flex-col">
              <p className="text-18 font-medium m4 text-justify pt-5 basic-1/2">
                Tại Gakki, chúng mình cung cấp đa dạng các loại nhạc cụ bao gồm
                Piano, Guitar, và đa dạng các loại phụ kiện khác bổ trợ. Các sản
                phẩm đều đa dạng ở mức giá để cho các bạn lựa chọn và phù hợp
                với tất cả các bạn, dù là với mục đích tìm đến nhạc cụ để tìm
                kiếm sự yên lành sau cuộc sống mệt mỏi hoặc là theo đuổi con
                đường chơi nhạc cụ chuyên nghiệp.
              </p>
              <img
                src={logo}
                alt="Banner"
                className="object-fill rounded-[2rem] mx-auto my-5 w-[450px] h-auto basic-1/2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row px-[100px] max-[900px]:flex-col max-[900px]:px-[0px]">
          <div className="flex-1 basic-1/2 ">
            <div className="flex flex-col mx-2 my-2 basic-1/2">
              <p className="text-18 text-medium text-justify pb-5 basic-1/2">
                Chúng mình cũng đem đến dịch vụ khách hàng tốt nhất, từ quá
                trình mua sắm đến bạn hàng, bạn sẽ luôn được hỗ trợ trong quá
                trình mua hàng, vận chuyển và thanh toán, mọi sự cố xảy ra chúng
                mình đều sẽ cố gắng xử lý nhanh nhất có thể.
              </p>
              <img
                src={hinh_3}
                alt="Banner"
                className="object-fill rounded-[2rem] mx-auto my-2 w-[450px] h-auto basic-1/2"
              />
            </div>
          </div>
          <div className="flex-1 basic-1/2">
            <div className="flex flex-col-reverse mx-2 mb-5 basic-1/2 max-[900px]:flex-col">
              <p className="m4 text-18 text-medium text-justify my-2 basic-1/2">
                Hãy cùng chúng mình hoà vào đam mê âm nhạc và hi vọng rằng bạn
                sẽ tìm được người bạn nhạc cụ tuyệt vời cho mình nhé ^^
              </p>
              <p className="m4 text-18 text-medium text-justify basic-1/2">
                Với đội ngũ chăm sóc khách hàng chất lượng và sản phẩm đa dạng,
                chúng mình tin rằng Gakki sẽ là điểm đến lý tưởng cho những
                người đam mê âm nhạc, từ những người mới bắt đầu cho tới những
                người chơi chuyên nghiệp.
              </p>
              <img
                src={hinh4}
                alt="Banner"
                className="object-fill rounded-[2rem] mt-[-100px] mx-auto w-[400px] h-auto basic-1/2 max-[900px]:mt-[-20px] "
              />
            </div>
          </div>
        </div>

        {/*video*/}
        <div className="my-5 px-[100px] max-[900px]:px-[0px]">
          <iframe
            className="w-full h-[400px] aspect-auto"
            src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          ></iframe>
        </div>

        <div className="flex flex-row px-[100px] max-[1000px]:flex-col max-[1000px]:w-auto max-[900px]:px-[0px]">
          <div className="flex flex-col w-[750px] mr-[50px] max-[1000px]:w-auto max-[1000px]:mx-5 max-[1000px]:items-center">
            <h1 className="text-24 text-left font-bold mt-5 max-[900px]:my-[10px]">
              Lý do nên chọn Gakki
            </h1>
            <div className="w-48 h-1 my-auto bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700 max-[900px]:my-[10px]"></div>

            <p className="text-18 font-medium text-left max-[1000px]:px-[0px]">
              Với mong muốn chữa lành những trái tim bằng âm vang giai điệu,
              chúng tôi hi vọng sẽ là người bạn đồng hành trên con đường âm nhạc
              của bạn.
            </p>
            <button className="w-64 my-5 bg-transparent hover:bg-[#1B3735] text-20 font-semibold hover:text-white py-2 px-4 border border-[#1B3735] hover:border-transparent rounded">
              BẮT ĐẦU NGAY
            </button>
            <img
              src={instrument}
              alt="Banner"
              className="object-fill rounded-[2rem] my-auto mx-auto w-[400px] h-auto basic-1/2 "
            />
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-4 text-center max-[1000px]:grid-rows-4">
            <div className="rounded-2xl items-center container mx-auto outline outline-gray-100 h-auto w-[266px] hover:outline-blue-300">
              <img
                src={chatluong}
                alt="Banner"
                className="object-cover rounded-full h-[120px] w-[120px] mx-auto mt-[10px]"
              />
              <h1 className="text-22 font-bold mt-[15px] mb-2">
                Đảm bảo chất lượng
              </h1>
              <h2 className="text-16 font-medium text-justify mx-[15px] mb-[30px]">
                Các sản phẩm của Gakki luôn được kiểm định chặt chẽ từ nguồn gốc
                đến chất lượng
              </h2>
            </div>
            <div className="rounded-2xl container mx-auto outline outline-gray-100 h-auto w-[266px] hover:outline-blue-300">
              <img
                src={giaohang}
                alt="Banner"
                className="object-cover rounded-full h-[120px] w-[120px] mx-auto mt-[10px]"
              />
              <h1 className="text-22 font-bold mt-[15px] mb-2">
                Giao hàng nhanh chóng
              </h1>
              <h2 className="text-16 font-medium text-justify mx-[15px] mb-[30px]">
                Đội ngũ vận chuyển của Gakki luôn cố gắng đem lại trải nghiệm
                tốt nhất cho bạn
              </h2>
            </div>
            <div className="rounded-2xl container mx-auto outline outline-gray-100 h-auto w-[266px] hover:outline-blue-300">
              <img
                src={hotro}
                alt="Banner"
                className="object-cover rounded-full h-[120px] w-[120px] mx-auto mt-[10px]"
              />
              <h1 className="text-22 font-bold mt-[15px] mb-2">
                Hỗ trợ kịp thời
              </h1>
              <h2 className="text-16 font-medium text-justify mx-[15px] mb-[30px]">
                Mọi thắc mắc của bạn sẽ được đội ngũ tư vấn viên của Gakki giải
                đáp kịp thời
              </h2>
            </div>
            <div className="rounded-2xl container mx-auto outline outline-gray-100 h-auto w-[266px] hover:outline-blue-300">
              <img
                src={uudai}
                alt="Banner"
                className="object-cover rounded-full h-[120px] w-[120px] mx-auto mt-[10px]"
              />
              <h1 className="text-22 font-bold mt-[15px] mb-2">
                Ưu đãi giá tốt
              </h1>
              <h2 className="text-16 font-medium text-justify mx-[15px] mb-[30px]">
                Gakki luôn cố gắng đem đến các bạn những sản phẩm có giá ưu đãi
                nhất
              </h2>
            </div>
          </div>
        </div>

        {/*Thanh vien*/}
        <div className="container rows-2 bg-[#F3FFF1] px-[100px] w-auto">
          <h1 className="text-22 text-center font-bold pt-10 mb-4 my-10">
            ĐỘI NGŨ GAKKI
          </h1>
          <div className="grid grid-cols-4 justify-items-center text-justify flex-row px-[60px] mb-2 max-[1000px]:grid-cols-1 max-[1000px]:justify-items-center max-[900px]:px-[0px]">
            {/*Card 1*/}
            <div className="rounded-2xl container w-[222px] h-auto my-5 bg-white basic-1/4 max-[1000px]:w-[260px] max-[1000px]:h-auto max-[1000px]:mx-[0px]">
              <img
                src={nguyen}
                alt="Banner"
                className="object-cover rounded-t-2xl content-center mb-5"
              />
              <h1 className="text-20 text-center font-bold mb-5">
                Nguyễn Thảo Nguyên
              </h1>
            </div>

            {/*Card 2*/}
            <div className="rounded-2xl container w-[222px] h-auto my-5 bg-white basic-1/4 max-[1000px]:w-[260px] max-[1000px]:h-auto max-[1000px]:mx-[0px]">
              <img
                src={duan}
                alt="Banner"
                className="object-cover rounded-t-2xl content-center mb-5"
              />
              <h1 className="text-20 text-center font-bold mb-5">
                Nguyễn Duy Duẩn
              </h1>
            </div>

            {/*Card 3*/}
            <div className="rounded-2xl container w-[222px] h-auto my-5 bg-white basic-1/4 max-[1000px]:w-[260px] max-[1000px]:h-auto max-[1000px]:mx-[0px]">
              <img
                src={luan}
                alt="Banner"
                className="object-cover rounded-t-2xl content-center mb-5"
              />
              <h1 className="text-20 text-center font-bold mb-5">
                Nguyễn Mai Như Luận
              </h1>
            </div>

            {/*Card 4*/}
            <div className="rounded-2xl container w-[222px] h-auto my-5 bg-white basic-1/4 max-[1000px]:w-[260px] max-[1000px]:h-auto max-[1000px]:mx-[0px]">
              <img
                src={nhan}
                alt="Banner"
                className="object-cover rounded-t-2xl content-center mb-5"
              />
              <h1 className="text-20 text-center font-bold mb-5">
                Võ Thành Nhân
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
