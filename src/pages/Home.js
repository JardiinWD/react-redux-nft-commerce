import React, { Fragment } from 'react'
import HeroSection from '../components/UI/HeroSection'
import LiveAuction from '../components/UI/LiveAuction'
import SellerSection from '../components/UI/SellerSection'
import TrendingSection from '../components/UI/TrendingSection'
import StepSection from '../components/UI/StepSection'


const Home = () => {
    return (
        <Fragment>
            {/* HeroSection */}
            <HeroSection />
            {/* LiveAuction */}
            <LiveAuction />
            {/* SellerSection */}
            <SellerSection />
            {/* TrendingSection */}
            <TrendingSection />
            {/* StepSection */}
            <StepSection />
        </Fragment>
    )
}

export default Home
