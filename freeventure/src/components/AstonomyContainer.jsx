import { useEffect, useState } from "react";
import { handleFetch } from "../../utils";
import { API_KEY } from "../../config";
import SunriseIcon from "../assets/SunriseIcon.png"

// fetching astronomy
function AstronomyContainer({ astronomyData }) {
  // useEffect(() => {
  //   const doFetch = async () => {
  //     const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${location}&dt=`)
  //     if (data) setAstronomy(data)
  //     if (error) setError(error)

  //     console.log(data)
  //   }

  //   doFetch();

  // }, [])

  // if (error) return <p>{error.message}</p>

  return (
    <div>
      {astronomyData.location && (
        <>
          <h3>{astronomyData.location.name}</h3>
          <div className="sunrise">
            <p>{astronomyData.astronomy.astro.sunrise}</p>
            <img id="sun" src={SunriseIcon} alt="Sun" />
          </div>
          <p>{astronomyData.astronomy.astro.sunset}</p>
        </>
      )}
    </div>
  )
}

export default AstronomyContainer