import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Styles
import { Section, Container, Contain, TotalContainer, Button, ButtonsContainer } from './styles'
// Form

import StripeButton from '../StripeButton'
import { getPriceETH } from '../../services/apiCoingecko'
import { addMinutes, intervalToDuration } from 'date-fns'

export default function PaymentCheckoutForm () {
  const location = useLocation()
  const navigate = useNavigate()
  const [transactionToken, setTransactionToken] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [priceETH, setPriceETH] = useState(0)
  const [total, setTotal] = useState(0)
  const valueNFT = 0.2 // ETH

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const q = params.get('token')
    setTransactionToken(q)
    calcTotal()
  }, [])

  // counter
  const counterRef = useRef(null)
  useEffect(() => {
    if (!counterRef.current) return
    let futureTime = addMinutes(Date.now(), 3)
    const interval = setInterval(() => {
      const elapsedTime = intervalToDuration({
        start: Date.now(),
        end: futureTime
      })
      counterRef.current.innerHTML = `${elapsedTime.minutes}:${elapsedTime.seconds}`
      if (elapsedTime.minutes === 0 && elapsedTime.seconds === 0) {
        futureTime = addMinutes(Date.now(), 3)
        calcTotal()
        // Execute your code here
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  async function calcTotal () {
    try {
      const dataEth = await getPriceETH()
      if (dataEth) {
        setPriceETH(dataEth.market_data.current_price.usd)
        setTotal(
          (dataEth.market_data.current_price.usd * valueNFT).toFixed(2)
        )
      } else {
        console.log('Error in data ETH', dataEth)
      }
    } catch (error) {
      console.log('Try fetch ETH error:', error)
    }
  }

  return (
    <Section>
      <Container>
        <Contain noValidate>
          <div className='info-coingecko'>
            <p>
              ETH price: {priceETH}. <br /> The price will be reloaded every  3 minutes. (<span ref={counterRef} />)
            </p>
            <a href="https://www.coingecko.com/">Info powered by <span>Coingecko</span></a>
          </div>
          <TotalContainer>
            <p>NFT price</p>

            <p>ETH {valueNFT} / USD {total} </p>
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
