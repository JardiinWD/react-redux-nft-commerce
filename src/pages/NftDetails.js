import React, { Fragment } from 'react'
import CommonSection from '../components/UI/CommonSection'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../assets/data/data'
import Helmet from '../components/Utils/Helmet'
import './styles/NftDetails.css'
import LiveAuction from '../components/UI/LiveAuction'
import { Link } from 'react-router-dom'



const NftDetails = () => {
    // I take the query ID thanks to useParams
    const { id } = useParams()
    // Then I will try to find the item with the same id
    const singleNft = NFT__DATA.find(item => item.id === id)


    return (
        <Helmet title={singleNft.title}>
            <Fragment>
                {/* CommonSection */}
                <CommonSection title={singleNft.title} />
                {/* Section */}
                <section>
                    {/* Container */}
                    <Container>
                        {/* Row */}
                        <Row>
                            {/* lg='6' */}
                            <Col lg='6' md='6' sm='6'>
                                {/* singleNft.imgUrl */}
                                <img src={singleNft.imgUrl} alt={singleNft.title} className="w-100 single-nft-img" />
                            </Col>
                            {/* lg='6' */}
                            <Col lg='6' md='6' sm='6'>
                                {/* single_nft_content */}
                                <div className="single_nft_content">
                                    {/* Title */}
                                    <h2>{singleNft.title}</h2>
                                    {/* d-flex align-items-center justify-content-between */}
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                                        {/* d-flex align-items-center gap-4 */}
                                        <div className="d-flex align-items-center gap-4 single_nft_seen">
                                            {/* ri-eye-line */}
                                            <span><i className='ri-eye-line'></i> 234</span>
                                            {/* ri-heart-line */}
                                            <span><i className='ri-heart-line'></i> 1234</span>
                                        </div>
                                        {/* d-flex align-items-center gap-4 */}
                                        <div className="d-flex align-items-center gap-2 single_nft_more">
                                            {/* ri-send-plane-line */}
                                            <span><i className='ri-send-plane-line'></i></span>
                                            {/* ri-more-2-line */}
                                            <span><i className='ri-more-2-line'></i></span>
                                        </div>
                                    </div>
                                    {/* nft_creator */}
                                    <div className="nft_creator d-flex gap-3 align-items-center">
                                        {/* creator_img */}
                                        <div className="creator_img">
                                            <img src={singleNft.creatorImg} alt={singleNft.creator} className="w-100" />
                                        </div>
                                        {/* Creator Detail */}
                                        <div className="creator_detail">
                                            <p>Created By</p>
                                            <h6>{singleNft.creator}</h6>
                                        </div>
                                    </div>
                                    {/* Description */}
                                    <p className="my-4">{singleNft.desc}</p>
                                    {/* button */}
                                    <button className="singleNft-btn d-flex align-items-center gap-2 w-100">
                                        {/* ri-shopping-bag-line */}
                                        <i className="ri-shopping-bag-line"></i>
                                        {/* Link */}
                                        <Link to='/wallet'>Place a Bid</Link>
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* LiveAuction */}
                <LiveAuction />
            </Fragment>
        </Helmet>
    )
}

export default NftDetails
