import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './styles/HeroSection.css'
import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
    return (
        /* hero_section */
        <section className="hero_section">
            {/* Container */}
            <Container>
                {/* Row */}
                <Row>
                    {/* Hero Text Section */}
                    <Col lg='6' md='6'>
                        {/* hero_content */}
                        <div className="hero_content">
                            {/* Title */}
                            <h2>
                                Discover rare digital art and collect
                                <span> sell extraordinary </span>
                                NFTs
                            </h2>
                            {/* Sentence */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque sapien turpis, venenatis ut consequat sed, auctor eu mauris.
                                In sollicitudin vehicula sollicitudin. Quisque nulla tortor.
                            </p>
                            {/* hero_btns */}
                            <div className="hero_btns d-flex align-items-center gap-4">
                                {/* Explore */}
                                <button className='explore_btn d-flex align-items-center gap-2'>
                                    <i className="ri-rocket-line"></i>
                                    <Link to='/market'>Explore</Link>
                                </button>
                                {/* Create */}
                                <button className='create_btn d-flex align-items-center gap-2'>
                                    <i className="ri-ball-pen-line"></i>
                                    <Link to='/create'>Create</Link>
                                </button>
                            </div>
                        </div>
                    </Col>
                    {/* Hero Img */}
                    <Col lg='6' md='6'>
                        {/* hero_img */}
                        <div className="hero_img">
                            {/* Hero Image */}
                            <img src={heroImg} alt="Hero section" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection
