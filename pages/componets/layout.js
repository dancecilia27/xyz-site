import React  from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({Children}) {
    return (
        <div className="bg-purple-900">
            <Navbar/>
            {Children}
            <Footer/>
        </div>
    )
}
