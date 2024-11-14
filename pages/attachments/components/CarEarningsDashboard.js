


"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { RiArrowRightDoubleLine } from "react-icons/ri";


export default function CarEarningDashboard() {
  const [selectedEarnings, setSelectedEarnings] = useState(14000);
  const [windowWidth, setWindowWidth] = useState(0); // State to track window width
  const [maxVisibleCars, setMaxVisibleCars] = useState(0); // State to track max visible cars based on screen size

  // Update the screen size and calculate the number of cars that can fit based on window width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      // Assume car width is 120px for mobile and 160px for larger screens with margin/padding included
      const carWidth = window.innerWidth <= 768 ? 120 : 160;

      // Calculate how many cars can fit on the screen
      const visibleCars = Math.floor(window.innerWidth / carWidth);
      setMaxVisibleCars(visibleCars);
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Earnings categories
  const divContent = ['14000', '20000', '30000', '40000', '60000', '100000'];

  // Car arrays for different earnings
  const carsByEarnings = {
    14000: [
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/14k/eno_10_11zon-transformed.webp', description: 'Eon' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/14k/Kuv-100-transformed.webp', description: 'Kuv-100' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/14k/Alto_9_11zon-transformed.webp', description: 'Alto' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/14k/pngwing.com_1_11zon-transformed.webp', description: 'Alto-k10' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/14k/Kwid_5_11zon-transformed.webp', description: 'Kwid' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/14k/Celerio_4_11zon-transformed.webp', description: 'Celerio' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/14k/S-presson_7_11zon-transformed.webp', description: 'Suzuki Spresso' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/14k/Datsun-GO_2_11zon-transformed.webp', description: 'Datsun-Go' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/14k/Wagon-R_8_11zon-transformed.webp', description: 'Wagon-R' },
    ],

    20000: [

      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Xcent.webp', description: 'Xcent' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Exter.webp', description: 'Exter' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Tiago.webp', description: 'Tiago' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Altroz.webp', description: 'Altroz' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Tigor.webp', description: 'Tigor ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/tata-punch.webp', description: 'Tata-Punch' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Triber.webp', description: 'Triber' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Ford-Figo.webp', description: 'Ford-Figo' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Amaze.webp', description: 'Amaze' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Dzire.webp', description: 'Dzire' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Grand-I10-Nios.webp', description: 'Grand-i10-Nios' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/I20.webp', description: 'I20 ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/polo.webp', description: 'Polo ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Rapid.webp', description: 'Rapid' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Honda-City.webp', description: 'Honda-City' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Baleno.webp', description: 'Baleno' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Nissan-magnite.webp', description: 'Nissan-Mangite ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Kiger.webp', description: 'Kiger' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/s-cross.webp', description: ' s-cross' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Swift.webp', description: 'Swift ' },
      // { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/volkswagen-Ameo.webp', description: 'volkswagen-Ameo ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Aura.webp', description: 'Aura' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/sonnet.webp', description: 'Sonnet' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/breeaza.webp', description: 'Breeaza ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Bolt.webp', description: 'Bolt' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/creta.webp', description: 'creata' },
      // { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Kia-seltos.webp', description: 'Kia-Seltos ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Lgnis.webp', description: 'Lgnis' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Venue.webp', description: 'Venue' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Ciaz.webp', description: 'Ciaz ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/verna.webp', description: 'Verna' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Vitara.webp', description: 'Vitara ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/nexon.webp', description: 'Nexon' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Urban-cruiser.webp', description: 'Urban-cruiser ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Grand-I10.webp', description: 'Garnd-110' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Swift-Dzire.webp', description: 'swift-Dzire' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Seltos.webp', description: 'Kia-Seltos' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Eco-sport.webp', description: 'Eco-Sport ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Fronx.webp', description: 'Fronx' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/20000/Eeco.webp', description: 'Eeco ' },
    ],
    30000: [
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/mahindra-tuv300.webp', description: 'Mahindra-Tuv-300' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/XL6.webp', description: 'XL6' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/verna.webp', description: 'Verna' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/Creta.webp', description: 'Creta' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/Sonnet-sunroof.webp', description: 'Sonnet-sunroof ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/Xuv300.webp', description: 'XUV-300' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/Seltos.webp', description: 'Kia-Seltos' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/ERTIGA_RED.webp', description: 'ERTIGA' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/Scorpio.webp', description: 'Scorpio ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/Nexon-sunroof.webp', description: 'Nexon-Sunroof' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/Kia-Sonet-sunroof.webp', description: 'Kia-Sonet-sunroof ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/Exter-sunroof.webp', description: 'Exter-sunroof' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/venue-sunroof.webp', description: 'venue-sunroof' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/Ecospot -sunroof.webp', description: 'Ecospot -sunroof' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/Bolero-Neo.webp', description: ' Bolero-Neo' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/30000/i20-sunroof.webp', description: 'I20-sunroof ' },
    ],
    40000: [

      // { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/40000/Innova.webp', description: 'Innova ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/40000/Carnes.webp', description: 'Carnes' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/40000/verna-sunroof.webp', description: 'verna-sunroof' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/40000/Mg-Hector.webp', description: 'MG-Hector' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/40000/seltos-sunroof.webp', description: 'Seltos-sunroof ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/40000/Xuv-500.webp', description: 'XUV-500' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/40000/Hycross.webp', description: 'Innova-Hycross' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/40000/Mg-Astro-sunroof.webp', description: 'Mg-Astor-sunroof' }
    ],
    60000: [
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/60000/Hector-plus-sunroof.webp', description: 'Hector-plus-sunroof' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/60000/Alcazar-sunroof.webp', description: 'Alcazar-Sunroof' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/60000/InnovaCrysta.webp', description: 'Innova-Crysta ' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/60000/New-carnival.webp', description: 'New-cranival' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/60000/Mahindra-Thar.webp', description: 'Mahindra-Thar' },
      // { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/60000/Xuv700-AX7.webp.', description: 'Mahindra-XUV700-AX7' },
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/60000/XUV700.webp', description: 'Mahindra-Xuv-700' },
    ],
    100000: [
      { image: 'https://ldcars.blr1.cdn.digitaloceanspaces.com/ldcars_nextjs_images/cars/100000/fortuner.webp', description: 'Fortuner' }
    ]
  };

  const filteredCars = selectedEarnings ? carsByEarnings[selectedEarnings] || [] : [];

  return (
    <div className="bg-[#334B35] px-3 py-5 lg:px-10 lg:py-10">
      <button className="bg-[#6D8C54] popins-text text-white text-[10px] lg:text-xl px-2 py-1 lg:py-1 border-white rounded-full lg:rounded-[4px]">
        Monthly Car Earnings
      </button>

      {/* Earnings Buttons */}
      <div className="flex py-4 text-[8px]  gap-1 lg:gap-5 lg:text-[14px] lg:pt-8">
        {divContent.map((content, index) => {
          const earnings = parseInt(content);
          return (
            <div
              key={index}
              onClick={() => setSelectedEarnings(earnings)}
              className={`border border-white hover:bg-white hover:text-black transition-colors text-center flex flex-col items-center w-24 px-1 py-1 rounded-[4px] ${selectedEarnings === earnings ? 'bg-white text-black' : ''}`}
            >
              <p className="text-[5px] lg:text-xs">Earn up to</p>
              <p>{content}</p>
            </div>
          );
        })}
      </div>

      {/* Conditionally render static or marquee based on visible cars */}
      <div className="pb-4 lg:min-h-[180px]">
        {filteredCars.length > 1 ? (
          filteredCars.length <= maxVisibleCars ? (
            // Static display if cars fit the screen
            <div className="flex  ">
              {filteredCars.map((car, index) => (
                <div key={index} className="w-24 lg:w-40 mr-2 lg:mr-3">
                  <Image
                    src={car.image}
                    alt="Long Drive Cars app"
                    height={1000}
                    width={1000}
                    className="w-24 h-16 lg:w-40 lg:h-32 lg:pt-8"
                  />
                  <div className="bg-white  text-center rounded-b-[5px]">
                    <p className="text-black text-center font-semibold text-[8px] lg:text-base ">{car.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Marquee scroll if cars exceed screen width, with pause on hover
            <Marquee pauseOnHover={true} className="flex gap-32 lg:gap-40">
              {filteredCars.map((car, index) => (
                <div key={index} className="w-24 lg:w-40 mr-2 lg:mr-3">
                  <Image
                    src={car.image}
                    alt="Long Drive Cars app"
                    height={1000}
                    width={1000}
                    className="w-24 h-16 lg:w-40 lg:h-32 lg:pt-8"
                  />
                  <div className="bg-white w-full text-center rounded-b-[5px]">
                    <p className="text-black text-center font-semibold text-[8px] lg:text-sm">{car.description}</p>
                  </div>
                </div>
              ))}
            </Marquee>
          )
        ) : (
          // Static display for single car
          filteredCars.map((car, index) => (
            <div key={index} className="w-24 lg:w-40 mr-2 lg:mr-3">
              <Image
                src={car.image}
                alt="Long Drive Cars app"
                height={1000}
                width={1000}
                className="w-24 h-16 lg:w-40 lg:h-32 lg:pt-8"
              />
              <div className="bg-white w-full text-center rounded-b-[5px]">
                <p className="text-black text-center font-semibold text-[8px] lg:text-sm">{car.description}</p>
              </div>
            </div>
          ))
        )}
       </div>

       <div className="flex flex-col lg:justify-center lg:flex-row gap-2 lg:gap-4 lg:py-8 py-2 ">
        <div className="flex items-center rounded-full bg-[#6D8C54] border-black border-[1px] px-1 py-1 lg:px-2 lg:py-2  w-fit ">
          <RiArrowRightDoubleLine className="text-black rounded-full mr-1 lg:size-8  bg-white" size={20} />           
             <p className="lg:text-2xl text-xs text-white">2014 Above model Only</p>
        </div>
        <div className="flex items-center rounded-full bg-[#6D8C54] border-black border-[1px] px-1 py-1  lg:px-2 lg:py-2 lg:text-2xl text-xs text-white w-fit">            
         <RiArrowRightDoubleLine className="text-black rounded-full mr-1 lg:size-8  bg-white" size={20} />
          <p>White plate cars accepted</p>
        </div>
      </div>
    </div>
  );
}
