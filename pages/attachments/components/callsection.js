
"use client";

import React, { useState } from 'react';

const CallBackForm = () => {
  const [mobile, setMobile] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track form submission
  const pattern = new RegExp(/^\d{10}$/);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isError && mobile.length === 10) {
      fetch('https://longdrivecarz.in/site/attachment-contacts', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_phone: mobile,
          user_location: 'Hyderabad',
        }),
      }).then(() => {
        // Show the success dialog when form is successfully submitted
        setIsSubmitted(true);
      });
    } else {
      setIsError(true);
    }
  };

  const handleCloseDialog = () => {
    setIsSubmitted(false); // Close the dialog box
    setMobile(""); // Optionally reset the mobile input
  };

  return (
    <div className='bg-[#334B35] py-4 px-2 lg:p-12'>
      <div className='rounded-[4px] bg-[#6D8C54] text-Poppins text-white'>
        <div className='flex flex-col items-center py-4 lg:py-12'>
          <div className='flex flex-col items-center lg:pb-4'>
            <p className='text-sm font-bold lg:text-xl'>Having Any Doubts About Attachment</p>
            <p className='text-xs font-semibold py-3 lg:py-6 lg:text-lg'>
              Let us help you on a quick call
            </p>
            <form onSubmit={handleSubmit} className='rounded-lg text-black text-xs flex py-2 lg:py-5'>
              <input
                value={mobile}
                type="text"
                placeholder="Enter mobile number"
                onChange={(e) => {
                  setMobile(e.target.value);
                  if (!pattern.test(e.target.value)) setIsError(true);
                  else setIsError(false);
                }}
                maxLength={10}
                className='relative rounded-l-[5px] p-2 mr-1 lg:mr-1 lg:py-4 lg:w-80 lg:text-sm text-[8px] w-32'
              />
              <button className='bg-[#334B35] ml-0  p-2 lg:p-2 lg:text-[10px] lg:w-28 text-white w-fit text-[10px] rounded-r-[6px]' type="submit">
                Get Callback
              </button>
            </form>
            <div>
              {isError && mobile.length > 1 && (
                <p className='text-xs text-center text-red-900'>
                  Please enter a valid number
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog Box */}
      {isSubmitted && (
       <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
       <div className="bg-white rounded-[5px] px-5 py-2  text-black text-center">
           <p className="text-xl font-bold ">Thank You!</p>
           <p className='py-4'>We Will get back to you.</p>
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
  );
};

export default CallBackForm;
