import './App.css'
import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import NavBar from './components/Navigation'
import HomePage from './Pages/HomePage'
import AstrologyPage from './Pages/AstrologyPage'
import SearchPage from './Pages/SearchPage'
import ForecastPage from './Pages/ForecastPage'
import { ThemeProvider } from './ThemeContext'
import ThemeComponent from './components/ThemeComponent'
import { useTheme } from './ThemeContext'




function AppContent() {
  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#EBEBEB' : '#1B2222',
    color: darkTheme ? '#173B3B' : '#CEDEDA',
    minHeight: '100vh',
    transition: 'background-color 0.3s, color 0.3s',
  };

  return (
    <div style={themeStyles}>
      <NavBar title="Weather Watch" />
      <ThemeComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/astronomy" element={<AstrologyPage />} />
        <Route path="/forecast" element={<ForecastPage />} />
        <Route path="/astrology" element={<AstrologyPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}


function App() {

  return (
    <>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </>
  )
}

export default App
