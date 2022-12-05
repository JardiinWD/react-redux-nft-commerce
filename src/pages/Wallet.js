import React, { Fragment } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Utils/Helmet'
import { Container, Row, Col } from 'reactstrap'
import './styles/Wallet.css'

const wallet_data = [
    {
        title: 'Bitcoin',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non enim eget metus placerat interdum vitae non erat.',
        icon: 'ri-bit-coin-line'
    },
    {
        title: 'Coinbase',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non enim eget metus placerat interdum vitae non erat.',
        icon: 'ri-coin-line'
    },
    {
        title: 'Metamask',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non enim eget metus placerat interdum vitae non erat.',
        icon: 'ri-money-cny-circle-line'
    },
    {
        title: 'Authereum',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non enim eget metus placerat interdum vitae non erat.',
        icon: 'ri-bit-coin-line'
    },

]


const Wallet = () => {
    return (
        /* title='Wallet' */
        <Helmet title='Wallet'>
            <Fragment>
                {/* CommonSection */}
                <CommonSection title='Connect Wallet' />
                <section>
                    {/* Container */}
                    <Container>
                        {/* Row */}
                        <Row>
                            {/* lg='12' */}
                            <Col lg='12' className="mb-5 text-center">
                                {/* w-50 m-auto */}
                                <div className="w-50 m-auto">
                                    <h3 className="text-light">Connect your wallet</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non enim eget metus placerat interdum vitae non erat. Interdum et.
                                    </p>
                                </div>
                            </Col>
                            {
                                wallet_data.map((item, index) => {
                                    return (
                                        <Col key={index} className="mb-4" lg='3' md='4' sm='6'>
                                            {/* wallet_item */}
                                            <div className="wallet_item">
                                                {/* ri-bit-coin-line */}
                                                <span>
                                                    <i className={item.icon}></i>
                                                </span>
                                                <h5>{item.title}</h5>
                                                {/* Sentence */}
                                                <p>{item.desc}</p>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </section>
            </Fragment>
        </Helmet>
    )
}

export default Wallet
