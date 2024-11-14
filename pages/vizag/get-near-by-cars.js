import React from 'react'
import dynamic from 'next/dynamic';
import Layout from '../components/Layout/Layout';
const DynNearby = dynamic(() => import('../components/GetNearByPage/GetNearByPage'), {
  ssr: false, // Set to false if you want to load it only on the client side
});

function getnearbycars() {
  return (
    <div className='bg-white'>
      <Layout locname={'vizag'} phoneno={"96666-99583"}>
        <DynNearby />
      </Layout>
    </div>
  )
}

export default getnearbycars;