
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Marketplace from './pages/Marketplace'
import Terms from '@/pages/Terms'

import '@/styles/App.css'
import AboutUs from './pages/AboutUs'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/marketplace' element={<Marketplace/>}/>
        <Route path='/terms' element={<Terms />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
