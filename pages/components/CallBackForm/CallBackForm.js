import React, { useEffect } from 'react'
import Image from 'next/image'
// import carphotot from '../../images/rightimg.webp';
import { useState } from 'react';
const CallBackForm = () => {

    const [mobile, setmobile] = useState("");
    const [isError, setIsError] = useState(false);
    const [showDailog, setShowDailog] = useState(false);
    const pattern = new RegExp(/^\d{10}$/);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isError && mobile.length == 10) {
            fetch('https://longdrivecarz.in/site/contacts', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'user_phone': mobile,
                    'user_location': 'Hyderabad'
                })
            });
            setShowDailog(true);
        }
        else {
            // console.log("some error");
        }

    };
    function handleCloseDialog()
    {
        setShowDailog(false);
    }
    return (
        <div className='bg-white lg:py-10 py-6'>
            <div className='flex lg:mx-[70px] p-5 xl:mx-[96px] mx-3 rounded-md justify-center bg-[#660066] items-center pb-5 lg:pt-5 text-white shadow-md'>
                <div className='lg:flex lg:flex-col lg:justify-center lg:items-center xl:p-5 lg:w-2/3 xl:w-2/5 p-0 lg:p-0'>
                    <div className='  xl:px-6 lg:py-3'>
                        <p className='md:text-2xl md:font-semibold font-sans text-xl xl:text-2xl font-semibold text-center'>Can't find the perfect car? </p>
                        <p className='text-base lg:pl-9 xl:pl-0 xl:text-base font-sans text-center pt-2  font-normal'>Let us help you on a quick call</p>
                    </div>
                    <form onSubmit={handleSubmit} className='rounded-lg text-black text-xs flex pt-4'>

                        <input
                            value={mobile}
                            type="text"
                            placeholder="Enter mobile number"
                            onChange={(e) => {
                                setmobile(e.target.value);
                                if (!pattern.test(e.target.value))
                                    setIsError(true);
                                else setIsError(false);
                            }}
                            maxLength={10}
                            className='lg:rounded-md lg:w-full lg:p-3 w-40 rounded-sm p-1'
                        />

                        <button className='bg-green-400 border-2 ml-1 p-1  border-gray-400 lg:p-2 lg:text-[10px] text-white lg:w-28  w-fit text-[8px] rounded' type="submit">Get Callback</button>
                    </form>
                    <div>{isError && mobile.length > 1 && <p className='text-sm text-center '>Please enter a valid number</p>}</div>
                </div>
                {showDailog && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white rounded-[5px] px-5 py-2  text-black text-center">
                            <p className="text-xl font-bold ">Thank You!</p>
                            <p className='py-4 capitalize'>We Will get back to you.</p>
                            <button
                                className=" px-1  bg-green-500 text-white  rounded"
                                onClick={handleCloseDialog}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default CallBackForm