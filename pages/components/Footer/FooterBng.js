
import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaSearch, FaYoutube } from 'react-icons/fa';
import { SiLinkedin } from "react-icons/si";
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { TbPointFilled } from "react-icons/tb";
import imgs from '../../images/cretafoot_2_11zon-transformed.webp'
import imgs2 from '../../images/EA2u65Ss0VJeJ2l1hfQc7-transformed (1).webp'
import logo2 from '../../images/logo-white.webp';

function Footer({ branch }) {
    return (
        <div className={`bg-white`}>
            <div className='flex pl-10 py-5 md:justify-between text-white xl:px-36 lg:py-14 flex-wrap bg-[#660066] rounded-md mx-[14px] lg:mx-[58px] my-3  lg:px-24'>
                <div className=' xl:text-left lg:text-lg text-left text-xs font-semibold'>
                    <ul className='gap-2 flex flex-col'>
                        <li className='hover:scale-105'><Link href={'/bangalore/self-drive-car-rental/indiranagar'}>Self drive car rental in Indiranagar</Link></li>
                        <li className='hover:scale-105'><Link href={'/bangalore/self-drive-car-rental/whitefield'}>Self drive car rental in Whitefield</Link></li>
                        <li className='hover:scale-105'><Link href={'/bangalore/self-drive-car-rental/electronic_city'}>Self drive car rental in electronic city</Link></li>
                        <li className='hover:scale-105'><Link href={'/bangalore/self-drive-car-rental/hsrlayout'}>Self drive car rental in HSR Layout</Link></li>
                        <li className='hover:scale-105'><Link href={'/bangalore/self-drive-car-rental/jayanagar'}>Self drive car rental in jayanagar</Link></li>

                    </ul>
                </div>
                <div className=' xl:text-left lg:text-lg text-left text-xs font-semibold'>
                    <ul className='gap-2 flex flex-col pt-1 lg:pt-0'>

                        <li className='hover:scale-105'> <Link href={'/bangalore/self-drive-car-rental/koramangala'}>Self drive car rental in koramangala</Link></li>
                        <li className='hover:scale-105'><Link href={'/bangalore/self-drive-car-rental/sarjapur'}>Self drive car rental in Sarjapur</Link></li>
                        <li className='hover:scale-105'> <Link href={'/bangalore/self-drive-car-rental/malleshwaram'}>Self drive car rental in malleshwaram</Link></li>
                        <li className='hover:scale-105'><Link href={'/bangalore/self-drive-car-rental/sadashivanagar'}>Self drive car rental in sadashivanagar</Link></li>

                    </ul>
                </div>
            </div>
            <div style={{ backgroundImage: 'url(/ldcfooter_11zon.webp)' }} className='bg-black text-white bg-contain bg xl:bg-center bg-bottom bg-no-repeat xl:bg-repeat'>
                <footer className='py-8 pl-4 lg:py-2 lg:px-4'>
                    <div className="flex flex-wrap lg:flex-row flex-col px-4 justify-between gap-3 b0  z-10 pb-32 lg:pb-48 lg:pt-6 xl:px-14  lg:px-14 xl:pt relative top-">
                        <div className='xl:w-3/6 lg:w-2/6'>
                            <div className='flex flex-col p-1 rounded '>
                                <Image
                                    className="lg:w-72 xl:w-full xl:h-32 lg:20"
                                    src={logo2}
                                    alt="Long Drive Cars app"
                                    width={1000}
                                    height={1000}
                                // placeholder="blur"
                                />
                                <p className='xl:text-lg lg:text-base text-xs font-medium lg:font-semibold'>Long Drive cars a leading car rental company offers rental cars for Long Drive in Hyderabad and various other cities. Currently operational in Hyderabad, Warangal and Bangalore, Long Drive cars offer a huge selection of cars ranging from luxury suvs or a sensible sedan.</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-left text-xl font-bold pb-2'>Our Branches</p>
                            <div className=' xl:text-left lg:text-base text-left text-base font-semibold'>
                                <ul className='gap-2 flex flex-col lg:pt-0'>
                                    <li className='lg:hover:scale-105'><Link href={'/'}>Hyderabad</Link></li>
                                    <li className='lg:hover:scale-105'><Link href={'/warangal'}>Warangal</Link></li>
                                    <li className='lg:hover:scale-105'><Link href={'/vizag'}>Vizag</Link></li>
                                    <li className='lg:hover:scale-105'> <Link href={'/'}>Vijayawada</Link></li>
                                    <li className='lg:hover:scale-105'><Link href={'/bangalore'}>Bangalore</Link></li>
                                    <li className='lg:hover:scale-105'><Link href={'/mysuru'}>Mysuru</Link></li>
                                    <li className='lg:hover:scale-105'><Link href={'/'}>Mangalore</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className='text-left mb-1 pt-3 lg:pt-0 text-xl font-bold pb-1'>Useful Links</p>
                                <div className='flex flex-col gap-1 '>
                                    <Link href={'/bangalore/privacy-policy.html'} target='_blank'>
                                        <p className='hover:text-blue-500 cursor-pointer'>Terms & Conditions</p>
                                    </Link>
                                    <Link href={'/bangalore/privacy-policy.html#cancel_refund_policy'} target='_blank'>
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
                                    <Link href={'https://www.instagram.com/longdrivecars_bangalore/?hl=en/'} target='_blank'>
                                        <p className='hover:text-blue-500 cursor-pointer'><FaInstagram className='lg:size-8 size-9' /></p>
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
                                className='lg:w-36 lg:h-28 w-16 h-12 relative bottom-1 lg:bottom-[0.55rem]'
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

