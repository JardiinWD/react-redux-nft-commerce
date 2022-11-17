
import React from 'react'
import './styles/StepSection.css'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const STEP_DATA = [
    {
        title: 'Setup your wallet',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nibh in urna efficitur commodo.',
        icon: 'ri-wallet-line'
    },
    {
        title: 'Create your collection',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nibh in urna efficitur commodo.',
        icon: 'ri-layout-masonry-line'
    },
    {
        title: 'Add your NFTs',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nibh in urna efficitur commodo.',
        icon: 'ri-image-line'
    },
    {
        title: 'List them for Sales',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nibh in urna efficitur commodo.',
        icon: 'ri-list-check'
    },
]


const StepSection = () => {
    return (
        <section>
            {/* Container */}
            <Container>
                {/* Row */}
                <Row>
                    {/* lg='12' */}
                    <Col lg='12' className="mb-4">
                        <h3 className="step_title">Create and Sell your NFTs</h3>
                    </Col>
                    {
                        STEP_DATA.map((item, index) => {
                            return (
                                /* lg='3' */
                                <Col key={index} lg='3' md='4' sm='6' className='gy-4'>
                                    {/* single_item */}
                                    <div className="single_step_item">
                                        <span>
                                            <i className={item.icon}></i>
                                            {/* step_item_content */}
                                            <div className="step_item_content">
                                                {/* Setup your wallet */}
                                                <h5><Link to='/wallet'>{item.title}</Link></h5>
                                                {/* Sentence */}
                                                <p className="mb-0">{item.desc}</p>
                                            </div>
                                        </span>
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

export default StepSection
