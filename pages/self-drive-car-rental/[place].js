
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import ecil from '../components/Branches/ecil';

const components = {
  ameerpet: dynamic(() => import('../components/Branches/ameerpet'), { ssr: false }),
  dilshuknagar: dynamic(() => import('../components/Branches/dilshuknagar')),
  ecil: dynamic(() => import('../components/Branches/ecil')),
  kukatpally: dynamic(() => import('../components/Branches/kukatpally')),
  madhapur: dynamic(() => import('../components/Branches/madhapur')),
  medipally: dynamic(() => import('../components/Branches/medipally')),
  miyapur: dynamic(() => import('../components/Branches/miyapur')),
  secunderabad: dynamic(() => import('../components/Branches/secunderabad')),
  shamshabad: dynamic(() => import('../components/Branches/shamshabad')),
  ramanthapur: dynamic(() => import('../components/Branches/ramanthapur')),
  gachibowli: dynamic(() => import('../components/Branches/gachibowli')),
};

const metadata = {

  ameerpet: {
    title: ' Self Drive Cars Hyderabad- Best Car Rentals in Ameerpet',
    description:"Explore a wide range of self-drive cars in Ameerpet with Self Drive Cars Hyderabad. Enjoy quality, convenience, and flexibility with our top-notch rental services",
    ogDescription: 'Explore a wide range of self-drive cars in Ameerpet withSelf Drive Cars Hyderabad. Enjoy quality, convenience, and flexibility with our top-notch rental services',
  },

  dilshuknagar: {
    title: 'Discover Hyderabad with Self-Drive Cars from Dilsukhnagar',
    description: 'Discover Hyderabad at your own pace with self-drive car rentals. Enjoy flexible, cost-effective, and comfortable travel to city sights, Araku Valley, and beyond',
    ogDescription: 'Discover Hyderabad at your own pace with self-drive car rentals. Enjoy flexible, cost-effective, and comfortable travel to city sights, Araku Valley, and beyond',

  },

  
  ecil:{
    title:"Top Self Drive Rentals ECIL- Unlimited KM, No Deposit",
    description:'Explore with freedom using Self Drive Cars Hyderabad!No deposit, unlimited kilometers, and a wide car range for your perfectjourney around ECIL and beyond',
    ogDescription:'Explore with freedom using Self Drive Cars Hyderabad!No deposit, unlimited kilometers, and a wide car range for your perfectjourney around ECIL and beyond',

  },



  kukatpally: {
    title: 'Best Prices on Self Drive Cars in Kukatpally– Book Now',
    description: "Rent self-drive cars in Hyderabad with Self Drive Cars Kukatpally. Enjoy unlimited kms, no deposit, and flexible rental options for a comfortable journey",
    ogDescription: 'Rent self-drive cars in Hyderabad with Self Drive Cars Kukatpally. Enjoy unlimited kms, no deposit, and flexible rental optionsfor a comfortable journey',
  },

  madhapur: {
    title: ' Hyderabad Self-Drive Car Rentals Book in Madhapur',
    description: " Explore Hyderabad and Karnataka with Self Drive Cars' wide range of 5-seater and 7-8-seater rentals, featuring excellent service anddiverse model choices. Book now",
  ogDescription:" Explore Hyderabad and Karnataka with Self Drive Cars' wide range of 5-seater and 7-8-seater rentals, featuring excellent service anddiverse model choices. Book now",
  },
  
  medipally: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: 'Self Drive Car Rentals in Uppal, Medipally',
    ogDescription: 'Self Drive Car Rentals in Uppal, Medipally',
  },

  miyapur: {
    title: ' Best Self-Drive Car Rentals in Miyapur- Hyderabad',
    description: "Discover reliable self-drive car rentals in Miyapur with Self Drive Cars Hyderabad. Perfect for family outings, shopping trips,and weekend getaways from Hyderabad",
    ogDescription: "Discover reliable self-drive car rentals in Miyapur with Self Drive Cars Hyderabad. Perfect for family outings, shopping trips,and weekend getaways from Hyderabad",
 },

  secunderabad: {
    title: 'Drive Your Way with Budget-Friendly Car Rentals',
    description: "Rent a self-drive car in Secunderabad with Self DriveCars Hyderabad. Enjoy comfort, safety, and flexibility with modernvehicles for your next trip",
    ogDescription: 'Rent a self-drive car in Secunderabad with Self DriveCars Hyderabad. Enjoy comfort, safety, and flexibility with modern vehicles for your next trip',
  },


  shamshabad: {
    title: 'No Deposit & Unlimited Km - Self-Drive Car Rentals In Hyderabad',
    description: "Explore the variety of self-drive car services in Shamshabad",
    ogDescription: 'Explore the variety of self-drive car services in Shamshabad',
  },

  ramanthapur: {
    title: ' Self-Drive Car Rentals in Ramanthapur No Deposit.',
    description: "Discover Hyderabad at your pace with self-drive carrentals from Ramanthapur. Choose from compact cars to SUVs forcity trips or weekend getaways. Book now",
    ogDescription: "Discover Hyderabad at your pace with self-drive carrentals from Ramanthapur. Choose from compact cars to SUVs forcity trips or weekend getaways. Book now",
  },

  gachibowli: {
    title: ' Self Drive Car Rental Hyderabad– No Deposit, Unlimited Kms',
    description: ' Rent a self-drive car in Hyderabad with no deposit andunlimited kms. Convenient pick-up in Gachibowli for a hassle-free travel experience',
    ogDescription: ' Rent a self-drive car in Hyderabad with no deposit andunlimited kms. Convenient pick-up in Gachibowli for a hassle-free travel experience',
   
  },
  
 
  // Add other branches here...
};
export async function getServerSideProps(context) { 
  const { req } = context;
  const { place } = context.params;
  const { title = 'Default Title', description = 'Default Description', ogDescription = '' } = metadata[place.toLowerCase()] || {};

  const host = req.headers.host;
  const canonicalUrl = host.includes('.in')
      ? `https://www.longdrivecars.in/self-drive-car-rental/${place.toLowerCase()}`
      : `https://www.longdrivecars.com/self-drive-car-rental/${place.toLowerCase()}`;

  return {
    props: {
      place,
      title,
      description,
      ogDescription,
      canonicalUrl
    },
  };
}

function Place({ place, title, description, ogDescription, canonicalUrl }) {  // Include canonicalUrl here
  const [Component, setComponent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (place) {
      const component = components[place.toLowerCase()];
      setComponent(component || null);
    }
  }, [place]);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={ogDescription} />
        <link rel="canonical" href={canonicalUrl} />  {/* Use canonicalUrl here */}
      </Head>
      <div>{Component ? <Component /> : <div>Loading...</div>}</div>
    </Layout>
  );
}

export default Place;


