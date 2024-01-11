import React from "react";
import { GiGuitarBassHead, GiJackPlug } from "react-icons/gi";
import { CgPiano } from "react-icons/cg";

import CAS from '../assets/brands/Casio.png';
import E09 from '../assets/brands/Epiphone.png';
import F03 from '../assets/brands/Fender.png';
import HMN from '../assets/brands/Harmony.png';
import I01 from '../assets/brands/Ibanez.png';
import KAP from '../assets/brands/Kapok.png';
import KUR from '../assets/brands/Kurtman.png';
import SQR from '../assets/brands/Squier.png';
import Y01 from '../assets/brands/Yamaha.png';

const brandData = [
    { id: 'CAS', name: 'Casio', image: CAS },
    { id: 'E09', name: 'Epiphone', image: E09 },
    { id: 'F03', name: 'Fender', image: F03 },
    { id: 'HMN', name: 'Harmony', image: HMN },
    { id: 'I01', name: 'Ibanez', image: I01 },
    { id: 'KAP', name: 'Kapok', image: KAP },
    { id: 'KUR', name: 'Kurtman', image: KUR },
    { id: 'SQR', name: 'Squier', image: SQR },
    { id: 'Y01', name: 'Yamaha', image: Y01 }]

function Brand() {
    return (
        <div className="font-nunito text-16 pl-[5%] pr-[5%] py-5">
            <div className="relative mt-10">
                <center className="font-bold uppercase text-[26px]">TÌM THEO THƯƠNG HIỆU</center>
            </div>

            <div className="grid grid-flow-row lg:grid-cols-9 grid-cols-3 pt-5">
                {brandData.map((brand, index) => (
                    <div className="flex justify-center mx-5" key = {index}>
                        <a href={`/products/brand/${brand.id}`}>
                            <img src={brand.image} alt={brand.name} className=""/>
                        </a>
                    </div>
                ))}
            </div>

            <hr className="border border-black " />
        </div>
    )
}

export default Brand;