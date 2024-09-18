import React from 'react'
import Navbar from '../user/layout/navbar/Navbar'
import Slider from '../user/layout/slider/Slider'
import Trend from '../user/layout/trend/Trend'
import MayLike from '../user/layout/mayLike/MayLike'
import News from '../user/layout/News/News'
import Services from '../user/layout/services/Services'

function Home() {
    return (
        <div>
            <Slider />
            <Trend />
            <MayLike />
            <News />
            <Services />
        </div>
    )
}

export default Home