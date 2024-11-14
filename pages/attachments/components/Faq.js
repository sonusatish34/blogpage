

"use client"; // Make sure this is the very first line in your file

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Import the icons

export default function Faq() {
    const documents = [
        {
            title: "1. What documents are required for car attachment?",
            content:
                '<ul class="list-disc pl-5"><li>RC (Registration Certificate)</li><li>Pollution Certificate</li><li>Zero Depreciation Insurance</li><li>Bank Details</li><li>Car Owner’s Aadhar Card</li></ul>',
        },
        {
            title: "2. Who is responsible for general service and damage?",
            content:
                '<ul class="list-disc pl-5"><li>Engine Oil</li><li>Filters</li><li>Bank Details</li><li>Brake Pads</li></ul><p>For any damages, Long Drive Cars will take care of the repairs.</p>',
        },
        {
            title: "3. What happens in case of an accident?",
            content:
                "<p>In case of any major accident or a police case, Long Drive Cars handles the entire process on behalf of the car owner.</p>",
        },
        {
            title: "4. How are traffic challans, fuel, and Fastag charges handled?",
            content:
                "<p>All traffic challans, fuel costs, and Fastag charges are paid by the customer who books the car.</p>",
        },
        {
            title: "5. What if I need my car for personal use?",
            content:
                "<p>If you need to use your attached car, you are required to inform Long Drive Cars at least 5 days in advance so your car’s bookings can be blocked.</p>",
        },
        {
            title: "6. What is the contract period for car attachment?",
            content:
                "<p>The minimum contract period is 1 year, and it can extend up to 5 years.</p>",
        },
        {
            title: "7. How will I know if my car is booked?",
            content:
                '<ul class="list-disc pl-5"><li>Customer’s Aadhar</li><li>Driving License</li><li>Car Pictures</li></ul><p>Car owners receive automatic WhatsApp updates for every booking.</p>',
        },
        {
            title: "8. How are payments and settlements handled?",
            content:
                "<p>Payments will be credited to the car owner’s bank account by the 10th to 15th of every month.</p>",
        },
        {
            title: "9. How much can I earn from Long Drive Cars?",
            content:
                "<p>You can earn between ₹10,000 to ₹50,000 per month, depending on the car.</p>",
        },
        {
            title: "10. What is the age limit for cars accepted by Long Drive Cars?",
            content:
                "<p>Long Drive Cars hires vehicles manufactured from the year 2014 onwards.</p>",
        },
        {
            title:
                "11. How is the booking amount paid if my car is not booked?",
            content:
                "<p>If your car is online for 27 days or more but does not receive any booking Long Drive Cars guarantees a minimum payment for 5 days of bookings. This is calculated monthly from the 1st to the 31st.</p>",
        },
    ];

    const [open, setOpen] = useState(Array(documents.length).fill(false));

    const toggleDropdown = (index) => {
        setOpen((prevState) =>
            prevState.map((item, idx) => (idx === index ? !item : false))
        );
    };

    return (
        <div className="bg-[#334B35] px-3 py-4 lg:py-5 lg:px-10 text-white flex flex-col ">
            <p className="bg-[#6D8C54] popins-text text-white lg:px-4 lg:w-16 lg:text-lg lg:py-2 py-1 px-[6px] w-11  text- border-white rounded-[3px]">
                FAQ
            </p>

            <div className=" gap-x-6 gap-y-4 pt-4  ">
                {documents.map((doc, index) => (
                    <div
                        key={index}
                        className="border-b-[1px] text-[10px] lg:text-lg border-white pb-4"
                    >
                        <div
                            className="cursor-pointer flex justify-between items-center"
                            onClick={() => toggleDropdown(index)}
                        >
                            <span className="font-bold pt-3 text-sm lg:text-xl ">{doc.title}</span>
                            <span>
                                {open[index] ? (
                                    <IoIosArrowUp className="text-lg lg:text-2xl" />
                                ) : (
                                    <IoIosArrowDown className="text-lg lg:text-2xl" />
                                )}
                            </span>
                        </div>

                        {open[index] && (
                            <div className="mt-2">
                                <div
                                    className="text-xs lg:text-lg leading-2 lg:leading-9"
                                    dangerouslySetInnerHTML={{ __html: doc.content }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}




