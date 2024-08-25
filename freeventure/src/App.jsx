import './App.css'
import NavBar from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AstrologyPage from './Pages/AstrologyPage'
import SearchPage from './Pages/SearchPage'
import ForecastPage from './Pages/ForecastPage'
import { useState } from 'react'
import React from 'react'

export const ThemeContext = React.createContext()

function App() {

  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <NavBar title="Weather Watch" />
        <Routes>
          <Route path="/" element={<HomePage />} /> updatee
          <Route path="/astronomy" element={<AstrologyPage />} />
          <Route path="/forecast" element={<ForecastPage />} />
          <Route path="/astrology" element={<AstrologyPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App
