import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { TbManualGearbox } from "react-icons/tb";
import Slider from 'react-slick';
import disc from '../images/discoutn.webp'
import discfree from '../images/free.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";




function CarProducts({ data, branch, phoneno, count }) {


  const handleStoreRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirect to App Store if iOS
      window.open('https://apps.apple.com/in/app/long-drive-cars/id6466695391', '_blank');
    } else if (/android/i.test(userAgent)) {
      // Redirect to Play Store if Android
      window.open('https://play.google.com/store/search?q=long+drive+cars&c=apps', '_blank');

    } else {
      // Optional: Provide a message for non-mobile devices
      alert("App is available only on mobile devices.");
    }
  }

  const [visibleItems, setVisibleItems] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');
  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 9);
  };
  const replaceText = (str) => {
    if (str?.includes("cdn"))
      return str;
    else {
      return str?.replace('https://ldcars.blr1.', 'https://ldcars.blr1.cdn.');
    }
  };

  const filteredData = data?.filter(item =>
    item.maker_model.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedData = filteredData?.sort((a, b) => a.price_24_hours - b.price_24_hours);

  // console.log(sortedData);
  return (
    <div className=' bg-white'>
      <p className='text-black xl:text-5xl lg:text-4xl text-lg font-bold text-center py-7 capitalize'>Explore Our Cars in {branch?.length ? branch : 'Hyderabad'}</p>
      <div className=' lg:mb-8 pl-3 flex items-center justify-center pt-2 lg:pb-2'>
        <input
          placeholder='Search for your favourite car'
          className='placeholder-black text-black px-4 py-3 rounded-full bg-gray-200 w-full  md:max-w-96 lg:max-w-2xl'
          type='search'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <FaSearch size={25} className='text-blue-500 relative right-9 lg:right-20 md:right-14' />
      </div>
      <div className="flex flex-wrap gap-x-8  lg:items-start justify-center lg:pl-12 items-center text-white pb-10">

        {filteredData?.slice(0, visibleItems).map((item, index) => (
          <React.Fragment key={index}>
            {<div className=" lg:rounded-md flex flex-col  w-[100%] md:w-72  bg-white lg:hover:scale-105">
              <div className="relative lg:rounded-md h-[560px]">
                <div className="relative z-20 bg-gradient-to-b from-black opacity-90 lg:rounded-md top-[3.5rem]">
                  <div className="flex flex-col gap-2 items-end pt-5 pr-5">
                    <p className='capitalize p-1 font-bold text-white bg-blue-700 rounded-md  z-50 font-manrope text-base pt-2 '>{item?.maker_model.toLowerCase()}</p>
                  </div>
                </div>
                <Slider
                  dots={false}
                  infinite={true}
                  speed={500}
                  slidesToShow={1}
                  slidesToScroll={1}
                  centerMode={true}
                  centerPadding={0}
                  focusOnSelect={true}
                  arrows={false}
                  // autoplay={true}
                  pauseOnFocus={true}
                  pauseOnHover={true}
                  className="relative lg:rounded-md"
                >
                  <div>
                    {
                      <Link href={`${(((branch?.length ? branch : '') + "/car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                        <Image className={' rounded-md h-[500px] object-cover'} width={1000} height={1000} alt="Long Drive Cars app" src={replaceText(item?.car_image_front_view)}></Image>
                      </Link>}
                  </div>
                  <div onClick={() => {
                  }}>
                    <Link href={`${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                      <Image alt="Long Drive Cars app" className=' rounded-md h-[500px] object-cover' width={1000} height={1000} src={replaceText(item?.car_image_back_inner)}></Image>
                    </Link>
                  </div>
                  <div>
                    <Link href={`${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                      <Image alt="Long Drive Cars app" className=' rounded-md h-[500px] object-cover' width={1000} height={1000} src={replaceText(item?.car_image_reading_view)}></Image>
                    </Link>
                  </div>
                  <div>
                    <Link href={`${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                      <Image alt="Long Drive Cars app" className=' rounded-md h-[500px] object-cover' width={1000} height={1000} src={replaceText(item?.car_image_back_view)}></Image>
                    </Link>
                  </div>
                </Slider>
                <div className="relative z-20 bottom-[7.5rem] lg:bottom-[9.1rem] bg-gradient-to-t from-black opacity-90">
                  <div className="flex gap-2 items-center justify-around pt-5 pr-5 pb-2">
                    <p className='font-bold text-lg shadow-black'>Book Now</p>
                    <p className='capitalize p-1 font-bold text-white bg-blue-700 rounded-md  z-50 font-manrope text-base pt-2 px-2 border-[1px] border-white'>₹ {item?.price_24_hours * 24}/day</p>
                  </div>
                  <ul className="flex gap-4 justify-center text-xs pt-2 pb-6 font-bold">
                    <li className="border-r-2 border-white flex items-center gap-1 pr-2"><span><BsFillFuelPumpFill className="text-orange-500" /></span><span>{item?.fuel_type}</span></li>
                    <li className="border-r-2 border-white flex items-center gap-1 pr-2"><span><GrGroup className="text-blue-500" /></span><span>{item?.seater} Seater</span></li>
                    <li className=" flex items-center gap-1"><span><TbManualGearbox size={20} className="text-red-600" /></span><span>{item?.transmission_type}</span></li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="z-20 relative flex flex-col justify-between  text-white bottom-2 lg:bottom-[2.4rem]">
                  <ul className="flex w-full justify-between">
                    <li className="bg-green-500 w-full py-4 lg:py-2 text-center lg:rounded-none">
                      {" "}
                      <Link href={`https://api.whatsapp.com/send?phone=+91${phoneno}&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking.`} target='_blank'>
                        <p className=" flex gap-1 lg:text-sm text-lg justify-center items-center">
                          <span>
                            <FaWhatsapp size={20} />
                          </span>{" "}
                          <span>Whatsapp</span>
                        </p>
                      </Link>
                    </li>
                    <li className="bg-blue-500 w-full py-3 lg:py-2 lg:rounded-none">
                      <Link href={`tel:${phoneno}`} target="_blank">
                        <p className=" flex gap-1 lg:text-sm text-lg justify-center items-center">
                          <span>
                            <BiPhoneCall size={20} />
                          </span>{" "}
                          <span>Call Us</span>
                        </p>
                      </Link>
                    </li>
                  </ul>
                  
              <div onClick={handleStoreRedirect}className="cursor-pointer bg-[#001f3d] py-4 lg:py-2 rounded-b-lg lg:rounded-b-lg  shimmer ">
              <div className="flex justify-around place-items-center   ">
              <span className="flex  "><FaGooglePlay className="lg:size-6" size={25}/> <RxSlash  className="lg:size-5" size={30}/>  <FaAppStoreIos className="lg:size-6" size={25} /></span>
              <p className=" text-center  font-semibold text-2xl lg:text-xl tracking-wide  "> Download App </p>   
              </div>   
              </div>

              </div>
              </div>
            </div>}
            {(index + 1 === 2) && (
              <div className=" pt-14 lg:pt-0">
                <div className="bg-[#8d398d] lg:rounded-md  flex flex-col  w-[100%] md:w-72  lg:hover:scale-105 relative lg:top-14">
                  <div>
                    <Image
                      src={disc}
                      height={1000}
                      width={1000}
                      alt='Long Drive Cars app'
                      className="scale-75 mxs:scale-[0.6] lg:scale-90 relative bottom-[4rem] mxs:bottom-16 md:bottom-0 mxs:bottom- rounded-md  lg:h-[545px]"
                    />
                  </div>
                </div>
              </div>
            )}
            {(index + 1 === 4) && (
              <div className="pt-14 lg:pt-0">
                <div className="bg-[#000000] lg:rounded-md flex flex-col  w-[100%] md:w-72 lg:hover:scale-105 relative lg:top-14">
                  <div>
                    <Image
                      src={discfree}
                      height={1000}
                      width={1000}
                      alt='Long Drive Cars app'
                      className=" rounded-md bg-cover lg:h-[545px] "
                    />
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {
        visibleItems < filteredData?.length && (
          <div className="text-center px-6 pb-10 lg:pb-16">
            <button className="bg-[#4508a6] text-xl font-bold text-white w-full lg:w-96 py-4 rounded-full">
              <Link href={`${branch?.length ? branch : ''}/explore-self-drive-cars`}>View all cars</Link>
            </button>
          </div>
        )
      }
    </div >
  )
}

export default CarProducts;