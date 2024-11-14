
import Image from "next/image";
import { GiTowTruck } from "react-icons/gi";
import { MdOutlineGpsFixed } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { FaGears } from "react-icons/fa6";
import Link from "next/link";

export default function CarFeatures() {
  return (

    <div className="bg-[#334B35]  ">
      <div className=" px-3 py-11 text-Poppins text-center lg:py-[120px] lg:pl-10">
        <button className="bg-[#6D8C54] text-white w-40 h-6 text-xs  lg:w-60 lg:h-10 rounded-full lg:rounded-[5px] lg:text-lg ">
          Car Owner Plus Points
        </button>
      </div>
      <div className=" bg-[#6D8C54] ">
        {/* Main Div */}

        {/* Car Image */}
        <div className="px-8 lg:px-52">
          <Link href='https://youtu.be/DZXivoP2v4k' className="lg:pl-56  cursor-pointer">
            <Image
              src="/slider/youtude.webp"
              width={1500}
              height={1500}
              alt="Long Drive Cars app"
              className="relative  bottom-5 lg:w-[1100px] border-white  border-[2px] lg:bottom-24 "
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 lg:gap-14 pb-8 px-2 lg:px-56">

          <div className="text-[9px] lg:text-2xl rounded-full px-1 py-1 lg:px-2 lg:py-2 bg-[#334B35] flex items-center border-black border-[1px]">
            <div className=" bg-white  rounded-full flex items-center">
              <GiTowTruck className=" text-black  rounded px-1 lg:px-3 lg:size-16" size={30} />
            </div>
            <p className="pl-1 lg:pl-3">Damage Taken Car By Us</p>
          </div>

          <div className="text-[9px] lg:text-2xl rounded-full  bg-[#334B35] px-1 py-1  lg:px-2 lg:py-2 flex items-center border-black border-[1px]">
            <div className="bg-white rounded-full flex items-center">
              <FaGears className="rounded px-1 text-black lg:px-3 lg:size-16" size={30} />
            </div>
            <p className="pl-1 lg:pl-3">Free general service</p>
          </div>

          <div className="text-[9px] lg:text-2xl bg-[#334B35] px-1 py-1 lg:px-2 lg:py-2  rounded-full flex items-center border-black border-[1px]">
            <div className="bg-white rounded-full  flex items-center">
              <MdOutlineGpsFixed className="rounded px-1 text-black lg:px-3 lg:size-16" size={30} />
            </div>
            <p className="pl-1 lg:pl-3">Gps tracking 24/7</p>
          </div>

          <div className="text-[9px] lg:text-2xl bg-[#334B35] px-1 py-1 lg:px-2 lg:py-2 rounded-full flex items-center border-black border-[1px]">
            <div className=" rounded-full   bg-white  flex items-center">
              <IoCarSport className="rounded text-black  px-1 lg:px-3 lg:size-16" size={30} />
            </div>
            <p className=" pl-1 lg:pl-3">20+ Minimum Guaranteed Bookings</p>
          </div>
        </div>
        </div>
        </div>
        );
}
