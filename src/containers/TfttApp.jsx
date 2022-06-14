import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MiniPopup from '@/components/MiniPopup'

function TfttApp ({ gradient }) {
  return (
    <>
      <Navbar gradient={gradient} />
      <MiniPopup />
      <Outlet />
      <Footer />
    </>
  )
}

export default TfttApp
