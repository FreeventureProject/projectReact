import './App.css'
import NavBar from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AstrologyPage from './Pages/AstrologyPage'
import SearchPage from './Pages/SearchPage'
import ForecastPage from './Pages/ForecastPage'


function App() {

  return (
    <>
      <NavBar title="Weather Watch" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forecast" element={<ForecastPage />} />
        <Route path="/astrology" element={<AstrologyPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  )
}

export default App
