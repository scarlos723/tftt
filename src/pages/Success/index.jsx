import { useEffect } from 'react'

import Seo from '@/components/Seo'
import SuccessfulCard from '@/components/SuccessfulCard'
import BannerResponse from '../../components/BannerResponse'

function Success () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main>
      <Seo
        title="Success"
      />
      <BannerResponse />
      <SuccessfulCard />
    </main>
  )
}

export default Success
