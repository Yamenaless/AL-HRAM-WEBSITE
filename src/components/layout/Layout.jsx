import React from 'react'
import Navbar from '../navigation/Navbar'

const Layout = ({ children }) => {
    return (
        <div className='container mx-auto relative '>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
