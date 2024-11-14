

"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const QuestionAnswerSlider = () => {
  const sliderQuestions = [
    {
      question: "Car sitting idle at home?",
      answer: "Pay your EMI with long drive cars attachment."
    },
    {
      question: "Car EMI Problems?",
      answer: "Earn money with your cars."
    },
    {
      question: "Turn your car into money?",
      answer: "Attach your cars with long drive cars."
    },
    {
      question: "Unable to buy a car using your first salary?",
      answer: "Buy your cars using long drive cars."
    },
    {
      question: "Why pay your EMI from your pocket?",
      answer: "Earn 15k-50k/Monthly."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const autoPlay = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderQuestions.length);
  };

  useEffect(() => {
    const intervalId = setInterval(autoPlay, 3000); // Slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (

    <div className="bg-[#334B35] p-2 h-full lg:p-4 lg:h-[600px]">
      <div className="flex-wrap py-4 lg:flex lg:flex-row items-center  lg:py-9">
        {/* Left Section - Text and Buttons */}
        <div className="flex flex-col pl-[8px] lg:pl-8  ">
          <div className='py-2 lg:py-5 min-h-[90px] lg:min-h-[230px] lg:w-[800px]'>
            {/* Question and Answer Displayed Together */}
            <p className="text-[15px] font-bold pb-1 lg:pb-3 text-white lg:text-[38px]">
              {sliderQuestions[currentIndex].question}
            </p>
            <p className="text-[15px] font-bold text-white lg:text-[38px]">
              {sliderQuestions[currentIndex].answer}
            </p>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-start gap-1 py-2 lg:pt-4 lg:gap-1">
            {sliderQuestions.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-[1px] lg:w-4 lg:h-[4px] rounded-full cursor-pointer transition-colors duration-300 ${currentIndex === index ? 'bg-gray-900' : 'bg-gray-400'
                  }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>

          {/* App Store Buttons */}
          <div className="flex justify-center lg:justify-start gap-5 py-10  lg:gap-3 ">
            <Link href='https://play.google.com/store/apps/details?id=com.long_drive_cars.owner_app' type="button" className="cursor-pointer">
              <Image
                src="/Banner/Googleplay.webp"
                alt="Google Play Store"
                width={1000}
                height={1000}
                className='relative w-24 lg:w-36'
              />
            </Link>

            <Link href='https://apps.apple.com/in/app/owner-app-long-drive-cars/id6476489838' className="cursor-pointer">
              <Image
                src="/Banner/Appstore.webp"
                alt="Apple App Store"
                width={1000}
                height={1000}
                className='relative w-24 top-[5px] lg:w-36 lg:top-2'
              />
            </Link>
          </div>
        </div>

        {/* Right Section - Car Image */}
        <div className="flex justify-center">
          <Image
            src="/slider/Bg-car.webp"
            alt="Long Drive Cars app"
            width={1000}
            height={1000}
            className="relative  bg-[#334B35] z-10  lg:w-[650px] lg:scale-105 lg:top-5"
          />
        </div>
      </div>
    </div>

  );
};

export default QuestionAnswerSlider;
