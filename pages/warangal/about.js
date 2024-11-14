import React from 'react'

import About from '../components/ContactUs/About'
import Layout from '../components/Layout/Layout'
function about() {
    return (
        <Layout locname={'warangal'} phoneno={"9000-777-665"}>
            <div>
                <About/>
            </div>
        </Layout>
    )
}

export default about