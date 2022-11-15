import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import FooterLinks from './FooterLinks'
import FooterIcons from './FooterIcons'


// My Accounts Array
const MY_ACCOUNTS = [
    {
        display: 'Author Profile',
        url: '/seller-profile'
    },
    {
        display: 'Create Item',
        url: '/create'
    },
    {
        display: 'Collection',
        url: '/market'
    },
    {
        display: 'Edit Profile',
        url: '/edit-profile'
    },
]

// Resources Array
const RESOURCES = [
    {
        display: 'Help Center',
        url: '#'
    },
    {
        display: 'Partner',
        url: '#'
    },
    {
        display: 'Community',
        url: '#'
    },
    {
        display: 'Activity',
        url: '#'
    },
]

// Company Array
const COMPANY = [
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Career',
        url: '#'
    },
    {
        display: 'Ranking',
        url: '#'
    },
    {
        display: 'Contact Us',
        url: '/contact'
    },
]

// Social Array
const SOCIAL = [
    {
        redirect: '#',
        icon: 'ri-facebook-line'
    },
    {
        redirect: '#',
        icon: 'ri-instagram-line'
    },
    {
        redirect: '#',
        icon: 'ri-twitter-line'
    },
    {
        redirect: '#',
        icon: 'ri-telegram-line'
    },
    {
        redirect: '#',
        icon: 'ri-discord-line'
    },
]

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        /* footer */
        <footer className="footer">
            {/* Container */}
            <Container>
                {/* Row */}
                <Row>
                    {/* lg='3' md='6' sm='6' */}
                    <Col lg='3' md='6' sm='6'>
                        {/* logo */}
                        <div className='logo'>
                            {/* d-flex gap-2 align-items-center */}
                            <h2 className="d-flex gap-2 align-items-center">
                                {/* ri-fire-fill */}
                                <span><i className="ri-fire-fill"></i></span>
                                NFTs
                            </h2>
                            {/* Sentence */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis euismod vulputate urna eget accumsan.
                                Aliquam pharetra, tortor nec pulvinar efficitur.
                            </p>
                        </div>
                    </Col>
                    {/* lg='2' md='3' sm='6' */}
                    <Col lg='2' md='3' sm='6'>
                        {/* FooterLinks component */}
                        <FooterLinks data={MY_ACCOUNTS} title='My Accounts' />
                    </Col>
                    {/* lg='2' md='3' sm='6' */}
                    <Col lg='2' md='3' sm='6'>
                        {/* FooterLinks component */}
                        <FooterLinks data={RESOURCES} title='Resources' />
                    </Col>
                    {/* lg='2' md='3' sm='6' */}
                    <Col lg='2' md='3' sm='6'>
                        {/* FooterLinks component */}
                        <FooterLinks data={COMPANY} title='Company' />
                    </Col>
                    {/* lg='2' md='3' sm='6' */}
                    <Col lg='3' md='3' sm='6'>
                        <h5>Newsletter</h5>
                        {/* newsletter */}
                        <input type="text" className="newsletter" placeholder='Email' />
                        {/* social_links */}
                        <div className="social_links d-flex gap-3 align-items-center">
                            {
                                SOCIAL.map((item, index) => {
                                    // Get the destructuring data from here
                                    const { redirect, icon } = item
                                    // Return the components with their props
                                    return (
                                        <FooterIcons redirect={redirect} icon={icon} key={index} />
                                    )
                                })
                            }
                        </div>
                    </Col>
                    {/* lg='12' */}
                    <Col lg='12' className="mt-4 text-center">
                        {/* copyright */}
                        <p className="copyright">
                            Copyright {year}, Developed by Alessandro Pecorilla
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
