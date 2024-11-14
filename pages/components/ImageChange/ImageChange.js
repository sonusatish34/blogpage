import React from 'react';
import Image from 'next/image';
import homebanner from '../../images/homebanner.webp'
import apple from '../../images/apple.webp'
import google from '../../images/ggle.webp'
import Link from 'next/link';
import { FaRegClock } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { SlSpeedometer } from "react-icons/sl";
import { GiTowTruck } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { SiContactlesspayment } from "react-icons/si";
import { FaCarSide } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";

const ImageChange = ({ locname }) => {

  return (
    <div className='xl:mt-0 lg:mt-0 xl:pl-16 lg:pl-4 px-2 py-2 pb-10'>
      <div className='bg-white'>
        <div className='lg:flex lg:flex-row-reverse flex flex-col justify-center items-center lg:px-6 xl:px-0'>
          <Image
            src={homebanner}
            alt="Long Drive Cars app"
            height={1000}
            width={1000}
            className='xl:w-[500px] lg:w-[350px] w-[300px]'
            priority
          />
          <div className="lg:text-left xl:pl-0 lg:pl-4 text-black font-[500] xl:text-base text-xl lg:pt-10 pt-3">
            <p className='xl:text-3xl lg:text-2xl text-xl text-center lg:text-left  font-bold  lg:w-2/3'>Install Long Drive Cars Mobile app &
              Start Your Journey!</p>
            <div className='flex flex-wrap justify-center lg:justify-normal lg:gap-8 pt-2 gap-2 lg:w-full text-sm md:text-xs xl:text-base'> 
              <div className="flex gap-2 py-2 justify-center lg:justify-normal items-center">
                <Link href={'https://apps.apple.com/in/app/long-drive-cars/id6466695391'}>
                  <Image
                    height={500}
                    width={500}
                    alt="apple"
                    className="lg:w-40 lg:h-14 w-28 h-11 lg:hover:scale-105"
                    src={apple} 
                    priority={true} 
                  />
                </Link>
                <Link href="https://play.google.com/store/search?q=long+drive+cars&c=apps">
                  <Image
                    height={500}
                    width={500}
                    alt="google"
                    className="lg:w-48 lg:h-20 w-32 h-16 lg:hover:scale-105"
                    src={google}
                    priority={true} 
                  />
                </Link>
              </div>

              <div>
                <div className="flex gap-4  pt-4 pr-4  text-xs font-medium lg:text-sm  lg:w-[90%] flex-wrap text-white">
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <FaRegClock className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="">Choose Your Own Hours</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <GiTowTruck className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className=" ml-2">24/7 Breakdown Service</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <SlSpeedometer className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className=" ml-2">Unlimited Kilometers</p>
                  </div>
                  {(locname !== 'bangalore') ? <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <RiMoneyRupeeCircleFill className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2 ">No Deposit</p>
                  </div> : null}

                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <FaCar className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Check Original Car Photo</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <FaCarSide className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Car Starts at {(locname !== 'bangalore') ? '₹ 1488/day' : '₹1848/Day'}</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <IoMdArrowDropdownCircle className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Lowest Price Challenge</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <IoCarSportSharp className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Swift Dzire {(locname !== 'bangalore') ? '1584' : '2280'} per Day</p>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#660066] xl:text-base lg:text-xs text-sm  border-[1px] border-black lg:rounded-full rounded-md lg:hover:scale-105 xl:w-[330px] lg:w-[250px]  w-full">
                    <SiContactlesspayment className="bg-white text-black lg:rounded-full rounded-md p-1" size={40} />
                    <p className="ml-2">Just pay 10% Advance & book</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageChange;
