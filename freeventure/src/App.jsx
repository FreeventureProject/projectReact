import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/Navigation'
import SearchBar from './components/Searchbar'
import { API_KEY } from '../config'
import { handleFetch } from '../utils'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AstrologyPage from './Pages/AstrologyPage'

// const locations = ['new york', 'london', 'paris'];

function App() {

  const [weather, setWeather] = useState([])
  const [error, setError] = useState(null)



  const handleSubmit = async (location) => {
    event.preventDefault();
    const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`)
    if (data) setWeather(data)
    if (error) setError(error)
  }

  if (error) return <p>{error.message}</p>

  useEffect(() => {
    console.log('TEST:', weather)
  }, [weather])

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
