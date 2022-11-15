import React from 'react'
import Routers from '../../routes/Routers'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Layout = () => {
    return (
        <>
            {/* Header components */}
            <Header />
            {/* Routers */}
            <div>
                <Routers />
            </div>
            {/* Footer Components */}
            <Footer />
        </>
    )
}

export default Layout
