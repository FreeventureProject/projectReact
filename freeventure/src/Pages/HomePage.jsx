import SearchBar from "../components/Searchbar"
import WeatherContainer from "../components/WeatherContainer"
import { useState } from "react"
function HomePage() {
  const [error, setError] = useState(null)
  return (
    <>
      <h2>What's The Weather? </h2>
      <SearchBar />
      <WeatherContainer setError={setError} />
    </>
  )

}

export default HomePage