import React from 'react'
import PaymentContactInfoForm from '../../components/PaymentContactInfoForm'
import Seo from '@/components/Seo'
import { BackgroundBanner } from './styles'
export default function Payment1 () {
  return (
    <>
      <Seo
        title="Payment Form"/>
      <BackgroundBanner>
        <h2>Payment</h2>
      </BackgroundBanner>
      <PaymentContactInfoForm />
    </>
  )
}
