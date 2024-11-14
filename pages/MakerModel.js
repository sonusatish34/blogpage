import { useRouter } from 'next/router';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { useEffect, useState } from 'react';
import customData from './components/kk.json';
import { PiCarFill } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { Ri24HoursLine } from "react-icons/ri";
import { GiTowTruck } from "react-icons/gi";
import { HiCurrencyRupee } from "react-icons/hi";
import Head from 'next/head';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarDetails = ({ city, phoneno }) => {
  const [caritem, setCarItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { maker_model } = router.query;
  const mdyfmaker_model = maker_model?.includes('presso')?'maruthi s - presso': maker_model?.toLowerCase().replace(/-/g, " ").replace("car-rental/", "");  
  // const mdyfmaker_model = maker_model?.toLowerCase().replace(/-/g, " ").replace("car-rental/", "");
  useEffect(() => {
    async function fetchCarDetails() {
      setLoading(true);
      try {
        const response = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=${city}`);
        const items = await response.json();
        const cars = items?.data?.results;
        const car = cars?.find(i => i?.maker_model.toLowerCase() == mdyfmaker_model);
        setCarItem(car);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    if (maker_model) {
      fetchCarDetails();
    }
  }, [maker_model]);
  const replaceText = (str) => {
    if (str?.includes("cdn"))
      return str;
    else {
      return str?.replace('https://ldcars.blr1.', 'https://ldcars.blr1.cdn.');
    }
  };

  return (
    <div className='bg-white text-black'>
      <Head>
        <title>No Deposit & Unlimited km - Self-Drive Car Rentals In {city}</title>
        <meta name="description" content="Self-drive cars start at 62/hr, We offer Self Drive Cars for the best prices with unlimited km & No Deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="No Deposit & Unlimited km - Self-Drive Car Rentals In {city}" />
        <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Self Drive Cars for the best prices with unlimited km & No Deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
        
      </Head>
      <div className='xl:mx-16  mx-4'>
        <div className='flex flex-col mt-[10.2rem] md:mt-20 lg:mt-2 md:flex-row p-2 border-2 border-purple-500 rounded-md'>
          {loading && <div>Loading...</div>}
          {!loading && (
            <div className="relative md:w-2/3 lg:w-1/2  w-full p-1 xl:pt-6 pt-8 border-1 border-gray-300 lg:h-[634px] overflow-hidden">
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                centerMode={true}
                centerPadding={0}
                focusOnSelect={true}
                arrows={false}
                autoplay={true}
                pauseOnFocus={true}
                pauseOnHover={true}
                className="relative bottom-[4.5rem] lg:rounded-md"
              >
                <div>
                  <Image className={'lg:h-[655px] h-[450px]  rounded-md'} width={1000} height={1000} alt="Long Drive Cars app" src={replaceText(caritem?.car_image_car_right_view)}></Image>
                </div>
                <div onClick={() => {
                }}>

                  <Image alt="Long Drive Cars app" className='lg:h-[655px] h-[450px]  rounded-md' width={1000} height={1000} src={replaceText(caritem?.car_image_back_inner)}></Image>

                </div>
                <div>
                  <Image alt="Long Drive Cars app" className='lg:h-[655px] h-[450px]  rounded-md' width={1000} height={1000} src={replaceText(caritem?.car_image_reading_view)}></Image>
                </div>
                <div>
                  <Image alt="Long Drive Cars app" className='lg:h-[655px] h-[450px]  rounded-md' width={1000} height={1000} src={replaceText(caritem?.car_image_back_view)}></Image>
                </div>
              </Slider>
            </div>
          )}
          <div className='flex flex-col justify-evenly'>
            <div>
              <p className='p-1 font-bold  text-3xl lg:pl-20 capitalize'>{mdyfmaker_model}</p>
              <p className='p-1 font-bold md:text-3xl text-xl lg:pl-20'><span className='text-lg'>Starting from</span><span className='text-blue-400'> ₹{caritem?.price_24_hours * 24}/day</span></p>
            </div>
            <div className='pt-6 flex flex-col xs:hidden lg:flex lg:pl-20'>
              <p className='font-semibold text-2xl '>Contact us  by</p>
              <div className='flex justify-start lg:gap-5 xl:gap-8 xl:pt-4 pb-2 gap-6 pt-2 text-white'>
                <button className='bg-green-500 rounded-full p-2 lg:p-3'>
                  <Link href={`https://api.whatsapp.com/send?phone=+91${phoneno}&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking.`} target='_blank'>
                    <p className=' flex items-center gap-1 text-base'><span><FaWhatsapp className='xl:size-6' /></span> <span>Whatsapp</span></p>
                  </Link>
                </button>
                <button className='bg-blue-500 rounded-full p-2 lg:p-3 lg:px-7'>
                  <Link href={`tel:${phoneno}`} target='_blank'>
                    <p className=' flex items-center gap-1 text-base'><span><BiPhoneCall className='xl:size-6' /></span> <span>Call Us</span></p>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-6 lg:hidden'>
          <p className='font-semibold text-2xl'>Contact us by</p>
          <div className='flex justify-start lg:gap-5 xl:gap-8 xl:pt-4 pb-2 gap-6 pt-2 text-white'>
            <button className='bg-green-500 rounded-full p-2 lg:p-3'>
              <Link href={`https://api.whatsapp.com/send?phone=+91${phoneno}&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking.`} target='_blank'>
                <p className=' flex items-center gap-1 text-xl'><span><FaWhatsapp className='xl:size-6' /></span> <span>Whatsapp</span></p>
              </Link>
            </button>
            <button className='bg-blue-500 rounded-full p-2 lg:p-3 lg:px-7'>
              <Link href={`tel:${phoneno}`} target='_blank'>
                <p className=' flex items-center gap-1 text-xl'><span><BiPhoneCall className='xl:size-6' /></span> <span>Call Us</span></p>
              </Link>
            </button>
          </div>
        </div>
        <div className='xl:mx-64  lg:mx-48'>
          <div className='py-4'>
            <div className="flex gap-2 flex-col md:flex-row flex-wrap jus lg:justify-center lg:pt-12 xl:pt-8 pt-4 
                     font-semibold  lg:w-full">
              <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
                <HiCurrencyRupee className="bg-blue-200 rounded-md p-1" size={40} />
                <p className=" ml-2 text-xs">No Deposit</p>
              </div>
              <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
                <SlSpeedometer className="bg-blue-200 rounded-md p-1" size={40} />
                <p className="  ml-2 text-xs">Unlimited Kilometers</p>
              </div>
              <div className="flex items-center gap-1 p-2 bg-[#ffffff] border-[1px] border-black rounded-md">
                <GiTowTruck className="bg-blue-200 rounded px-[4px]" size={40} />
                <p className="  ml-2 text-xs">24/7 Breakdown Service</p>
              </div>

              <div className="flex items-center gap-1 p-2 bg-[#ffffff]  border-[1px] border-black rounded-md">
                <Ri24HoursLine className="bg-blue-200 rounded-md p-1" size={40} />
                <p className="  ml-2 text-xs mt-1">Choose Your Own Hours</p>
              </div>
            </div>
          </div>
          <div className='overview pt-10 lg:text-base py-4'>
            <ul className='my-2 flex flex-wrap justify-center pb-4'>
              <li className='md:w-32 xl:w-40 w-32  flex flex-col justify-center gap-2 items-center border-[1px] border-gray-100 py-2'>
                <BsFuelPump className='text-green-700 md:size-8 xl:size-10 size-6' />
                <p>Fuel Type</p>
                <p className='font-bold '>{caritem?.fuel_type}</p>
              </li>
              <li className='md:w-32 xl:w-40 w-32 flex flex-col justify-center gap-2 items-center border-[1px] border-gray-100 py-2'>
                <PiCarFill className={`text-${caritem?.vehicle_color.toLowerCase()}-400 md:size-8 xl:size-10 size-6`} />
                <p className='text-center'>Vehicle Color</p>
                <p className='font-bold '>{caritem?.vehicle_color}</p>
              </li>
              <li className='md:w-32 xl:w-40 w-32 flex flex-col justify-center gap-2 items-center border-[1px] border-gray-100 py-2 '>
                <MdOutlineAirlineSeatReclineExtra className='text-amber-900 md:size-8 xl:size-10 size-6' />
                <p>Seater</p>
                <p className='font-bold'>{caritem?.seater}</p>
              </li>
              <li className='md:w-32 xl:w-40 w-32 flex flex-col justify-center gap-2 items-center border-[1px] border-gray-100 py-2'>
                <TbManualGearbox className='text-yellow-500 md:size-8 xl:size-10 size-6' />
                <p>Transmission</p>
                <p className='font-bold'>{caritem?.transmission_type}</p>
              </li>
            </ul>
          </div>
          <div className='py-4'>
            <p className='font-bold text-2xl border-l-4 border-red-900 mb-4 pl-2'>Description</p>
            <p className='font-light p-1 text-xs lg:text-base leading-6 '>
              {customData[mdyfmaker_model]?.desc}
            </p>
          </div>
          <p className='font-semibold text-xl py-3'>Why Choose {customData[mdyfmaker_model]?.id} from Self Drive Cars Rental {city}</p>
          <p className='font-light p-1 leading-6 text-xs lg:text-base pb-8'>
            {customData[mdyfmaker_model]?.subdesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;


