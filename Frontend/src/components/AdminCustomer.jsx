import React from "react";
import {
  PiArrowCircleLeftFill,
  PiArrowCircleRightFill,
  PiTrashBold,
} from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function AdminCustomer() {
  const Customer = [
    {
      ID: "01",
      Customer: "Nguyễn Thảo Nguyên",
      DOB: "13/02/2003",
      address: "Đại học Kinh tế - Luật",
      Phone: "0339994567",
      Total: "1.000.000",
    },
    {
      ID: "02",
      Customer: "Nguyễn Thảo Nguyên",
      DOB: "13/02/2003",
      address: "Đại học Kinh tế - Luật",
      Phone: "0339994567",
      Total: "1.000.000",
    },
    {
      ID: "03",
      Customer: "Nguyễn Thảo Nguyên",
      DOB: "13/02/2003",
      address: "Đại học Kinh tế - Luật",
      Phone: "0339994567",
      Total: "1.000.000",
    },
    {
      ID: "04",
      Customer: "Nguyễn Thảo Nguyên",
      DOB: "13/02/2003",
      address: "Đại học Kinh tế - Luật",
      Phone: "0339994567",
      Total: "1.000.000",
    },
    {
      ID: "05",
      Customer: "Nguyễn Thảo Nguyên",
      DOB: "13/02/2003",
      address: "Đại học Kinh tế - Luật",
      Phone: "0339994567",
      Total: "1.000.000",
    },
    {
      ID: "06",
      Customer: "Nguyễn Thảo Nguyên",
      DOB: "13/02/2003",
      address: "Đại học Kinh tế - Luật",
      Phone: "0339994567",
      Total: "1.000.000",
    },
    {
      ID: "07",
      Customer: "Nguyễn Thảo Nguyên",
      DOB: "13/02/2003",
      address: "Đại học Kinh tế - Luật",
      Phone: "0339994567",
      Total: "1.000.000",
    },
    {
      ID: "08",
      Customer: "Nguyễn Thảo Nguyên",
      DOB: "13/02/2003",
      address: "Đại học Kinh tế - Luật",
      Phone: "0339994567",
      Total: "1.000.000",
    },
  ];

  return (
    <div className="font-nunito flex">
      {/* Menu */}
      {/* Order */}
      <div className="w-full h-[1100px] mx-auto">
        <div className="bg-white shadow w-[300px] h-[80px] rounded-[12px] float-right flex font-bold">
          <div className="bg-[#2D9CDB26] rounded-[15px] w-[48px] h-[48px] mt-[16px] ml-[16px]">
            <button className="mt-[7px] ml-[7px]">
              <CiCalendar className="w-[34px] h-[34px] text-[#2D9CDB]" />
            </button>
          </div>
          <div className="mt-[16px] ml-[16px]">
            <p className="text-18">17:00</p>
            <p className="text-[12px]">12/10/2023 - 21/12/2023</p>
          </div>
          <button className=" my-auto mx-auto">
            <IoIosArrowDown className="w-[24px] h-[24px] text-gray-300" />
          </button>
        </div>
        <header className="text-30 font-bold mb-20">Khách hàng</header>

        <div>
          <div className=" pb-5">
            <div className="bg-white rounded-2xl flex pt-5 pb-5 font-bold xl:text-20 md:text-18 xl:text-left align-middle shadow">
              <center className="w-[10%] justify-center">STT</center>
              <div className="w-[20%]">Họ và tên</div>
              <div className="w-[15%]">Ngày sinh</div>
              <div className="w-[15%]">Địa chỉ</div>
              <div className="w-[16%]">Số điện thoại</div>
              <div className="w-[15%]">Tổng tiền hàng</div>
              <center>
                <button className="w-[20%]">
                  <PiTrashBold className="w-[25px] h-[28px]"></PiTrashBold>
                </button>
              </center>
            </div>
          </div>
          <div className="bg-white rounded-2xl pb-5 shadow">
            {Customer.map((item, index) => (
              <div className="pb-5">
                <div key={index} className="flex xl:text-16 text-14 space-y-3">
                  <center className="w-[10%] pt-3">{item.ID}</center>
                  <div className="w-[20%]">{item.Customer}</div>
                  <div className="w-[12%]">{item.DOB}</div>
                  <div className="w-[20%]">{item.address}</div>
                  <div className="w-[15%]">{item.Phone}</div>
                  <div className="w-[14%]">{item.Total}</div>
                  <center>
                    <button className="w-[15%]">
                      <PiTrashBold className="w-[18px] h-[19px]"></PiTrashBold>
                    </button>
                  </center>
                </div>
                {index !== Customer.length - 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width=""
                    height="4"
                    viewBox="0 0 1021 4"
                    fill="none"
                    className="mt-5"
                  >
                    <path
                      d="M0.999979 3L1020 1"
                      stroke="#D8D8D8"
                      stroke-width="2"
                      stroke-miterlimit="4.62023"
                      stroke-linecap="round"
                      stroke-dasharray="7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
            {/* Buttons */}
            <div className="xl:text-22 lg:text-20 font-bold space-x-5 justify-center flex pt-10">
              <a href="#">
                <button>
                  <PiArrowCircleLeftFill className="xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px] text-[#1B3735]"></PiArrowCircleLeftFill>
                </button>
              </a>
              <a href="#">
                <button className="border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]">
                  1
                </button>
              </a>
              <a href="#">
                <button className="border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]">
                  2
                </button>
              </a>
              <a href="#">
                <button className="border-gray-300 border-2 rounded-full shadow bg-white/80 text-[#1B3735] focus:bg-green-500 xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] w-[30px] h-[30px] lg:mt-[6px] mt-[4px]">
                  3
                </button>
              </a>
              <a href="#">
                <button>
                  <PiArrowCircleRightFill className="xl:w-[61px] xl:h-[61px] lg:w-[48px] lg:h-[48px] md:w-[42px] md:h-[42px] w-[36px] h-[36px] text-[#1B3735]"></PiArrowCircleRightFill>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCustomer;
