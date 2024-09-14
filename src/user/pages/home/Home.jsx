import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import Slider from '../../layout/slider/Slider'
import Trend from '../../layout/trend/Trend'
import MayLike from '../../layout/mayLike/MayLike'
import News from '../../layout/News/News'
import Services from '../../layout/services/Services'

function Home() {
    return (
        <div>
            {/* <Navbar /> */}
            <Slider />
            <Trend />
            <MayLike />
            <News />
            <Services />
        </div>
    )
}

export default Home