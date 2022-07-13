import React from 'react'
import PaymentCheckoutForm from '../../components/PaymentCheckoutForm'
import Seo from '../../components/Seo'
import { BackgroundBanner } from './styles'

export default function Payment2 () {
  return (
    <>
      <Seo title="Checkout Payment" />
      <BackgroundBanner>
        <h2>Checkout Payment</h2>
      </BackgroundBanner>
      <PaymentCheckoutForm />
    </>
  )
}
