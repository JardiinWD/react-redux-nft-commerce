
import React from 'react'
import './styles/TrendingSection.css'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../../assets/data/data'
import NftCard from './NftCard'

const TrendingSection = () => {
    return (
        <section>
            {/* Container */}
            <Container>
                {/* Row */}
                <Row>
                    {/* lg='12' */}
                    <Col lg='12' className="mb-5">
                        {/* trending_title */}
                        <h3 className="trending_title">Trending</h3>
                    </Col>
                    {
                        NFT__DATA.slice(0, 8).map((item, index) => {
                            return (
                                /* lg='3' md='4' sm='6' */
                                <Col lg='3' md='4' sm='6' key={index} className="mb-4">
                                    {/* NftCard Component */}
                                    <NftCard item={item} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default TrendingSection
