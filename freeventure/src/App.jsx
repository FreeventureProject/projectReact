import { useState } from 'react'
import './App.css'
import WeatherContainer from './components/WeatherContainer'
import NavBar from './components/Navigation'

const locations = ['new york', 'london', 'paris'];

function App() {
  const [error, setError] = useState(null)

  return (
    <>
      <NavBar title="Weather Watchers" />
      <WeatherContainer setError={setError} />

      <h2>HELLO</h2>
    </>
  )
}

export default App
