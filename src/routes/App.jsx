import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Components
import '@/styles/App.css'
import Home from '@/pages/Home'
// import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const App = () => {
  return (

    <BrowserRouter>

      <Routes>

        <Route index path='/' element={<Home />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
