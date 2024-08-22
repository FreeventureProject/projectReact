import { useState } from 'react'
import './App.css'
import WeatherContainer from './components/WeatherContainer'
import NavBar from './components/Navigation'
import SearchBar from './components/Searchbar'

const locations = ['new york', 'london', 'paris'];

function App() {
  const [error, setError] = useState(null)

  return (
    <>
      <NavBar title="Weather Watchers" />
      <WeatherContainer setError={setError} />
      <h2>HELLO</h2>
      <WeatherContainer weather={weather} setError={setError} setWeather={setWeather} />
      <h2>What's The Weather? </h2>
      <SearchBar />
      <WeatherContainer weather={weather} setError={setError} setWeather={setWeather} />
    </>
  )
}

export default App
