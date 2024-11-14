import React from 'react'
import ExploreCars from '../components/ExploreCars/ExploreCars'
import Layout from '../components/Layout/Layout'
function exploreselfdrivecars() {

  return (
    <Layout locname={'warangal'} phoneno={"9000-777-665"}>
      <div>
        <ExploreCars loc={'warangal'} phoneno={"9000777665"} />
      </div>
    </Layout>

  )
}

export default exploreselfdrivecars