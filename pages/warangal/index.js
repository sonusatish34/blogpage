import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import CarProducts from '../components/CarProducts';
const DynCallBackForm = dynamic(() => import('../components/CallBackForm/CallBackForm'));
const DynNearYou = dynamic(() => import('../components/NearYou/NearYou'));
const DynImageChange = dynamic(() => import('../components/ImageChange/ImageChange'));
const DynNearByApi = dynamic(() => import('../components/NearByApi/NearByApi'));
const GetInTouch = dynamic(() => import('../components/GetInTouch/GetInTouch'));
const FeaturedCars = dynamic(() => import('../components/FeaturedCars/FeaturedCars'));
const DynamicFaqComponent = dynamic(() => import('../components/FaqAccordian/FaqAccordian'));
import DynWhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Layout from '../components/Layout/Layout';
import PriceList from '../components/PriceList/PriceList';
import Head from 'next/head';
export default function Place({cars,canonicalUrl}) {
    const [carData, setCarData] = useState(null);
    const [carData2, setCarData2] = useState(null);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCarDetails() {
            try {
                const response = await fetch(`https://api.longdrivecarz.in/site/cars-info?location=hyderabad`);
                const items = await response.json();
                const cars = items?.data?.results;
                setCarData2(cars);
            } catch (error) {``
                console.error('Error fetching car details:', error);
            }
        }
        fetchCarDetails();
    }, []);
    
    return (
        <div>
            <Layout locname={'warangal'} phoneno={"9000-777-665"}>
                <Head>
                    <title>No Deposit & Unlimited Km - Self-Drive Car Rentals In Warangal</title>
                    <meta name="description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & No Deposit, Book clDzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content="No Deposit & Unlimited km - Self-Drive Car Rentals In Warangal" />
                    <meta property="og:description" content="Self-drive cars start at 62/hr, We offer Long Drive Cars for the best prices with unlimited km & No Deposit, Book Dzire @ ₹83/hr, Baleno @ ₹91/hr, Ertiga @ ₹124/hr, Swift @ ₹83/hr, Thar @ ₹208/hr." />
                    
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <div className='pt-32 lg:pt-0'>
                    <DynImageChange />
                    <div>
                        <DynNearByApi city={'warangal'} />
                    </div>
                    <CarProducts data={cars} branch={"warangal"} phoneno={'9000777665'} count={7}/>
                    <div><DynNearYou /></div>
                    <FeaturedCars data={carData2} branch={"warangal"} />
                    <DynCallBackForm />
                    <DynWhyChooseUs />
                    <div className='bg-white rounded shadow-md xl:py-12 lg:px-14 xl:px-14 p-2'>
                        <p className='uppercase p-2 mb-4 text-center text-black font-bold xl:text-2xl font-manrope'>Frequently asked questions</p>
                        <DynamicFaqComponent />
                    </div>
                    <GetInTouch phoneno={'9000777665'} />
                    <PriceList city={'hyd'} />
                </div>
            </Layout>
        </div>
    );
}



export async function getServerSideProps({req}) {
    const response = await fetch('https://api.longdrivecarz.in/site/cars-info?location=warangal');
    const items = await response.json();
    const cars = items?.data?.results;
    const host = req.headers.host;
    const canonicalUrl = host.includes('.in')
      ? 'https://www.longdrivecars.in/warangal'
      : 'https://www.longdrivecars.com/warangal';
  
    return {
      props: {
        cars,
        canonicalUrl,
      },
    };
  }