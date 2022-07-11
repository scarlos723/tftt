import { useEffect } from 'react'

import Seo from '@/components/Seo'
import BannerResponse from '../../components/BannerResponse'
import ErrorCardPayment from '../../components/ErrorCardPayment'

export default function ErrorPayment () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main>
      <Seo
        title="Error Payment"
      />
      <BannerResponse />
      <ErrorCardPayment />
    </main>
  )
}
