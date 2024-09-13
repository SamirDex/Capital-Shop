import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import Slider from '../../layout/slider/Slider'
import Trend from '../../layout/trend/Trend'

function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <Slider />
            <Trend />
        </div>
    )
}

export default Home