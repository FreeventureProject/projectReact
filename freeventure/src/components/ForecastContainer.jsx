import { useEffect, useState } from "react"
import { API_KEY } from "../../config"
import { handleFetch } from "../../utils"


function ForecastContainer({ forecast, setForecast, setError }) {

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=london&days=5&aqi=yes&alerts=yes`)
      if (data) setForecast(data)
      if (error) setError(error)

      console.log(data)
    }

    doFetch();

  }, [])

  // if (error) return <p>{error.message}</p>

  return (
    <div>
      {forecast.location && (
        <>
          <h3>{forecast.location.name}</h3>
          <p></p>
        </>
      )}
    </div>
  )
}

export default ForecastContainer
