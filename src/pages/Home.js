import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import LiveAuction from '../components/UI/LiveAuction'
import SellerSection from '../components/UI/SellerSection'
import TrendingSection from '../components/UI/TrendingSection'
import StepSection from '../components/UI/StepSection'
import Helmet from '../components/Utils/Helmet'

const Home = () => {
    return (
        <Helmet title='Home'>
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
        </Helmet>
    )
}

export default Home
