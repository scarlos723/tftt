import React from 'react'
import { Outlet } from 'react-router-dom'

import GorillasFooter from '@/components/GorillasFooter'
import GorillasNavbar from '@/components/GorillasNavbar'

function FirstCollection () {
  return (
    <>
      <GorillasNavbar />
      <Outlet />
      <GorillasFooter />
    </>
  )
}

export default FirstCollection
