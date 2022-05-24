import { useState, useEffect } from 'react'
import BannerHome from '../../components/BannerHome'
import BeInTheFilm from '../../components/BeInTheFilm'
import JoinOurWaitList from '../../components/JoinOurWaitList'
import Popup from '../../components/Popup'
import Synopsis from '../../components/Synopsis'
import StepInto from '../../components/StepInto'
import VideoSection from '../../components/VideoSection'

export default function Home () {
  const [showPopup, setShowPopup] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {
        showPopup && <Popup setShowPopup={setShowPopup} />
      }
      <BannerHome />
      <JoinOurWaitList />
      <VideoSection />
      <Synopsis />
      <BeInTheFilm />
      <StepInto />
    </div>
  )
}
