import React from 'react'
import './styles/SellerSection.css'
import { Container, Row, Col } from 'reactstrap'
import ava01 from '../../assets/images/ava-01.png'
import { SELLER__DATA } from '../../assets/data/data'


const SellerSection = () => {
    return (
        <section>
            {/* Container */}
            <Container>
                {/* Row */}
                <Row>
                    {/* lg='12' */}
                    <Col lg='12' className="mb-5">
                        {/* seller_section-title */}
                        <div className="seller_section-title">
                            <h3>Top Seller</h3>
                        </div>
                    </Col>
                    {
                        SELLER__DATA.map((item, index) => {
                            return (
                                <Col lg='2' md='3' sm='4' xs='6' key={item.id} className="mb-4">
                                    {/* single_seller_card */}
                                    <div className="single_seller_card d-flex align-items-center gap-3">
                                        {/* seller_img */}
                                        <div className="seller_img">
                                            <img src={item.sellerImg} alt="Seller" className="w-100" />
                                        </div>
                                        {/* seller_content */}
                                        <div className="seller_content">
                                            <h6>{item.sellerName}</h6>
                                            <h6>{item.currentBid}ETH</h6>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default SellerSection
