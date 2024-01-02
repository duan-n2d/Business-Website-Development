import React from "react";

function Brand() {
    return (
        <main className="font-nunito text-16 pl-[5%] pr-[5%] pt-5">
            <div className="relative">
                <center className="text-20 font-bold pt-1">TÌM THEO THƯƠNG HIỆU</center>
                <div className="absolute top-0 right-[15%] ml-[60%]">
                    <button className="w-[170px] h-[40px] border border-[#76DC8D] rounded-[7px] hover:font-semibold hover:bg-[#F3FFF1] focus:bg-[#BAFFCA] focus:font-semibold lg:block hidden">VIEW ALL</button>
                </div>
            </div>

            <div className="grid grid-flow-row lg:grid-cols-8 md:grid-cols-4 grid-cols-2 pt-5">
                <div><a href="#"><img src="./src/assets/Gakki.png" alt="Gakki" className=" lg:pl-0 lg:pr-0 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src="./src/assets/Gakki.png" alt="Gakki" className=" lg:pl-0 lg:pr-0 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src="./src/assets/Gakki.png" alt="Gakki" className=" lg:pl-0 lg:pr-0 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src="./src/assets/Gakki.png" alt="Gakki" className=" lg:pl-0 lg:pr-0 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src="./src/assets/Gakki.png" alt="Gakki" className=" lg:pl-0 lg:pr-0 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src="./src/assets/Gakki.png" alt="Gakki" className=" lg:pl-0 lg:pr-0 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src="./src/assets/Gakki.png" alt="Gakki" className=" lg:pl-0 lg:pr-0 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src="./src/assets/Gakki.png" alt="Gakki" className=" lg:pl-0 lg:pr-0 pl-5 pr-5" /></a></div>
            </div>

            <center>
                    <button className="w-[170px] h-[40px] my-5 border border-[#76DC8D] rounded-[7px] hover:font-semibold hover:bg-[#F3FFF1] focus:bg-[#BAFFCA] focus:font-semibold lg:hidden block">VIEW ALL</button>
                </center>

            <hr className="border border-black " />

            <div className="lg:flex justify-around">
                <center className="text-20 font-bold pt-1 lg:my-auto my-5 w-auto">Tìm theo sản phẩm</center>
                <div className="flex lg:w-[65%]">
                    <div><a href="#"><img src="./src/assets/Gakki.png" alt="Gakki" className=" pl-0 pr-0 sm:pl-5 sm:pr-5 " /></a></div>
                    <div><a href="#"><img src="./src/assets/Gakki.png" alt="Gakki" className=" pl-0 pr-0 sm:pl-5 sm:pr-5 " /></a></div>
                    <div><a href="#"><img src="./src/assets/Gakki.png" alt="Gakki" className=" pl-0 pr-0 sm:pl-5 sm:pr-5 " /></a></div>
                </div>
            </div>
        </main>
    )
}

export default Brand;