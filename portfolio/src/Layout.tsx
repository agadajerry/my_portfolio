import React from 'react'
import Footer from './pages/Footer'
import Navbar from './pages/Navbar'

function Layout({children}:{children:React.ReactNode}) {
  return (
    <>
    <Navbar/>
    <div className='mt-4'>
      {children} 

    </div>
      <Footer/>
    </>
  )
}

export default Layout