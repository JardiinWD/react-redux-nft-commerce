import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './styles/LiveAuction.css'
// Live Auction IMG
import img01 from '../../assets/images/img-01.jpg'
// userImg
import ava01 from '../../assets/images/ava-01.png'


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
                    {/* lg='3' */}
                    <Col lg='3'>
                        {/* single_nft_card */}
                        <div className="single_nft_card">
                            {/* nft_img */}
                            <div className="nft_img">
                                <img src={img01} alt="" className="w-100" />
                            </div>
                            {/* nft_content */}
                            <div className="nft_content">
                                {/* nft_title */}
                                <h5 className="nft_title fw-bold">Travel Monkey Club</h5>
                                {/* creator_info */}
                                <div className="creator_info-wrapper d-flex gap-3">
                                    {/* creator_img */}
                                    <div className="creator_img">
                                        <img src={ava01} alt="Avatar User" className="w-100" />
                                    </div>
                                    {/* creator_info */}
                                    <div className='creator_info w-100 d-flex align-items-center justify-content-between'>
                                        {/* Created By */}
                                        <div>
                                            <h6>Created by</h6>
                                            <p>Trista Francis</p>
                                        </div>
                                        {/* Current Bid */}
                                        <div>
                                            <h6>Current Bid</h6>
                                            <p>4.89 ETH</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Bid Button */}
                                <div className="mt-3 d-flex align-items-center justify-content-between">
                                    {/* bid_btn */}
                                    <button className="bid_btn d-flex align-items-center gap-1">
                                        <i className="ri-shopping-bag-line"></i>
                                        Place Bid
                                    </button>
                                    {/* View History */}
                                    <span className="history_link">
                                        <Link to='#'>View History</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LiveAuction
