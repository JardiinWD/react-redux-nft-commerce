import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './styles/LiveAuction.css'
import NftCard from './NftCard'
import { NFT__DATA } from '../../assets/data/data.js'



const LiveAuction = () => {
    return (
        <section>
            {/* Container */}
            <Container>
                {/* Row */}
                <Row>
                    {/* lg='12' */}
                    <Col lg='12' className="mb-5">
                        <div className="live_auction_top d-flex align-items-center justify-content-between">
                            <h3>Live Auction</h3>
                            {/* Market Link */}
                            <span>
                                <Link to='/market'>Explore More</Link>
                            </span>
                        </div>
                    </Col>
                    {
                        NFT__DATA.slice(0, 4).map((item, index) => {
                            return (
                                /* lg='3' */
                                <Col lg='3' md='6' sm='6' className="gy-4">
                                    <NftCard key={index} item={item} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default LiveAuction
