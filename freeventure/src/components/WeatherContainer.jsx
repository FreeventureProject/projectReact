import { useEffect } from "react";
import { handleFetch } from "../../utils";

// fetching multiple 
function WeatherContainer({ weather, setError, setWeather }) {

  useEffect(() => {

    const doFetch = async () => {
      const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/current.json?key=de3930ea69884d4383d220010242108&q=11214&aqi=yes`)
      if (data) setWeather(data)
      if (error) setError(error)



      console.log(data)
    }

    doFetch();

  }, [setWeather, setError])


  return (
    <div>
      {weather && weather.location ? (
        <p>{weather.location.name}</p>,
        <p>{weather.location.region}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )

}

export default WeatherContainer