import React from "react";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function AdminBlog() {
    return (
        <main className='font-nunito flex bg-gradient-to-r from-[#FEFEFE] to-[#EBFFE4]'>
            <div className="bg-gradient-to-r from-[#374884] to-[#4F609D] w-[22%] h-[1100px] text-white text-22">
                {/* Sidebar here */}
                Hello world
            </div>

            <div className='w-[68%] mx-auto'>
                <div>
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
                    <div className="text-[32px] font-bold">
                        Tạo và chỉnh sửa bài viết
                    </div>
                </div>

                <div className="mt-5">
                    <label htmlFor='title' className="font-bold text-22">
                        Tên bài viết
                    </label> <br />
                    <input className="shadow p-4 rounded-[14px] w-full text-18 mt-5 border-[#D1D1D1] border-[1.5px]" type="text" id='title' name='title' placeholder="Nhập tiêu đề bài viết của bạn ở đây..." />
                </div>

                <div className="flex justify-between w-full">
                    <div className="mt-5">
                        <div className="font-bold text-22">
                            Danh mục
                        </div>

                        <div className="relative">
                            <select
                                name="category"
                                id="category"
                                className="p-3 rounded-[14px] shadow xl:w-[250px] md:w-[200px] xl:h-[62px] text-18 appearance-none focus:outline-none focus:ring focus:border-blue-300 mt-5 border-[#D1D1D1] border-[1.5px]"
                            >
                                <option value="Tin tức">Tin tức</option>
                                <option value="Thông báo">Thông báo</option>
                                <option value="Khuyến mãi">Khuyến mãi</option>
                                <option value="Sự kiện">Sự kiện</option>
                            </select>
                            <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300 pointer-events-none" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="font-bold text-22">
                            Hashtag
                        </div>

                        <div className="relative">
                            <select
                                name="hashtag"
                                id="hashtag"
                                className="p-3 rounded-[14px] shadow xl:w-[250px] md:w-[200px] xl:h-[62px] text-18 appearance-none focus:outline-none focus:ring focus:border-blue-300 mt-5 border-[#D1D1D1] border-[1.5px]"
                            >
                                <option value="#Hướng dẫn mua đàn">Hướng dẫn mua đàn</option>
                                <option value="#Bí kíp Produce">Bí kíp Produce</option>
                                <option value="#Tips cho người mới">Tips cho người mới</option>
                            </select>
                            <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300 pointer-events-none" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="font-bold text-22">
                            Tác giả
                        </div>

                        <div className="relative">
                            <select
                                name="author"
                                id="author"
                                className="p-3 rounded-[14px] shadow xl:w-[250px] md:w-[200px] xl:h-[62px] text-18 appearance-none focus:outline-none focus:ring focus:border-blue-300 mt-5 border-[#D1D1D1] border-[1.5px]"
                            >
                                <option value="Nhân Zõ">Nhân Zõ</option>
                                <option value="Duy Duẩn">Duy Duẩn</option>
                                <option value="Thảo Nguyên">Thảo Nguyên</option>
                                <option value="Duy Luận">Duy Luận</option>
                            </select>
                            <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300 pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div className="flex mt-5">
                    <div className="w-[70%]">
                        <label htmlFor="content" className="font-bold text-22">Nội dung bài</label>
                        <input type="text" name="content" id="content" placeholder="Nhập nội dung của bạn vào đây..." className="h-[448px] w-[100%] shadow rounded-[14px] mt-5 border-[#D1D1D1] border-[1.5px]"/>
                    </div>

                    <div className="w-[30%]">
                        <center className="font-bold text-22">Hình đại diện</center>
                        <center className="flex items-center justify-center w-[176px] h-[176px] border-[#D1D1D1] border-[1.5px] border-dashed bg-white mx-auto mt-5">
                            <button className="w-[120px] h-[32px] bg-[#E0E0E0] border-[#0F4A1D] border-2 rounded-[7px]">Thêm ảnh</button>
                        </center>
                    </div>
                </div>

                <center>
                <button className="text-20 text-white bg-[#2D4B49] border-[#96FEAE] border w-[268px] h-[56px] rounded-[7px] mt-10">LƯU VÀ CẬP NHẬT</button>
                </center>
            </div>
        </main>
    )
}

export default AdminBlog;