
import Image from 'next/image';
import Link from 'next/link';
import { IoCallSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="bg-[#2C372E] text-white popins-text p-2 px-3 lg:px-10 lg:p-5 flex justify-between items-center">
      <div className="flex gap-1 items-center">
        {/* Replace '/logo.jpg' with the path to your logo */}
        <Image src="/logos/logo3.webp" alt="Logo" width={500} height={500} className="w-14 lg:w-24" />
        <div className='flex flex-col lg:flex-row lg:space-x-1'>
          <p className="font-semibold text-xs lg:text-2xl">Long Drive Cars</p>
          <p className="font-semibold text-xs lg:text-2xl">Attachment</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-[10px] py-1 lg:text-[16px] lg:pl-11 pl-2">For Attachment Help</p>
        <div className="flex gap-1 lg:gap-2 items-center">
          <IoCallSharp className="h-4 w-4 text-white lg:h-6 lg:w-6" />
          {/* Alternatively, you can use a simple <button> for testing: */}
          <Link href="tel:9888988828" className="text-xs font-bold lg:text-2xl  text-white ">
            9888-9888-28
          </Link>
        </div>
      </div>
    </nav>
  );
}


