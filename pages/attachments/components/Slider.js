


"use client";
import React from 'react';
import Image from 'next/image';
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";

const CarImages = () => {
  return (
    <div className=" bg-[#334B35] p-4 lg:p-12 ">
      <div className='flex justify-center py-3 lg:py-8 '>
        <div className="bg-[#6D8C54] text-xs lg:text-lg px-3 py-1 w-fit text-white  text-center  rounded-[5px]  ">
          Monthly Fixed Payment Car
        </div>
      </div>

      <div className=' bg-white rounded-[8px] px-4 py-5 lg:p-14 lg:px-16 lg:py-12' >
        <div className="flex flex-col  lg:flex-row-reverse lg:justify-between lg:px-16   ">
          <Image
            src='https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/60000/InnovaCrysta.webp'
            alt="Long Drive Cars app"
            width={500}
            height={500}
            className="px-2 py-2 " />

          <div className="px-2 space-y-2 lg:space-y-6  ">
            <p className="font-bold text-black lg:text-5xl text-xl">Innova Crysta</p>
            <div>
              <p className="text-black font-semibold text-base lg:text-3xl">Monthly Fixed Payment</p>
            </div>

            <div className="flex items-center   px-1 py-1 lg:text-5xl text-xl text-white ">
              <FaIndianRupeeSign  className="text-[#334B35]  lg:size-10 " size={20} />

              <p className="text-[#334B35] font-bold" >50,000/</p>
            </div>

            <div className="flex items-center rounded-full bg-[#334B35] border-black border-[1px] px-1 py-1 lg:px-2 lg:py-2 lg:text-2xl text-xs text-white w-fit">
              <RiArrowRightDoubleLine className="text-black rounded-full mr-1 lg:size-8  bg-white" size={20} />
              <p>2020 Above model Only</p>
            </div>
            <div className="flex items-center rounded-full bg-[#334B35] border-black border-[1px] px-1 py-1 lg:px-2 lg:py-2 lg:text-2xl text-xs text-white w-fit">
              <RiArrowRightDoubleLine className="text-black rounded-full mr-1 lg:size-8  bg-white" size={20} />
              <p>White number plate accepted</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarImages;


