import React from 'react'
import Link from 'next/link';
import ImageChange from '../ImageChange/ImageChange';
const ContactUS = () => {

    return (
        <div className='text-black bg-white pt-7 px-2 py-2'>
            <div className='bg-white text-black lg:text-lg text-sm lg:leading-9 leading-7 lg:pt-2 pt-28'>
                <p className='font-bold lg:text-4xl text-3xl py-4 lg:px-16 px-2'>Welcome to Long drive cars - Your trusted partner for self drive rental cars </p>
                <ImageChange />
                <div className='lg:px-16 px-2 pt-4'>
                    <p >Long drive cars -  your go-to solution for all your self-drive car rental needs! Whether you're planning a weekend adventure, a corporate outing or require a car for everyday use, long drive cars are here to ensure that your travel  experience is smooth and hassle free. </p>
                    <p>Explore the places at your own pace with our fleet of well maintained vehicles that give you the best value for your money.  We at Long drive cars do not compromise on quality and are transparent about the pricing policies without any hidden charges. </p>
                    <p>As industry leaders, we are passionate about innovation. Our dedicated team ensures that our customers receive hassle free rental experience by integrating the latest advancements in technology and best  resources for your journey.  </p>
                    <p className='py-4 font-bold lg:text-3xl'>Why us? </p>
                    <p>From compact cars to spacious SUVs, our wide variety of vehicles are regularly serviced for a safe and unforgettable journey.  Experience the freedom and convenience of self driving with unlimited kilometers and the flexibility of a zero-deposit policy, allowing you to modify your plans without financial concerns.</p>
                    <p>Designed to protect you and your wallet, here's everything you need to know about our Damage protection plans -  Knowing you’re covered against unexpected mishaps allows you to enjoy your trip fully. </p>
                    <p>Whether it is a minor dent, a cracked windshield or a more serious damage, our plan shields you from financial responsibility in any case. With a clear outline of what’s covered and what isn't, our dedicated team is available to assist you every step of the way.</p>
                    <p>Pricing  -  With unexpected fees leading to frustration and disappointment, we at Long drive cars offer  services with no hidden charges. Unlike other companies that advertise low rates and add on various charges by the time you return the vehicle, the pricing structure here at Long drive cars is transparent and includes everything you need for hassle free experience.</p>
                    <p className='py-4 font-bold lg:text-3xl'>Book it Easy : Aadhar and License Essentials!</p>
                    <p>We prioritize the safety and security of our customers,by adhering to strict identification policies to ensure legal regulations and smooth rental experience. At Long Drive cars, we ensure legal compliance by following the guidelines that require verification of Aadhar card and a valid driving license. These documents serve as proof of who you are, helping us ensure that only authorized individuals are renting our vehicles.</p>
                    <p className='py-4 font-bold lg:text-3xl'>GRAB YOUR RIDE</p>
                    <p>Whether you're planning a road trip ,family outing or a dinner date, thanks to our user-friendly app that makes booking your ride a breeze. With all the features right at your fingertips your booking is just a few simple steps. Available on both App store and Play store, create an account by providing a basic information and login to pick your wheels from our fleet of vehicles with prices and features attached, choose your pickup dates/locations, as well as any add-ons needed such as GPS navigation. Review everything before you lock in your booking, and then hit the confirmation button. Ready, Set, Go and there you have it - booking your ride in just a few simple steps.</p>
                    <p className='py-4 font-bold lg:text-3xl'>Contact us</p>
                    <p>Phone: +91 9000-478-478</p>
                    <p>Email: longdrivecars@gmail.com</p>
                    <p>Website:<Link className='underline' href={'https://www.longdrivecars.com/'}>https://www.longdrivecars.com/</Link>  </p>
                    <p className='py-4 font-bold lg:text-3xl'>Visit Our Office</p>
                    <p>You can also visit our office at:  Long Drive Cars, Pillar No 129, Main Road, beside Medipally, Medipally, Hyderabad, Telangana 500098 , 9111911162.</p>
                    <p className='py-4 font-bold lg:text-3xl'>Social Media</p>
                    <p>Follow us on social media for the latest updates and offers:</p>
                    <p className='flex gap-4'>
                        <Link className='underline' href={'https://twitter.com/Long_drive_cars'}>Twitter</Link>
                        <Link className='underline' href={'https://www.instagram.com/longdrivecars_official/'}>Instagram</Link>
                    </p>
                    <p className='py-4 font-bold lg:text-3xl'>CUSTOMER SUPPORT </p>
                    <p>Come what may : Regardless of the challenges or any obstacles faced during your journey, Long drive cars assure you with top-notch support 24/7 from our customer support team. Wherever you are, count on us to get you back on road promptly. Ran out of gas or in need of a spare tire? No worries, we'll use our reliable tracking tools to find the nearest service center from a vast network of service centers and send help your way.  Give us a call or ping us at : <Link className='underline' href={'tel:9000478478'}>+91 9000-478-478</Link>. </p>
                    <p className='py-4 font-bold lg:text-3xl'>Big moves ahead:  Huge updates incoming. </p>
                    <p>Whether you need a small car for running errands or a spacious SUV for a family trip, we’ll have the right ride for you</p>
                    <p>Big things are happening at Long drive cars, and we can’t wait for you to join us on this epic journey!</p>
                    <p>So keep an eye out for amazing updates! </p>
                    <p className='py-2 font-bold lg:text-3xl'>Our Branches </p>
                    <ol>
                        <li>Hyderabad</li>
                        <li>Vizag</li>
                        <li>Vijayawada</li>
                        {/* <li>Bangalore</li> */}
                        {/* <li>Mysore</li> */}
                        <li>Mangalore</li>
                    </ol>
                </div>
            </div>
        </div>
        // </Layout>

    )
}

export default ContactUS;