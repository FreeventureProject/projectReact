import { useState } from 'react'
import './App.css'
import WeatherContainer from './components/fetchingData'

function App() {
  const [game, setGame] = useState()
  const [error, setError] = useState(null)

  return (
    <>
      <WeatherContainer setError={setError} setGame={setGame} />
      <header className='headerNav'>
        <nav>

        </nav>
      </header>

      <h2>HELLO</h2>
    </>
  )
}

export default App
