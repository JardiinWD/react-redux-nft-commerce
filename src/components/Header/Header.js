import React from 'react'
import './Header.css'
import { Container, NavItem } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'

const NAV_LINKS = [
    {
        display: 'Home',
        url: '/home'
    },
    {
        display: 'Market',
        url: '/market'
    },
    {
        display: 'Create',
        url: '/create'
    },
    {
        display: 'Contact',
        url: '/contact'
    },
]


const Header = () => {
    return (
        /* header */
        <header className="header">
            {/* Container */}
            <Container>
                {/* navigation */}
                <div className="navigation">
                    {/* logo */}
                    <div className='logo'>
                        {/* d-flex gap-2 align-items-center */}
                        <h2 className="d-flex gap-2 align-items-center">
                            {/* ri-fire-fill */}
                            <span><i className="ri-fire-fill"></i></span>
                            NFTs
                        </h2>
                    </div>
                    {/* nav_menu */}
                    <div className="nav_menu">
                        {/* nav_list */}
                        <ul className="nav_list">
                            {/* Nav Links map */}
                            {
                                NAV_LINKS.map((link, index) => {
                                    return (
                                        /* nav_item */
                                        <li className="nav_item" key={index}>
                                            {/* NavLink */}
                                            <NavLink to={link.url} className={navClass => navClass.isActive ? 'active' : ''} > {link.display}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* nav_right */}
                    <div className="nav_right d-flex align-items-center gap-5">
                        {/* btn */}
                        <button className="btn d-flex gap-2 align-items-center">
                            {/* ri-wallet-line */}
                            <span>
                                <i className="ri-wallet-line"></i>
                            </span>
                            {/* d-flex gap-2 align-items-center */}
                            <Link to='/wallet'>
                                Connect Wallet
                            </Link>
                        </button>
                        {/* mobile_menu */}
                        <span className="mobile_menu">
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header >
    )
}

export default Header
