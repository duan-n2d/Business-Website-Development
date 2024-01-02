import React from "react";
import { GiGuitarBassHead, GiJackPlug } from "react-icons/gi";
import { CgPiano } from "react-icons/cg";

function Brand() {
    return (
        <main className="font-nunito text-16 pl-[5%] pr-[5%] pt-5">
            <div className="relative">
                <center className="text-20 font-bold pt-1">TÌM THEO THƯƠNG HIỆU</center>
                <div className="absolute top-0 right-[15%] ml-[60%]">
                    <button className="w-[170px] h-[40px] border border-[#76DC8D] rounded-[7px] hover:font-semibold hover:bg-[#F3FFF1] focus:bg-[#BAFFCA] focus:font-semibold lg:block hidden">VIEW ALL</button>
                </div>
            </div>

            <div className="grid grid-flow-row lg:grid-cols-6 md:grid-cols-3 grid-cols-2 pt-5">
                <div><a href="#"><img src=".\src\assets\brand\Squier.jpg" alt="Gakki" className=" lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-10 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src=".\src\assets\brand\yamaha.jpg" alt="Gakki" className=" lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-10 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src=".\src\assets\brand\kurtzman.jpg" alt="Gakki" className=" lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-10 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src=".\src\assets\brand\Ibanez.jpg" alt="Gakki" className=" lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-10 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src=".\src\assets\brand\Fender.jpg" alt="Gakki" className=" lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-10 pl-5 pr-5" /></a></div>
                <div><a href="#"><img src=".\src\assets\brand\Epiphone.jpg" alt="Gakki" className=" lg:pl-5 lg:pr-5 xl:pl-10 xl:pr-10 pl-5 pr-5" /></a></div>
            </div>

            <center>
                <button className="w-[170px] h-[40px] my-5 border border-[#76DC8D] rounded-[7px] hover:font-semibold hover:bg-[#F3FFF1] focus:bg-[#BAFFCA] focus:font-semibold lg:hidden block">VIEW ALL</button>
            </center>

            <hr className="border border-black " />

            <div className="lg:flex justify-around mt-5">
                <center className="text-20 font-bold pt-1 lg:my-auto my-5 w-auto">Tìm theo sản phẩm</center>
                <div className="flex lg:w-[65%]">
                    <center className="w-[33%]"><a href="#"><GiGuitarBassHead className="xl:w-[30%] lg:w-[40%] w-[50%] h-auto"></GiGuitarBassHead></a>
                        <p className="sm:text-16 text-14 ">GUITAR & BASS</p></center>
                    <center className="w-[33%]"><a href="#"><CgPiano className="xl:w-[30%] lg:w-[40%] w-[50%] h-auto"></CgPiano></a>
                        <p className="sm:text-16 text-14 ">KEYBOARD</p></center>
                    <center className="w-[33%]"><a href="#"><GiJackPlug className="xl:w-[30%] lg:w-[40%] w-[50%] h-auto"></GiJackPlug></a>
                        <p className="sm:text-16 text-14 ">PHỤ KIỆN</p></center>
                </div>
            </div>
        </main>
    )
}

export default Brand;