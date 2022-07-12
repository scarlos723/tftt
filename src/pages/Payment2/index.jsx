import React, { useRef, useEffect } from 'react'
import PaymentCheckoutForm from '../../components/PaymentCheckoutForm'
import Seo from '../../components/Seo'
import { addMinutes, intervalToDuration } from 'date-fns'
export default function Payment2() {
  const counterRef = useRef(null)
  useEffect(() => {
    if (!counterRef.current) return
    let futureTime = addMinutes(Date.now(), 2)
    let interval = setInterval(() => {
      const elapsedTime = intervalToDuration({
        start: Date.now(),
        end: futureTime,
      })
      counterRef.current.innerHTML = `${elapsedTime.minutes}:${elapsedTime.seconds}`
      if (elapsedTime.minutes === 0 && elapsedTime.seconds === 0) {
        futureTime = addMinutes(Date.now(), 2)
        // Execute your code here
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <Seo title="Checkout Payment" />
      <h1 ref={counterRef} />
      <PaymentCheckoutForm />
    </>
  )
}
