
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Marketplace from './pages/Marketplace'
import Terms from '@/pages/Terms'

import '@/styles/App.css'
import AboutUs from './pages/AboutUs'
import News from './pages/News/ index'
import Events from './pages/Events'
import Producer from './pages/Producer'
import MiniPopup from './components/MiniPopup'
import Filmcoin from './pages/Filmcoin'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <MiniPopup />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/marketplace' element={<Marketplace/>}/>
        <Route path='/terms' element={<Terms />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/news' element={<News />} />
        <Route path='/events' element={<Events />} />
        <Route path='/producer' element={<Producer />} />
        <Route path='/filmcoin' element={<Filmcoin />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
