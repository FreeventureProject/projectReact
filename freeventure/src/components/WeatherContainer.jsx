import { useEffect } from "react";
import { handleFetch } from "../../utils";

// fetching multiple 
function WeatherContainer({ setError, setGame }) {

  useEffect(() => {
    console.log('check test')
    const doFetch = async () => {
      const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/current.json?key=de3930ea69884d4383d220010242108&q=11214&aqi=yes`)
      if (data) setGame(data)
      if (error) setError(error)



      console.log(data)
    }

    doFetch();

  }, [])

}

export default WeatherContainer