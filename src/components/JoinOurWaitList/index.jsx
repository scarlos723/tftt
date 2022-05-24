import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCountdown } from '../../hooks/useCountdown'
import { Background, Contain, Counter, Section } from './styles'

export default function JoinOurWaitList () {
  const dataCounter = useCountdown()
  const navigate = useNavigate()

  return (
    <Background>
      <Contain>
        <div>
          <h3><span> Don’t miss any details! </span></h3>
          <h2>Join our whitelist today</h2>
        </div>

        <Counter>
          <Section>
            <div className='box-number'>
              <h2 className='style-border'>
                {dataCounter[0].value}
              </h2>
            </div>
            <p>{dataCounter[0].name}</p>
          </Section>
          <h2 className='mid-dots style-border'>:</h2>
          <Section>
            <div className='box-number'>
              <h2 className='style-border'>
                {dataCounter[1].value}
              </h2>
            </div>
            <p>{dataCounter[1].name}</p>
          </Section>
          <h2 className='mid-dots style-border'>:</h2>
          <Section>
            <div className='box-number'>
              <h2 className='style-border'>
                {dataCounter[2].value}
              </h2>
            </div>
            <p>{dataCounter[2].name}</p>

          </Section>
        </Counter>

        <h3>Our first NFT drop is coming...</h3>
        <button
          onClick={() => navigate('/register')}
          className='custom-btn'>register now</button>

      </Contain>

    </Background>
  )
}
