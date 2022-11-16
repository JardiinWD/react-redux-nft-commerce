import React, { Fragment } from 'react'
import HeroSection from '../components/UI/HeroSection'
import LiveAuction from '../components/UI/LiveAuction'
import SellerSection from '../components/UI/SellerSection'


const Home = () => {
    return (
        <Fragment>
            {/* HeroSection */}
            <HeroSection />
            {/* LiveAuction */}
            <LiveAuction />
            {/* SellerSection */}
            <SellerSection />
        </Fragment>
    )
}

export default Home
