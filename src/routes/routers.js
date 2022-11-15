import React from 'react'
// Import of routing elements
import { Routes, Route, Navigate } from 'react-router-dom'

// Import of my pages
import Home from '../pages/Home'
import Market from '../pages/Market'
import Create from '../pages/Create'
import Contact from '../pages/Contact'
import SellerProfile from '../pages/SellerProfile'
import EditProfile from '../pages/EditProfile'
import Wallet from '../pages/Wallet'
import NftDetails from '../pages/NftDetails'



const routers = () => {
    return (
        <Routes>
            {/* navigate to home */}
            <Route path='/' element={<Navigate to='/home' />} />
            {/* home */}
            <Route path='/home' element={<Home />} />
            {/* Market */}
            <Route path='/market' element={<Market />} />
            {/* Create */}
            <Route path='/create' element={<Create />} />
            {/* contact */}
            <Route path='/contact' element={<Contact />} />
            {/* EditProfile */}
            <Route path='/edit-profile' element={<EditProfile />} />
            {/* SellerProfile */}
            <Route path='/seller-profile' element={<SellerProfile />} />
            {/* Wallet */}
            <Route path='/wallet' element={<Wallet />} />
            {/* NftDetails */}
            <Route path='/market/:id' element={<NftDetails />} />
        </Routes>
    )
}

export default routers
