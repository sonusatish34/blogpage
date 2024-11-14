

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaApple } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import Image from 'next/image';

function Footer() {
    return (
        <div className='bg-black flex justify-between p-4 '>
            <div className='lg:w-full'
                // style={{ backgroundImage: "url('/cars/bg-1_11zon.webp')" }} // make sure car.svg is inside the 'public' folder
            >
                <div className=' text-white   lg:p-14'>

                    <footer className=' '>
                        <div className='flex'>
                            <Image src="/logos/logo3.webp" alt="Logo" width={1500} height={1500} className=" w-16 lg:w-24   " />
                            <p className=" font-semibold flex items-center text-base lg:text-xl " >Long Drive Cars Attachment</p>
                        </div>
                        <div className="flex-wrap lg:flex lg:gap-40 gap-2 pt-1 lg:pt-6 text-white     ">

                            {/* About Section */}
                            <div className=' '>

                                <p className=' block font-bold text-lg  py-2  lg:text-2xl  '>About Long Drive Cars</p>
                                <p className='text-sm lg:leading-7  lg:w-96  lg:text-[20px] lg:pt-4 '>Long drive cars a leading car rental company offers rental cars for self drive in Hyderabad and various other cities. Currently operational in Hyderabad, Warangal and Bangalore, Long drive cars offer a huge selection of cars ranging from luxury suvs or a sensible sedan</p>
                            </div>

                            {/* Contact Info Section */}
                            <div className=''>
                                <p className=' font-bold text-lg py-2 lg:text-2xl '>Contact Info</p>

                                <div className='text-sm lg:text-[20px] '>
                                    <p className='lg:py-2 lg:leading-8 lg:pt-4 lg:w-80'>
                                        Pillar No 129, Main Road, beside Medipally, Medipally, Hyderabad,
                                        Telangana 500098
                                    </p>

                                    <div className="py-3">
                                        <Link href="tel:9888988828" className='pb-2 text-3xl lg:py-6'>
                                            9888-9888-28
                                        </Link>
                                    </div>

                                    <p className='text-lg'>
                                        <Link href="mailto:support@longdrivecars.com" className='text-lg'>
                                            support@longdrivecars.com
                                        </Link>
                                    </p>
                                </div>

                            </div>

                            {/* Social Links & App Store Buttons */}
                            <div className='pt-5  '>
                                {/* <p className=' block font-bold text-[8px] py-2 lg:text-[16px]'>Social Network</p> */}

                                <ul className='flex flex-row  justify-center gap-7 py-3 lg:gap-9 lg:pt-12'>
                                    <li>
                                        {/* Social Links */}
                                        <Link href='https://www.facebook.com/selfdrivecarsbylongdrivecars' target='_blank'>
                                            <p className='hover:text-blue-500  cursor-pointer  '><FaFacebook className=' size-8 lg:size-12 ' /></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://www.instagram.com/longdrivecars_official/' target='_blank'>
                                            <p className='hover:text-blue-500 cursor-pointer'><FaInstagram className='lg:size-12 size-8 ' /></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://in.linkedin.com/company/long-drive-cars' target='_blank'>
                                            <p className='hover:text-blue-500 cursor-pointer'><SiLinkedin className='lg:size-12 size-8  ' /></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='https://youtu.be/DZXivoP2v4k' target='_blank'>
                                            <p className='hover:text-blue-500 cursor-pointer'><FaYoutube className='lg:size-12 size-8 ' /></p>
                                        </Link>
                                    </li>
                                </ul>

                                {/* App Store Buttons */}

                                <div className="flex  justify-center  gap-2 lg:pr-8 p-3  lg:gap-3 lg:pt-8">

                                    <Link href='https://play.google.com/store/apps/details?id=com.long_drive_cars.owner_app' type="button" className="cursor-pointer">


                                        <Image
                                            src="/Banner/Googleplay.webp"
                                            alt="Google Play Store"
                                            width={500}
                                            height={500}
                                            className='relative w-24 lg:w-28  '
                                        />
                                    </Link>

                                    <Link href='https://apps.apple.com/in/app/owner-app-long-drive-cars/id6476489838' className="cursor-pointer">
                                        <Image
                                            src="/Banner/Appstore.webp"
                                            alt="Apple App Store"
                                            width={500}
                                            height={500}
                                            className='relative  w-24 lg:w-28 top-[5px] lg:top-[6px] '
                                        />
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Footer;
