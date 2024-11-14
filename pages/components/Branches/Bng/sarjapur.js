import React from 'react'
import Image from 'next/image'
import im8 from '../../../images/bngimg/8.webp'
function sarjapur() {
  return (
    <div className='lg:text-lg text-sm lg:leading-9 leading-7'>
      <p className='font-bold lg:px-28 px-4 lg:text-5xl text-2xl py-4'>Uncover the Hidden Gems of Sarjapur with <span className='font-bold'>Long Drive Cars</span></p>
      <Image
        src={im8}
        height={2000}
        width={2000}
        className='py-3 object-cover w-full'
        alt="Long Drive Cars app"
      />
      <div className='lg:px-28 px-4'>
      <p>Sarjapur, a rapidly developing suburb in eastern Bangalore, strategically located close to some of Bangalore's major tech parks, including the Electronic City, Wipro Limited, and Infosys. A place that offers a unique blend of old-world charm and modern amenities, it is well-connected to the rest of Bangalore with excellent transportation facilities. With several reputed educational institutions and healthcare facilities, Sarjapur has emerged as a thriving hub of Bangalore's modern side.</p>
      <p className='font-bold'>Why <span className='font-bold'>Long Drive Cars</span> <span></span> in Sarjapur?</p>
      <p>Unlike traditional car rental companies that require you to pay a significant security deposit before you can drive away, we at <span className='font-bold'>Long Drive Cars</span> believe in providing a seamless rental experience with simple documentation procedure ensuring your safety and comfort with regularly serviced vehicles. </p>
      <p>Stop and explore at your own pace, whenever and wherever, <span className='font-bold'>Long Drive Cars</span> offer the flexibility to visit multiple destinations at Sarjapur, a must-visit destination</p>
      <p>For anyone looking to explore the city's hidden gems, should definitely visit the serene <span className='font-bold'>Varthur Lake</span>, a perfect picnic that offers a peaceful escape from the city chaos and take a peaceful walk along the lakeshore.
        Also check out the <span className='font-bold'>Bannerghatta Biological Park</span>, which is just a short drive away with <span className='font-bold'>Long Drive Cars</span>. </p>
      <p>Plan your trip for a comfortable and a hassle free journey to experience the divine bliss of visiting <span className='font-bold'>ISKCON Temple</span>, dedicated to Lord Krishna . Devotees from all over India flock here to seek blessings and spiritual enlightenment, not to forget the divine prasadam offered with so much love and devotion. </p>
      <p>Situated about 30.6 kilometers from Sarjapur, you can book your vehicle at <span className='font-bold'>Long Drive Cars</span> in advance to explore nearby areas post temple visit. </p>
      <p>For an unforgettable journey, <span className='font-bold'>Long Drive Cars</span> Bangalore provides the best car rental services if you're looking to visit Sarjapur and its environs . So start your journey with confidence and convenience and take advantage of the freedom to explore at your own speed. </p>
      </div>
    </div>
  )
}

export default sarjapur