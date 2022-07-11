import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// Components

// Styles
import { Section, Container, Contain, TotalContainer, Button, ButtonsContainer } from './styles'
// Form

import StripeButton from '../StripeButton'

export default function PaymentCheckoutForm () {
  const location = useLocation()
  const navigate = useNavigate()

  const [transactionToken, setTransactionToken] = useState('')

  const total = (230).toFixed(2)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const q = params.get('token')
    setTransactionToken(q)
  }, [])

  return (
    <Section>
      <Container>
        <Contain noValidate>
          <TotalContainer>
            <p>Payment total</p>
            <p>USD {total}</p>
          </TotalContainer>
        </Contain>
        <ButtonsContainer>

          <>
            <div>
              <StripeButton amount={total} currency='USD' token={transactionToken}/>
            </div>
            {/* <form action='https://www.coinpayments.net/index.php' method='post' target='_blank' style={{ width: '100%' }}>
                <input type='hidden' name='cmd' value='_pay' />
                <input type='hidden' name='reset' value='1' />
                <input type='hidden' name='merchant' value={import.meta.env.VITE_COINPAYMENTS_MERCHANT_ID || ''} />
                <input type='hidden' name='item_name' value='FilmCoin' />
                <input type='hidden' name='invoice' value={transactionToken || ''} />
                <input type='hidden' name='currency' value={currency.name} />
                <input type='hidden' name='amountf' value={currency.value} />
                <input type='hidden' name='quantity' value={watchTokenAmount} />
                <input type='hidden' name='allow_quantity' value='0' />
                <input type='hidden' name='want_shipping' value='0' />
                <input type='hidden' name='success_url' value='https://thefilmcoin.io/#/success' />
                <input type='hidden' name='allow_extra' value='0' />
                <input type='image' src='https://www.coinpayments.net/images/pub/buynow-wide-yellow.png' alt='Comprar ahora con CoinPayments.net' style={{ display: 'block', width: '100%' }} />
              </form> */}
          </>
          <Button
            onClick={() => navigate('/')}
            variant='secondary'
          >
            Cancel
          </Button>
        </ButtonsContainer>

      </Container>
    </Section>
  )
}