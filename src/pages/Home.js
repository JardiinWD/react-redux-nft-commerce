import React, { Fragment } from 'react'
import HeroSection from '../components/UI/HeroSection'
import LiveAuction from '../components/UI/LiveAuction'

const Home = () => {
    return (
        <Fragment>
            {/* HeroSection */}
            <HeroSection />
            {/* LiveAuction */}
            <LiveAuction />
        </Fragment>
    )
}

export default Home
