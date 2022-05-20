import { useState } from 'react'
import BannerHome from '../../components/BannerHome'
import BeInTheFilm from '../../components/BeInTheFilm'
import JoinOurWaitList from '../../components/JoinOurWaitList'
import Popup from '../../components/Popup'
import Sinopsis from '../../components/Sinopsis'
import StepInto from '../../components/StepInto'
import VideoSection from '../../components/VideoSection'

export default function Home () {
  const [showPopup, setShowPopup] = useState(true)
  return (
    <div>
      {
        showPopup && <Popup setShowPopup={setShowPopup} />
      }
      <BannerHome />
      <JoinOurWaitList />
      <VideoSection />
      <Sinopsis />
      <BeInTheFilm />
      <StepInto />
    </div>
  )
}
