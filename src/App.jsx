
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import '@/styles/App.css'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route index element={<Home />} />

      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
