import React, { useEffect } from 'react'

import BannerHome from '@/components/BannerHome'
import BeInTheFilm from '@/components/BeInTheFilm'
import JoinOurWaitList from '@/components/JoinOurWaitList'
import Sinopsis from '@/components/Sinopsis'
import StepInto from '@/components/StepInto'
import VideoSection from '@/components/VideoSection'

export default function Home () {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  return (
    <div>
      <BannerHome />
      <JoinOurWaitList />
      <VideoSection />
      <Sinopsis />
      <BeInTheFilm />
      <StepInto />
    </div>
  )
}
