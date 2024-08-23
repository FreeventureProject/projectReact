import { useState } from "react"
import ForecastSearch from "../components/ForecastSearch"
import ForecastContainer from "../components/ForecastContainer"
import { handleFetch } from "../../utils"
import { API_KEY } from "../../config"



const ForecastPage = () => {

  const [forecast, setForecast] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (query) => {
    event.preventDefault();
    const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=5&aqi=yes&alerts=yes`)
    if (data) setForecast(data)
    if (error) setError(error)


  }

  return (
    <div>
      <ForecastSearch handleSubmit={handleSubmit} />
      <ForecastContainer forecast={forecast} setError={setError} setForecast={setForecast} />
    </div>
  )
}

export default ForecastPage