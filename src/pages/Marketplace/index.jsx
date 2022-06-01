import React, { useEffect } from 'react'
import BannerMarket from '../../components/BannerMarket'
import FirstCollection from '../../components/FirstCollection'
import TopDrops from '../../components/TopDrops'
import Seo from '../../components/Seo'

export default function Marketplace () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Seo title='Marketplace' />
      <BannerMarket />
      <h2>TFT<span>T</span> COLLECTION</h2>
      <FirstCollection />
      <TopDrops />
    </div>
  )
}
