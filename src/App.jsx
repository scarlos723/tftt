
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Marketplace from './pages/Marketplace'
import Terms from '@/pages/Terms'
import Register from '@/pages/Register'
import Success from '@/pages/Success'
import AboutUs from './pages/AboutUs'
import News from './pages/News/ index'
import Events from './pages/Events'
import Producer from './pages/Producer'
import MiniPopup from './components/MiniPopup'
import Filmcoin from './pages/Filmcoin'

import '@/styles/App.css'
import { useEffect, useState } from 'react'
import ErrorPage from './pages/ErrorPage'

function App () {
  const [gradient, setGradient] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', e => {
      // console.log('scroll', window.scrollY)
      if (window.scrollY > 32) {
        setGradient(true)
      } else {
        setGradient(false)
      }
    })
  }, [])
  return (
    <BrowserRouter>
      <Navbar gradient={gradient}/>
      <MiniPopup />
      <Routes >
        <Route index element={<Home />} />
        <Route path='/marketplace' element={<Marketplace/>}/>
        <Route path='/terms' element={<Terms />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/news' element={<News />} />
        <Route path='/events' element={<Events />} />
        <Route path='/producer' element={<Producer />} />
        <Route path='/register' element={<Register />} />
        <Route path='/success' element={<Success />} />
        <Route path='/filmcoin' element={<Filmcoin />} />
        <Route path='/errorpage' element={<ErrorPage />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
