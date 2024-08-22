import { useState } from 'react'
import './App.css'
import WeatherContainer from './components/WeatherContainer'
import NavBar from './components/Navigation'

function App() {
  const [weather, setWeather] = useState([])
  const [error, setError] = useState(null)

  return (
    <>
      <WeatherContainer setError={setError} setGame={setGame} />
      <header className='headerNav'>
        <nav>
        </nav>
      </header>

      <NavBar title="Weather Watchers" />
      <WeatherContainer weather={weather} setError={setError} setWeather={setWeather} />

      <h2>What's The Weather? </h2>
    </>
  )
}

export default App
