import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import '@/styles/App.css'
import Home from '@/pages/Home'
// import ImJustBaitPage from '@pages/ImJustBait'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>

        <Route index path='/' element={<Home />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
