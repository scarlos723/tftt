import { useEffect } from 'react'

import Seo from '@/components/Seo'
import ErrorCardPayment from '../../components/ErrorCardPayment'
import { BackgroundBanner } from './styles'

export default function ErrorPayment () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main>
      <Seo
        title="Error Payment"
      />
      <BackgroundBanner>
        <h2>Payment</h2>
      </BackgroundBanner>
      <ErrorCardPayment />
    </main>
  )
}
