import { useState } from 'react'
import './App.css'
import AllGameContainer from '../fetchingData'

function App() {
  const [game, setGame] = useState()
  const [error, setError] = useState(null)

  return (
    <>
      <AllGameContainer setError={setError} setGame={setGame} />
      <h1>HELLO</h1>
    </>
  )
}

export default App
