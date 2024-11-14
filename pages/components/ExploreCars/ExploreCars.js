import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsFuelPump } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { FaExchangeAlt } from "react-icons/fa";
import Link from 'next/link';
import disc from '../../images/discoutn.webp'
// import disc from '../../images/discoutn.webp'
import { FaSearch } from 'react-icons/fa';
import StaticData from '../../components/StaticData/StaticData'
import { useMemo } from "react";
import img2 from '../../changeimg/innova.webp'
import img3 from '../../changeimg/polo.webp'
import img4 from '../../changeimg/swift.webp'
import img5 from '../../changeimg/i20.webp'
import HamburgerMenu from "../Hamburger/HamburgerMenu";
export default function ExploreCars({ loc,phoneno }) {
    // console.log(loc,"loccc");

    const [locationG, setLocationG] = useState('')
    const [carData, setCarData] = useState('')

    useEffect(() => {
        setLocationG(loc)
        async function fetchCarDetails() {
            try {
                const response = await fetch(`https://longdrivecarz.in/site/cars-info?location=${locationG}`);
                const items = await response.json();
                const cars = items?.data?.results;
                setCarData(cars);
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        }
        fetchCarDetails();
    }, [locationG]);

    const [searchQuery, setSearchQuery] = useState('');

    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedSeater, setSelectedSeater] = useState('');
    const [selectedFuelType, setSelectedFuelType] = useState('');
    const [selectedTransType, setSelectedTransType] = useState('');
    const [priceRanges, setPriceRanges] = useState({
        '1000-2000': false,
        '2000-3000': false,
    });

    const replaceText = (str) => {
        if (str?.includes("cdn"))
            return str;
        else {
            return str?.replace('https://ldcars.blr1.', 'https://ldcars.blr1.cdn.');
        }
    };

    const handlePriceRangeChange = (e) => {
        const { value, checked } = e.target;
        setPriceRanges(prev => ({ ...prev, [value]: checked }));
    };

    const uniqueBrands = ["maruthi", "kia", "hyundai", "tata", "mahindra", "honda", "mg"]
    const uniqueFuelTypes = ["petrol", "diesel"]
    const uniqueSeaters = ["5", "7"];
    const uniqueTrasmission = ["manual", "automatic"];

    const filteredData = useMemo(() => {
        if (!Array.isArray(carData)) return [];

        return carData.filter(item => {
            if (!item) return false;

            const matchesBrand = selectedBrand ? item.maker_model.toLowerCase().includes(selectedBrand.toLowerCase()) : true;
            const matchesSeater = selectedSeater ? item.seater === selectedSeater : true;
            const matchesFuelType = selectedFuelType ? item.fuel_type.toLowerCase() === selectedFuelType.toLowerCase() : true;
            const matchesTransType = selectedTransType ? item.transmission_type.toLowerCase() === selectedTransType.toLowerCase() : true;
            const matchesSearch = item.maker_model.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesBrand && matchesSeater && matchesFuelType && matchesSearch && matchesTransType;
        });
    }, [carData, searchQuery, selectedBrand, selectedSeater, selectedFuelType, selectedTransType]);

    const sortedData = filteredData?.sort((a, b) => a.price_24_hours - b.price_24_hours);

    const clearFilters = () => {
        setSelectedBrand('');
        setSelectedSeater('');
        setSelectedFuelType('');
        setSelectedTransType('');
        setSearchQuery('');
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        img2, img3, img4, img5
    ];
    const imgalt = [
        "self drive car rental Innova", "cars for rent polo", "car rentals near me swift", "rent a car for self drive i20"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    const [filter, setFilter] = useState(false);
    function handleFilter() {
        if (filter) {
            setFilter(false);
        }
        else {
            setFilter(true);
        }
    }
    const blockd = "block";
    const hiddend = "hidden";
    return (
        <div>
            <div className="produvt-page flex flex-col lg:flex-row gap-10 bg-slate-100 font-sans">
                <div className='lg:pt-12 pt-40 bg-white'>
                    <div className="text-black-400 lg:px-20  text-black pl-10 pt-4">
                        <div>
                            <div className="image-container block lg:h-[140px] w-[180px] aspect-w-1 aspect-h-1  xs:h-[112px]">
                                <Image
                                    // priority
                                    src={images[currentIndex]}
                                    alt="Long Drive Cars app"
                                    title={imgalt[currentIndex]}
                                    height={600}
                                    width={600}
                                    layout='responsive'
                                    loading="lazy" />
                            </div>
                        </div>
                        <div className='lg:flex lg:flex-col capitalize gap-6 mb-6 lg:pt-2 pt-2 w-64 hidden'>
                            <div className="flex gap-6">
                                <p onClick={handleFilter} className="text-black text-2xl font-bold">Filters</p>
                                <button className="text-xs opacity-85" onClick={clearFilters}>Clear all </button>
                            </div>
                            <div>
                                <label className='font-semibold text-lg w-full'>Brand</label>
                                <div className='flex flex-wrap lg:flex-col w-64 overflow-hidden capitalize gap-1'>
                                    {uniqueBrands.map(brand => (
                                        <label key={brand} className='flex items-center flex-wrap lg:w-full'>
                                            <input
                                                type='checkbox'
                                                name='brand'
                                                value={brand}
                                                checked={selectedBrand === brand}
                                                onChange={() => setSelectedBrand(brand)}
                                                className='mr-2'
                                            />
                                            {brand}
                                        </label>
                                    ))}
                                </div>

                                <div className='flex lg:flex-col flex-wrap gap-2'>
                                    <label className='font-semibold text-lg w-full'>Seater</label>
                                    {uniqueSeaters.map(seater => (
                                        <label key={seater} className='flex items-center'>
                                            <input
                                                type='checkbox'
                                                name='seater'
                                                value={seater}
                                                checked={selectedSeater === seater}
                                                onChange={() => setSelectedSeater(seater)}
                                                className='mr-2'
                                            />
                                            {seater}
                                        </label>
                                    ))}
                                </div>
                                <div className='flex lg:flex-col flex-wrap gap-2'>
                                    <label className='font-semibold text-lg w-full'>Fuel Type</label>
                                    {uniqueFuelTypes.map(fuelType => (
                                        <label key={fuelType} className='flex items-center'>
                                            <input
                                                type='checkbox'
                                                name='fuelType'
                                                value={fuelType}
                                                checked={selectedFuelType === fuelType}
                                                onChange={() => setSelectedFuelType(fuelType)}
                                                className='mr-2'
                                            />
                                            {fuelType}
                                        </label>
                                    ))}
                                </div>
                                <div className='flex lg:flex-col flex-wrap gap-2'>
                                    <label className='font-semibold text-lg w-full'>Transmission Type</label>
                                    {uniqueTrasmission.map(TransType => (
                                        <label key={TransType} className='flex items-center'>
                                            <input
                                                type='checkbox'
                                                name='TransType'
                                                value={TransType}
                                                checked={selectedTransType === TransType}
                                                onChange={() => setSelectedTransType(TransType)}
                                                className='mr-2'
                                            />
                                            {TransType}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col capitalize gap-6 mb-6 lg:pt-2 pt-2 w-64 lg:hidden`}>
                            <div className="flex gap-6">
                                <p onClick={handleFilter} className="text-black text-lg font-bold flex gap-2 items-center border-2 border-orange-400 p-2 rounded-md"><span><FaExchangeAlt /></span><span>Filters</span> </p>
                                <button className={`${filter ? blockd : hiddend} text-xs opacity-85`} onClick={clearFilters}>Clear all </button>
                            </div>
                            <div className={`${filter ? blockd : hiddend} text-sm flex flex-col gap-2`}>
                                <div className='flex flex-wrap lg:flex-col gap-2 w-64 overflow-hidden capitalize'>
                                    <label className='font-semibold  w-full'>Brand</label>
                                    {uniqueBrands.map(brand => (
                                        <label key={brand} className='flex items-center border-[1px] border-gray-400 text-gray-600 rounded-md p-1'>
                                            <input
                                                type='checkbox'
                                                name='brand'
                                                value={brand}
                                                checked={selectedBrand === brand}
                                                onChange={() => setSelectedBrand(brand)}
                                                className='mr-2'
                                            />
                                            {brand}
                                        </label>
                                    ))}
                                </div>

                                <div className='flex lg:flex-col flex-wrap gap-2'>
                                    <label className='font-semibold  w-full'>Seater</label>
                                    {uniqueSeaters.map(seater => (
                                        <label key={seater} className='flex items-center border-[1px] border-gray-400 text-gray-600 rounded-md p-1'>
                                            <input
                                                type='checkbox'
                                                name='seater'
                                                value={seater}
                                                checked={selectedSeater === seater}
                                                onChange={() => setSelectedSeater(seater)}
                                                className='mr-2'
                                            />
                                            {seater}
                                        </label>
                                    ))}
                                </div>
                                <div className='flex lg:flex-col flex-wrap gap-2'>
                                    <label className='font-semibold  w-full'>Fuel Type</label>
                                    {uniqueFuelTypes.map(fuelType => (
                                        <label key={fuelType} className='flex items-center border-[1px] border-gray-400 text-gray-600 rounded-md p-1'>
                                            <input
                                                type='checkbox'
                                                name='fuelType'
                                                value={fuelType}
                                                checked={selectedFuelType === fuelType}
                                                onChange={() => setSelectedFuelType(fuelType)}
                                                className='mr-2'
                                            />
                                            {fuelType}
                                        </label>
                                    ))}
                                </div>
                                <div className='flex lg:flex-col flex-wrap gap-2'>
                                    <label className='font-semibold w-full'>Transmission Type</label>
                                    {uniqueTrasmission.map(TransType => (
                                        <label key={TransType} className='flex items-center border-[1px] border-gray-400 text-gray-600 rounded-md p-1'>
                                            <input
                                                type='checkbox'
                                                name='TransType'
                                                value={TransType}
                                                checked={selectedTransType === TransType}
                                                onChange={() => setSelectedTransType(TransType)}
                                                className='mr-2'
                                            />
                                            {TransType}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full'>
                    <p id='explore' className="px-3 font-bold text-2xl lg:text-3xl pt-8 text-blue-950 mb-2 xl:text-5xl lg:mb-9 text-center">Explore Self Drive
                        Car Rentals</p>
                    <div className=' lg:mb-16 pl-3 flex items-center justify-center pt-2 pb-12'>
                        <input
                            placeholder='Search for your favourite car'
                            className=' text-black px-4 py-3 rounded-full bg-gray-200 w-full  md:max-w-96 lg:max-w-2xl'
                            type='search'
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                        <FaSearch size={25} className='text-blue-500 relative right-14 lg:right-20 md:right-14' />
                    </div>
                    <div className="lg:grid xl:grid-cols-3 lg:grid-cols-2 gap-x-8 gap-y-8 flex flex-col gap-2 items-center justify-center lg:max-w-7xl py-4">
                        {filteredData?.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] md:w-64 h-[500px] lg:hover:scale-105">
                                    <div className="relative h-80">
                                        <Link href={`${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                                            <Image
                                                src={replaceText(item?.car_image_front_view)}
                                                alt={StaticData(String(item?.maker_model.toLowerCase())) + String(item?.maker_model.toLowerCase())}
                                                title={StaticData(String(item?.maker_model.toLowerCase())) + String(item?.maker_model.toLowerCase())}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-t-lg relative"
                                                // priority
                                                loading='lazy'
                                            />
                                        </Link>
                                    </div>

                                    <div className="pt-4 flex flex-col gap-4">
                                        <div className='flex items-baseline justify-between px-2'>
                                            <Link href={`${(("car-rental/" + item.maker_model).toLowerCase()).replace(/ /g, '-')}`}>
                                                <p className="text-gray-700 cursor-pointer font-sans font-semibold text-[10px] hover:text-red-600 w-fit">{item.maker_model}</p>
                                            </Link>
                                            <p className="text-blue-500 font-bold text-xs">₹ {item.price_24_hours * 24}/day</p>
                                        </div>
                                        <div className="flex items-center justify-around border-b border-gray-300 text-black font-normal text-base px-2">
                                            <div className="flex items-center">
                                                <BsFuelPump size={15} className="mr-1" />
                                                <span>{item.fuel_type}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <TbManualGearbox size={15} className="mr-1" />
                                                <span>{item.transmission_type}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <MdOutlineAirlineSeatReclineExtra size={15} className="mr-1" />
                                                <span>{item.seater}</span>
                                            </div>
                                        </div>
                                        <div className='pt-2'>
                                            <p className='text-black text-lg text-center font-semibold pb-2'>For Booking</p>
                                            <div className="flex justify-around text-white">
                                                <button className='bg-green-500 w-full rounded-bl-md p-2 flex justify-center'>
                                                    <Link href={`https://api.whatsapp.com/send?phone=+91${phoneno}&text=Hi%0AI%20am%20looking%20for%20a%20car%20booking.`} target='_blank'>
                                                        <p className=' flex gap-1 text-lg items-center'><span><FaWhatsapp size={20} /></span> <span>Whatsapp</span></p>
                                                    </Link>
                                                </button>
                                                <button className='bg-blue-500 w-full rounded-br-md p-2 flex justify-center' >
                                                    <Link href={`tel:${phoneno}`} target='_blank'>
                                                        <p className='flex gap-1 text-lg items-center px-1'><span><BiPhoneCall size={20} /></span> <span>Call Us</span></p>
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {(index + 1) % (4) === 0 && (
                                    <div className="bg-[#8d398d] rounded-lg shadow-lg overflow-hidden flex flex-col  xs:w-[90%] justify-center md:w-64 h-[500px]  lg:hover:scale-105">
                                        <div>
                                            <Image
                                                src={disc}
                                                height={1000}
                                                width={1000}
                                                alt='Long Drive Cars app'
                                                className="scale-75"
                                            />
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}