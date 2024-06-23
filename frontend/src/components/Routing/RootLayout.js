  import React from 'react'
import Navb from '../Navb/Navb'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
        <Navb/>
        <div style={{minHeight:"80vh"}}>
        <Outlet />
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout