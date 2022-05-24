import React, { useEffect } from 'react'
import BannerMarket from '../../components/BannerMarket'
import FirstCollection from '../../components/FirstCollection'
import TopDrops from '../../components/TopDrops'

export default function Marketplace () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <BannerMarket />
      <h2>watch OUR FIRST NF<span>T</span>  <br /> COLLECTION TFT<span>T</span> </h2>
      <TopDrops />
      <FirstCollection />
    </div>
  )
}
