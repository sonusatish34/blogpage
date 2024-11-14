"use client";
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo2 from '../../../public/logos/logo3.webp';
import { LuPhoneCall } from 'react-icons/lu';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { TbPointFilled } from "react-icons/tb";
import Marquee from 'react-fast-marquee';
import { SiLinkedin } from "react-icons/si";

const HamburgerMenu = ({ locname, phoneno }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='fixed lg:relative top-0 left-0 right-0 z-50 bg-white text-black shadow-md '>
      <div className='w-full flex justify-between items-center gap-3 lg:px-14 xl:px-16 px-2'>
        <div className='xl:w-[86%] w-[60%] '>
          <Marquee speed={75} >
            <div className={'flex p-1 text-xs gap-24 lg:text-lg'}>
              {['No Deposit', 'Unlimited Kilometers', 'Neatly Washed Car', 'Choose your Favourite Color Car', 'Check Original Car Photos & Book', 'Choose Your Own Hours 36hr, 50hr', 'Car Starts ₹1488/day, min 24hrs', 'Any Problem 24/7 Service', 'Lowest Price Challenge', 'Baleno, Dzire 1584 per day', 'Just pay 10% Advance & book'].map((text, index) => (
                <p key={index} className='flex items-center gap-1 justify-center'>
                  <TbPointFilled /><span>{text}</span>
                </p>
              ))}
            </div>
          </Marquee>
        </div>
        <ul className='flex lg:gap-6 gap-4 border-l-2 border-l-black lg:w-1/5 lg:pl-4 px-1'>
          {[
            { href: 'https://www.facebook.com/selfdrivecarsbylongdrivecars/', icon: <FaFacebook /> },
            { href: 'https://www.instagram.com/longdrivecars_official/', icon: <FaInstagram /> },
            { href: 'https://in.linkedin.com/company/long-drive-cars', icon: <SiLinkedin /> },
            { href: 'https://www.youtube.com/@longdrivecars_official', icon: <FaYoutube /> },
          ].map(({ href, icon }, index) => (
            <li key={index}>
              <Link href={href} target='_blank'>
                {React.cloneElement(icon, { className: 'hover:text-blue-500 cursor-pointer lg:size-6' })}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex bg-gray-800 justify-between text-white text-base py-2 lg:px-14 xl:px-16 px-2">
        <p className='lg:text-2xl lg:font-bold'>For Booking Help</p>
        <div className="flex items-center gap-1">
          <LuPhoneCall size={20} />
          <div className='lg:text-2xl lg:font-bold'>
            <Link href={`tel:${phoneno?.replace(/-/g, "")}`} target='_blank'>{phoneno}</Link>
          </div>
        </div>
      </div>
      <div>
        <div className='flex cursor-pointer items-center lg:px-14 pl-4 border-8 border-blue-100'>
          <div className='flex items-center lg:gap-6 gap-3 lg:w-fit'>
            <Link href={`${locname?.length ? `/${locname}` : '/'}`} className='flex items-center lg:gap-6 gap-3'>
              <Image
                className="lg:w-32 w-14"
                src="/logos/logo3.webp"
                alt="Long Drive Cars"
                width={500}
                height={500}
              // placeholder="blur"
              />
              <p className='font-semibold text-[#0456e8] text-base xl:text-4xl lg:text-3xl lg:w-[384px] w-48 popins-text'>Long Drive Cars</p>
            </Link>
          </div>
          <div className='lg:w-fit text-black lg:mt-2  xl:pl-56'>
            <div className={`${isOpen ? "hidden" : 'block'} hidden lg:block`}>
              <ul className='font-semibold xl:text-lg lg:text-base flex gap-8 xl:gap-12'>
                <li><Link className='hover:text-blue-400 hover:underline' href={`${locname?.length ? `/${locname}` : '/'}`}>Home</Link></li>
                <li><Link className='hover:text-blue-400 hover:underline' href={`${locname?.length ? `/${locname}` : '/'}`}>Blog</Link></li>
                <li><Link className='hover:text-blue-400 hover:underline' href={`${locname?.length ? `/${locname}/about` : '/about'}`}>About Us</Link></li>
                <li><Link className='hover:text-blue-400 hover:underline' href={`${locname?.length ? `/${locname}/contact.html` : '/contact.html'}`}>Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden block'>
        <button
          ref={buttonRef}
          className="fixed top-[5.5rem] right-5 z-40 text-[#0456e8] flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
          </svg>
        </button>
      </div>
      <nav
        ref={menuRef}
        className={`w-11/12 h-fit absolute top-30 bg-blue-50 rounded-b-md p-2 pt-2 lg:pr-16 left-8 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <Link href={'/'}>
          <div className='flex gap-3 cursor-pointer items-center pl-4 pb-2'>
            <Image
              className="w-10 lg:w-48 lg:h-48"
              src={logo2}
              alt="Long Drive Cars app"
              width={192}
              height={192}
              priority
            />
            <div className='w-48 text-black 2xl:w-full lg:w-96 lg:mt-2'>
              <p className='text-xl font-bold'>
                <span className='text-[#0456e8]'>Long Drive Cars</span>
              </p>
            </div>
          </div>
        </Link>
        <ul className="pl-6 pt-1 pb-1 border-t-2 border-gray-200 font-semibold flex flex-col gap-2 items-start text-black">
          <li className="w-32 text-start"><Link href={'/'}>Home</Link></li>
          <li className="w-32 text-start"><Link href={`${locname?.length ? `/${locname}/contact.html` : '/contact.html'}`}>Contact Us</Link></li>
          <li className="w-32 text-start"><Link href={`${locname?.length ? `/${locname}/about` : '/about'}`}>About Us</Link></li>
          <li className="w-32 text-start"><Link href={''}>Blog</Link></li>
        </ul>
        <div className="flex flex-col border-t-2 text-blue-500 border-gray-200 text-left gap-2 pl-6 pt-4 justify-center">
          <p>For Booking Help Call</p>
          <div className="flex items-center">
            <ul>
              <li>Telangana, AP</li>
              <li className="font-bold text-2xl text-black">
                <Link href="tel:9000478478" target='_blank'>9000-478-478</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <ul>
              <li>Bangalore</li>
              <li className="font-bold text-2xl text-black">912-912-2525</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
