import { useState } from 'react'
import './App.css'
import NavBar from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AstrologyPage from './Pages/AstrologyPage'

const locations = ['new york', 'london', 'paris'];

function App() {


  return (
    <>
      <NavBar title="Weather Watchers" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/astrology" element={<AstrologyPage />} />
      </Routes>
    </>
  )
}

export default App
