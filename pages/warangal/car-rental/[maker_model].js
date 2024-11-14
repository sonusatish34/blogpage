import React from 'react'
import MakerModel from '../../MakerModel'
import Layout from '../../components/Layout/Layout';
function maker_model() {
  return (
    <Layout locname={'warangal'} phoneno={"9000-777-665"}>
    <div>
      <MakerModel city={'warangal'} phoneno={'9000777665'}/>
    </div>
    </Layout>
  )
}

export default  maker_model;