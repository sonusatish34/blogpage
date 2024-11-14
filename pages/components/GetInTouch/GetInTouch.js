import React from 'react'
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
function GetInTouch({city,phoneno}) {
  return (
    <div className='flex p-5 justify-around xl:justify-between lg:p-8 flex-wrap bg-[#660066] rounded-md text-white mx-[14px] lg:mx-[58px] xl:mx-[78px] my-3 items-center font-sans'>
        <div className='xl:w-5/12 xl:text-left w-full text-center lg:w-2/5 xl:text-4xl lg:text-2xl text-lg  lg:p-4 lg:pl-14 font-semibold'>
          Get in touch with us to arrange your booking
        </div>
        <div className='flex flex-col pt-4 lg:pr-16 items-center justify-start gap-2 text-sm lg:p-4 font-semibold cursor-pointer pr-'>
          <p>CONTACT US NOW</p>
          <div className='flex justify-around gap-3 pb-2 text-white'>
            <button className='bg-green-500  rounded-full p-2 '>
              <Link href={`https://api.whatsapp.com/send?phone=+91${phoneno}text=Hi%0AI%20am%20looking%20for%20a%20car%20booking`} target='_blank'>
                <p className=' flex items-center justify-center gap-1 text-sm text-white'><span><FaWhatsapp size={30} /></span> <span>Whatsapp</span></p>
              </Link>
            </button>
            <button className='bg-blue-500 rounded-full p-2'>
              <Link href={`tel:${phoneno}`}  target='_blank'>

                <p className='flex items-center justify-center gap-1 text-sm'><span><BiPhoneCall size={30} /></span> <span>Call Us</span></p>
              </Link>
            </button>
          </div>
        </div>
      </div>
  )
}

export default GetInTouch