import React, { useEffect } from 'react'
import BannerProducer from '../../components/BannerProducer'
import Richard from '../../components/Richard'
import TerryStone from '../../components/TerryStone'
import { Text } from '../../components/TerryStone/styles'
import VideoSection from '../../components/VideoSection'
import { BgFinalText, ProducerTitle } from './styles'
import Seo from '../../components/Seo'

export default function Producer () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Seo title='Producer' />
      <BannerProducer />
      <TerryStone />
      <Richard />
      <ProducerTitle>
      production
      </ProducerTitle>
      <VideoSection />
      <BgFinalText>
        <Text>
          <h3><span>Bafta nominated and Raindance best feature winner Terry Stone</span></h3>
          <p>
            Terry Stone began his Acting & Producing career in May
            2003 and over the past 18 years has carved an impressive
            career on both sides of the camera. Terry&apos;s naturalistic
            style of acting has seen him play some memorable leading roles
            such as a corrupt cop Detective Sargent Andy White in the Bafta
            Nominated and Raindance Film Festival Award winning &#34;Rollin&apos; With
            The Nines&#34;; Tony Tucker in the Rise of The Footsoldier True Crime
            Film Franchise and as Jack Spot in the 1930&apos;s - 1950&apos;s period crime
            film &#34;Once Upon a Time in London&#34;.
          </p>
          <p>
            TALES FROM THE TRAP the UK&apos;s first ever Urban Film & Television
            Franchisewill leverage from the anticipated exponential growing
            demand of digital assets in the Film, Television, social media,
            music and the graphic/art content industries.
          </p>
          <p>
            TFTT will create a market place for the sale and resale of the Film
            & Television franchise assets and all related content through
            amongst others the highly sort after non fungible tokens. TFTT will
            commercialize through tokenomics and create digital intellectual
            property for the benefit of the TFTT loyal fanbase.&#34;
          </p>
          <p>
            <strong>
              Anyone and everyone will have the opportunity to become
              a Part Shareholder in the TFTT Film & Television franchise.
            </strong>
          </p>
        </Text>
      </BgFinalText>
    </>
  )
}
