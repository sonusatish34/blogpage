import React from 'react'
import apple from '../../images/apple.webp'
import google from '../../images/ggle.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import swift from '../../changeimg/swift.webp'
import ertiga from '../../changeimg/ERTIGA_RED.webp'
import creta from '../../changeimg/creta.webp'
import baleno from '../../changeimg/baleno.webp'
import inv from '../../changeimg/innova.webp'
import Image from 'next/image';
import Link from 'next/link';
var settings = {
  infinite: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  arrows: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  speed: 1000,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnFocus: true,
        infinite: true,
        autoplay: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: true,
        autoplay: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        pauseOnFocus: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // rows: 2,
        infinite: true,
        autoplay: true,
        speed: 2000,
        arrows: false

      }
    }
  ]
};

const fddata = [
  {
    carname: "MARUTHI SWIFT",
    src: swift
  },
  {
    carname: "MARUTHI ERTIGA",
    src: ertiga
  },
  {
    carname: "INNOVA CRYSTA",
    src: inv
  },
  {
    carname: "MARUTHI BALENO",
    src: baleno
  },
  {
    carname: "HYUNDAI CRETA",
    src: creta
  },
]

function FeaturedCars({ data, branch }) {
  return (
    <div className='feature-cars bg  text-black px-7 py-6 h-[655px] bg-gray-800 '>
      <p className='text-center lg:text-4xl text-2xl font-semibold lg:py-8 py-4 text-white'>Check Out Our Featured Cars</p>
      <div className="slider-container h-[600px] ">
        <Slider {...settings}>
          {
            data?.map((item, index) => (
              fddata?.map((inside, index) => (
                (item?.maker_model === inside.carname) ?
                  <div key={index} className=' '>
                    {(item.maker_model == inside.carname) && <div
                      key={index}
                      className={`pt-3 flex flex-col text-black w-[250px] mxs:w-[270px] rounded-md`}
                    >
                      <div className='relative border-2 border-[#660066]-200 bg-white rounded-md'>
                        <p className='bg-[#660066] text-white rounded-t-md pl-5'>Make Year {item?.manufacture_date}</p>
                        <Link href={`${branch!=='warangal'?((((branch?.length ? branch : '') + "/car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')):'/'}`}>
                          <Image
                            src={(inside.src)}
                            alt="Long Drive Cars app"
                            width={1000}
                            height={1000}
                            className='w-[250px] h-[150px] '
                          />
                        </Link>
                        <div className={`flex flex-col gap-3 text-center $`}>
                        </div>
                        <div
                          className={` flex flex-col justify-center   text-black`}
                        >
                          <div className="flex items-center gap-3 justify-around  text-black font-normal text-base px-3">
                            <div className="flex items-center">
                              <BsFuelPump size={15} className="mr-1" />
                              <span>{item?.fuel_type}</span>
                            </div>
                            <div className="flex items-center">
                              <TbManualGearbox size={15} className="mr-1" />
                              <span>{item?.transmission_type}</span>
                            </div>
                            <div className="flex items-center">
                              <MdOutlineAirlineSeatReclineExtra size={15} className="mr-1" />
                              <span>{item?.seater}</span>
                            </div>
                          </div>
                          <div>
                          </div>
                          <p className='text-left text-lg pt-2 font-bold px-3 border-t-2 border-b-2 border-gray-200'>{item?.maker_model}</p>
                          <div className='flex flex-col gap-1'>
                            <p className='flex justify-between px-4 font-semibold'><span>24hrs</span><span>₹ {item?.price_24_hours * 24}</span></p>
                            <p className='flex justify-between px-4 text-sm'><span>4 days</span><span>₹ {item?.price_24_hours * 24 * 4}</span></p>
                            <p className='flex justify-between px-4 text-sm pb-2'><span>10 days</span><span>₹ {item?.price_24_hours * 24 * 10}</span></p>
                          </div>
                          <div className="flex items-center justify-center gap-4 pt-1 border-t-2 border-gray-200">
                            <Link href={'https://apps.apple.com/in/app/long-drive-cars/id6466695391'}>
                              <Image
                                height={500}
                                width={500}
                                alt='apple'
                                className='w-24 h-11'
                                src={apple}
                              >
                              </Image>
                            </Link>
                            <Link href='https://play.google.com/store/search?q=long+drive+cars&c=apps'>
                              <Image
                                height={500}
                                width={500}
                                alt='google'
                                className='w-28 h-16'
                                src={google}
                              >
                              </Image>
                            </Link>
                          </div>

                        </div>
                      </div>
                    </div>}
                  </div> : null
              ))
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default FeaturedCars