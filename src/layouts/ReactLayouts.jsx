import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const ReactLayouts = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header  />
            <main className=' grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default ReactLayouts