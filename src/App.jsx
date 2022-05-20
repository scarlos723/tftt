
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import '@/styles/App.css'
import Marketplace from './pages/Marketplace'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route index element={<Home />} />
        <Route path='/marketplace' element={<Marketplace/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
