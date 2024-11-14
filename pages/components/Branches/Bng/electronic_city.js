import React from 'react'
import im1 from '../../../images/bngimg/1.webp'
import Image from 'next/image'

function electroniccity() {
  return (
    <div className='lg:text-lg text-sm lg:leading-9 leading-7'>
      <p className='font-bold lg:px-28 px-4 lg:text-5xl'>Experience the Thrill of Exploring Electronic City with Long Drive Cars!</p>
      <Image
        src={im1}
        height={2000}
        width={2000}
        className='py-3 object-cover w-full'
        alt="Long Drive Cars app"
      />
      <div className='lg:px-28 px-4'>
      <p>Known for its sprawling tech parks and innovative spirit, Bangalore is often dubbed as Silicon valley of India. Among its most iconic hubs is Electronic city, a major IT and industrial zone situated in the southern outskirts of the city. </p>
      <p>A haven for multinational firms, startups, and a thriving ecosystem of tech professionals, Electronic city offers both the fast paced corporative vibe and a chance to explore the wonders of South Bangalore. </p>
      <p>With over 300 companies including the tech giants like Infosys, Wipro, TCS, and HCL spread across 800 acres, the massive tech park is a perfect destination to cruise around in your Long drive cars. </p>
      <p className='font-bold'>Roam free. Ride easy with Long drive cars</p>
      <ol className='pl-6'>
        <li className='list-decimal'>Flexible timing - Travel at your own pace without worrying about the schedule.</li>
        <li className='list-decimal'>No Surge Pricing - Unlike other services, avoid the hassle of hidden charges during the busy time with Long drive cars</li>
        <li className='list-decimal'>Combining privacy and comfort : Experience the ultimate freedom and travel in style with Long drive cars, make calls, listen to music and relax in your own space.</li>
      </ol>
      <p>Whether a road trip with colleagues and friends or business trip, pick a car that suits your style and requirements at Long drive cars. Book your perfect ride and hit the road in comfort and convenience. </p>
      <p className='font-bold'></p>
      <p></p>
      </div>
    </div>
  )
}

export default electroniccity