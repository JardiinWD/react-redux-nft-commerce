import React, { Fragment, useState } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Utils/Helmet'
import NftCard from '../components/UI/NftCard'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../assets/data/data'
// Stylesheet
import './styles/Market.css'


const Market = () => {

    const [data, setData] = useState(NFT__DATA)

    // Category filter Data Handler
    const handleCategory = () => {

    }
    // Filtered Items Data Handler
    const handleItems = () => {

    }
    // Sorting Data Handler (by price)
    const handleSort = (e) => {
        // Find what option was selected
        const filterValue = e.target.value
        // Then I create the statement for the option 'high'
        if (filterValue === 'high') {
            // I save in another variable all the filtered items where the current bid is greater or equal than 6.
            const filterData = NFT__DATA.filter(item => item.currentBid >= 6)
            // Then I update my state
            setData(filterData)
        }
        // Else I create the statement for the option 'high'
        if (filterValue === 'mid') {
            // I save in another variable all the filtered items where the current bid is greater or equal than 5.5
            const filterData = NFT__DATA.filter(item => item.currentBid > 5.5 && item.currentBid < 6)
            // Then I update my state
            setData(filterData)
        }
        // Else I create the statement for the option 'high'
        if (filterValue === 'low') {
            // I save in another variable all the filtered items where the current bid is greater or equal than 5.5
            const filterData = NFT__DATA.filter(item => item.currentBid >= 4.89 && item.currentBid < 5.09)
            // Then I update my state
            setData(filterData)
        }
    }

    return (
        /* Helmet Component */
        <Helmet title='Market'>
            {/* Fragment */}
            <Fragment>
                {/* CommonSection Component */}
                <CommonSection title='Market' />
                <section>
                    {/* Container */}
                    <Container>
                        {/* Row */}
                        <Row>
                            {/* lg='12' */}
                            <Col lg='12' className="mb-5">
                                {/* market_product_filter */}
                                <div className="market_product_filter d-flex align-items-center justify-content-between">
                                    {/* filter_left */}
                                    <div className="filter_left d-flex align-items-center gap-5">
                                        {/* all_category_filter */}
                                        <div className="all_category_filter">
                                            {/* Options */}
                                            <select onChange={handleCategory}>
                                                <option>All Categories</option>
                                                {/* Art */}
                                                <option value="art">Art</option>
                                                {/* Music */}
                                                <option value="music">Music</option>
                                                {/* Domain Name */}
                                                <option value="domain-name">Domain Name</option>
                                                {/* Virtual World */}
                                                <option value="virtual-world">Virtual World</option>
                                                {/* Trending Card */}
                                                <option value="trending-card">Trending Card</option>
                                            </select>
                                        </div>
                                        {/* all_items_filter */}
                                        <div className="all_items_filter">
                                            {/* Options */}
                                            <select onChange={handleItems}>
                                                <option>All Items</option>
                                                {/* Single Item */}
                                                <option value="single-item">Single Item</option>
                                                {/* Bundle */}
                                                <option value="bundle">Bundle</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* filter_right */}
                                    <div className="filter_right">
                                        {/* Options */}
                                        <select onChange={handleSort}>
                                            <option>Sort By</option>
                                            {/* Single Item */}
                                            <option value="high">High Rate</option>
                                            {/* Mid Rate */}
                                            <option value="mid">Mid Rate</option>
                                            {/* Low Rate */}
                                            <option value="low">Low Rate</option>
                                        </select>
                                    </div>
                                </div>
                            </Col>
                            {
                                data?.map((item, index) => {
                                    return (
                                        <Col key={index} lg='3' md='4' sm='6' className="mb-4">
                                            <NftCard item={item} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </section>
            </Fragment>
        </Helmet >
    )
}

export default Market
