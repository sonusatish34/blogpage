import { useEffect, useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { TbManualGearbox } from "react-icons/tb";

const LocationFetcher = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lon, setLon] = useState('');
    const [lat, setLat] = useState('');

    const replaceText = (str) => {
        return str?.includes("cdn") ? str : str?.replace('https://ldcars.blr1.', 'https://ldcars.blr1.cdn.');
    };

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = today.getDate() + 1;
    const daynum = today.getDate() + 2;

    const compldate = `${year}-${month}-${day}`;
    const compldateend = `${year}-${month}-${daynum}`;

    useEffect(() => {
        const fetchLocation = () => {
            if (navigator.geolocation) {
                setLoading(true);
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setLat(latitude);
                        setLon(longitude);
                        setLocation({ latitude, longitude });
                        setError(null);
                    },
                    (err) => {
                        setError(err.message);
                        setLoading(false);
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
                setLoading(false);
            }
        };

        fetchLocation();
    }, []); // Fetch location on mount

    useEffect(() => {
        if (!location) return;

        const fetchData = async () => {
            setLoading(true);
            const myHeaders = new Headers();
            myHeaders.append("accept", "application/json");

            const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
            };

            try {
                const response = await fetch(`https://api.longdrivecarz.in/user/updated-home?lat=${lat}&long=${lon}&start_date=${compldate}%2000%3A00%3A00&end_date=${compldateend}%2000%3A00%3A00&no_of_days=1&index=0&limit=20`, requestOptions);
                const result = await response.json();
                const realdata = result?.data?.results;
                setData(realdata);
            } catch (error) {
                setError(error.message || 'An error occurred while fetching data.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [location, lat, lon]); // Fetch data when location changes

    const getOrderedImages = (attributes) => {
        const imageMap = {};
        attributes.forEach(attr => {
            imageMap[attr.attribute_name] = attr.car_image_duplicate_copy;
        });

        return [
            imageMap["car_image_front_view"],
            imageMap["car_image_car_right_view"],
            imageMap["car_image_back_inner"],
            imageMap["car_image_back_view"]
        ];
    };

    return (
        <div>
            <div className='pt-32 lg:py-8 flex flex-col lg:flex-row gap-12'>
                {loading && <div className="text-center py-4">
                    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-90">
                        <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
                    </div>
                </div>}
                {error &&
                    <div className='lg:pl-12'>
                        <div className='bg-red-500 text-white w-fit py-4 px-2 mt-11 mx-3 rounded-md '>
                            <p className='underline'>{error}</p>
                            <p className='pt-2'>To enable location services, go to your settings and allow location access your browser.</p>
                        </div>
                    </div>}

                <div className='bg-white'>
                    {!error && <p className='text-center py-5 text-xl font-bold text-black lg:text-3xl lg:pb-8'>Explore Cars Near You in 20 Kms</p>}
                    <div className='flex flex-col gap-x-8 gap-y-12 lg:flex-wrap lg:flex-row lg:pl-36'>
                        {data?.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="bg-white lg:rounded-md shadow-lg flex flex-col w-[100%] md:w-72 h-[450px] lg:hover:scale-105">
                                    <div className="relative h-[450px] lg:rounded-md">
                                        <Slider
                                            dots={false}
                                            infinite={false}
                                            speed={500}
                                            slidesToShow={1}
                                            slidesToScroll={1}
                                            arrows={false}
                                            autoplay={false}
                                            swipe={true}
                                            className="lg:rounded-md kkky overflow-hidden h-[430px]"
                                        >
                                            {getOrderedImages(item?.attributes).map((imageSrc, index) => (
                                                <div key={index} className="h-[430px] flex justify-center items-center">
                                                    <Link href={`${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                                                        <Image
                                                            className='rounded-md h-[430px]'
                                                            width={1000}
                                                            height={1000}
                                                            src={replaceText(imageSrc)}
                                                            alt="Long Drive Cars app"
                                                        />
                                                    </Link>
                                                </div>
                                            ))}
                                        </Slider>

                                        <div>
                                            <div className="relative bottom-[437px] z-20 bg-gradient-to-b from-black opacity-90 lg:rounded-md">
                                                <div className="flex flex-col gap-2 items-end pt-5 pr-5">
                                                    <p className='capitalize p-1 font-bold text-white bg-blue-700 rounded-md z-50 font-manrope text-base px-2'>{item?.maker_model.toLowerCase()}</p>
                                                    <p className='flex justify-center items-center p-1 font-bold z-50 text-sm bg-white text-blue-700 rounded-md '>
                                                        <span>{Math.round((item?.distance) * 100) / 100} km near you</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative z-20 bottom-[12.8rem] bg-gradient-to-t from-black opacity-90 text-white">
                                            <div className="flex gap-2 items-center justify-around pt-5 pr-5 pb-2">
                                                <p className='font-bold text-lg shadow-black'>Book Now</p>
                                                <p className='capitalize p-1 font-bold text-white bg-blue-700 rounded-md z-50 text-base pt-2 px-2 border-[1px] border-white'>₹ {item?.price_24_hours * 24}/day</p>
                                            </div>
                                            <ul className="flex gap-4 justify-center text-xs pt-2 pb-6 font-bold ">
                                                <li className="border-r-2 border-white flex items-center gap-1 pr-2"><BsFillFuelPumpFill className="text-orange-500" /><span>{item?.fuel_type}</span></li>
                                                <li className="border-r-2 border-white flex items-center gap-1 pr-2"><GrGroup className="text-blue-500" /><span>{item?.seater} Seater</span></li>
                                                <li className="flex items-center gap-1"><TbManualGearbox size={20} className="text-red-600" /><span>{item?.transmission_type}</span></li>
                                            </ul>
                                            <div>
                                                <div className="z-20 flex justify-between bg-[##a52a2a]">
                                                    <ul className="flex w-full justify-between ">
                                                        <li className="bg-green-500 w-full p-2 text-center text-white">
                                                            <Link
                                                                href="https://api.whatsapp.com/send?phone=+919000478478&text=Hi%0AI%20am%20looking%20for%20a%farmhouse%20booking."
                                                                target="_blank"
                                                            >
                                                                <p className="flex gap-1 text-sm justify-center">
                                                                    <FaWhatsapp size={20} /> <span>Whatsapp</span>
                                                                </p>
                                                            </Link>
                                                        </li>
                                                        <li className="bg-blue-500 w-full p-2 text-white">
                                                            <Link href="tel:9000478478" target="_blank">
                                                                <p className="flex gap-1 text-sm justify-center">
                                                                    <BiPhoneCall size={20} /> <span>Call Us</span>
                                                                </p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationFetcher;