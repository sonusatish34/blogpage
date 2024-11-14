import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaSearch, FaYoutube } from 'react-icons/fa'
import { SiLinkedin } from "react-icons/si";
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import imgs from '../../images/cretafoot_2_11zon-transformed.webp';
import imgs2 from '../../images/EA2u65Ss0VJeJ2l1hfQc7-transformed (1).webp';
import logo2 from '../../images/logo-white.webp';
const a = ['warangal', 'vizag']
function Footer({ locname }) {
    return (
        <div className={`bg-white`}>
            <div className={`${['warangal','vizag'].includes(locname) ? 'hidden' : ''} flex pl-10 py-5 md:justify-between text-white xl:px-28 lg:py-14 flex-wrap bg-[#660066] rounded-md mx-[14px] lg:mx-[58px] my-3 items-center `}>
                <div className=' xl:text-left xl:text-base text-left text-xs font-semibold'>
                    <ul className='lg:gap-x-12 lg:gap-y-3 gap-2 grid lg:grid-cols-3 grid-cols-1 capitalize'>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/gachibowli'}>Self drive car rental in Gachibowli</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/medipally'}>Self drive car rental in Medipally</Link></li>
                        <li className='hover:scale-105 '><Link href={'/self-drive-car-rental/miyapur'}>Self drive car rental in Miyapur</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ramanthapur'}>Self drive car rental in Ramanthapur</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/secunderabad'}>Self drive car rental in Secunderabad</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/shamshabad'}>Self drive car rental in Shamshabad</Link></li>
                        <li className='hover:scale-105'><Link href={'/branches/hyderabad-rental-car'}>Car rental services in Hyderabad</Link></li>
                        <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-kukatpally'}>Car rental services in Kukatpally</Link></li>
                        <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-lbnagar-kothapet'}>Car rental services in LB Nagar</Link></li>
                        <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-madhapur'}>Car rental services in Madhapur</Link></li>
                        <li className='hover:scale-105'> <Link href={'/self-drive-car-rental/dilshuknagar'}>Self drive car rental in Dilshuknagar</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/madhapur'}>Self drive car rental in Madhapur</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/kukatpally'}>Self drive car rental in Kukatapally</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ameerpet'}>Self drive car rental in Ameerpet</Link></li>
                        <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-bengaluru'}>Car rental services in Bangalore</Link></li>
                        <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-warangal'}>Car rental services in Warangal</Link></li>
                        <li className='hover:scale-105'><Link href={'/branches/self-drive-cars-uppal-medipally'}>Car rental services in Uppal Medipally</Link></li>
                        <li className='hover:scale-105'><Link href={'/self-drive-car-rental/ecil'}>Self drive car rental in ECIL</Link></li>

                    </ul>
                </div>
            </div>
            <div style={{ backgroundImage: 'url(/ldcfooter_11zon.webp)' }} className='bg-black text-white bg-contain bg xl:bg-center bg-bottom bg-no-repeat xl:bg-repeat'>
                <footer className=' px-4 lg:py-2 lg:px-4'>
                    <div className="flex flex-wrap lg:flex-row flex-col px-4 justify-between gap-3 b0  z-10 pb-32 lg:pb-48 lg:pt-6 xl:px-14  lg:px-8 xl:pt relative top">
                        <div className='xl:w-3/6 lg:w-2/6'>
                            <div className='flex flex-col p-1 rounded'>
                                <div className='py-4'>
                                    <Image
                                        className="lg:w-72 xl:w-full xl:h-32 lg:20"
                                        src={logo2}
                                        alt="Long Drive Cars app"
                                        width={1000}
                                        height={1000}
                                    // placeholder="blur"
                                    />
                                </div>
                                <p className='xl:text-lg lg:text-base text-xs font-medium lg:font-semibold'>Long Drive cars a leading car rental company offers rental cars for Long Drive in Hyderabad and various other cities. Currently operational in Hyderabad, Warangal and Bangalore, Long Drive cars offer a huge selection of cars ranging from luxury suvs or a sensible sedan.</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-left text-xl font-bold pb-2'>Our Branches</p>
                            <div className=' xl:text-left lg:text-base text-left text-base font-semibold'>
                                <ul className='gap-2 flex flex-col lg:pt-0'>
                                    <li className='lg:hover:scale-105'><Link href={'/'}>Hyderabad</Link></li>
                                    <li className='lg:hover:scale-105'><Link href={'/warangal'}>Warangal</Link></li>
                                    <li className='lg:hover:scale-105'><Link href={'/vizag'} target='_blank'>Vizag</Link></li>
                                    <li className='lg:hover:scale-105'> <Link href={'/'}>Vijayawada</Link></li>
                                    {/* <li className='lg:hover:scale-105'><Link href={'/bangalore'}>Bangalore</Link></li> */}
                                    {/* <li className='lg:hover:scale-105'><Link href={'/mysore'}>Mysore</Link></li> */}
                                    <li className='lg:hover:scale-105'><Link href={'/'}>Mangalore</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className='text-left mb-1 pt-3 lg:pt-0 text-xl font-bold pb-1'>Useful Links</p>
                                <div className='flex flex-col gap-1 '>
                                    <Link href={`${locname}/privacy-policy.html`} target='_blank'>
                                        <p className='hover:text-blue-500 cursor-pointer'>Terms & Conditions</p>
                                    </Link>
                                    <Link href={`${locname}/privacy-policy.html#cancel_refund_policy`} target='_blank'>
                                        <p className='hover:text-blue-500 cursor-pointer'>Refund & Cancelation Policy</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='pt-3'>
                                <p className='text-left mb-1 pt-4 lg:pt-0 text-xl font-bold pb-4 '>Social Media Links</p>
                                <div className='flex gap-5'>
                                    <Link href={'https://www.facebook.com/selfdrivecarsbylongdrivecars/'} target='_blank'>
                                        <p className='hover:text-blue-500 cursor-pointer'><FaFacebook className='lg:size-8 size-9' /></p>
                                    </Link>
                                    <Link href={'https://www.instagram.com/longdrivecars_official/'} target='_blank'>
                                        <p className='hover:text-[#f77737] cursor-pointer'><FaInstagram className='lg:size-8 size-9' /></p>
                                    </Link>
                                    <Link href={'https://in.linkedin.com/company/long-drive-cars'} target='_blank'>
                                        <p className='hover:text-blue-500 cursor-pointer'><SiLinkedin className='lg:size-8 size-9' /></p>
                                    </Link>
                                    <Link href={'https://www.youtube.com/@longdrivecars_official'} target='_blank'>
                                        <p className='hover:text-blue-500 cursor-pointer'><FaYoutube className='lg:size-8 size-9' /></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className='text-left mb-1 text-xl font-bold py-4 lg:py-0'>Contact Info</p>
                                <div className='flex md:flex-col flex-row text-left text-lg gap-4 pb-4'>
                                    <div className='flex justify-center items-center pt-2'>
                                        <ul>
                                            <li className='text-base'>Telangana, AP</li>
                                            <li className='text-base mxs:text-lg lg:text-2xl font-bold'><Link href="tel:9000478478" target='_blank'>9000-478-478</Link></li>
                                        </ul>
                                    </div>
                                    <div className='flex items-center'>
                                        <ul>
                                            <li className='text-base'>Bangalore</li>
                                            <li className='text-base mxs:text-lg lg:text-2xl font-bold'><Link href="tel:9129122525" target='_blank'>912-912-2525</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='font-bold text-xl'>Head Office</p>
                                <p className='font-bold text-lg text-blue-500'>Location</p>
                                <p className='w-40 text-xs'>Long Drive Cars, Pillar No 129, Main Road, beside Medipally, Medipally, Hyderabad, Telangana 500098</p>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className='relative lg:bottom-3 top-3 lg:top-7'>
                    <Marquee speed={40} direction='right' className='lg:pt-0'>
                        <div className={'flex gap-24 lg:gap-96 text-xs lg:text-lg '}>
                            <Image
                                src={imgs2}
                                width={1000}
                                height={1000}
                                className='lg:w-[170px] lg:h-28 w-16 h-12 relative bottom-1 lg:bottom-[0.55rem]'
                                alt="Long Drive Cars app"
                            >
                            </Image>
                            <Image
                                src={imgs}
                                width={1000}
                                height={1000}
                                className='lg:w-32 lg:h-28 h-12 w-12 '
                                alt="Long Drive Cars app"
                            >
                            </Image>
                        </div>
                    </Marquee>
                </div>
            </div>
            <div className='bg-black py-1 lg:px-20 text-center text-white lg:text-lg text-xs'>
                <p>© 2024 LDCars India Private Limited. All Rights Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;

