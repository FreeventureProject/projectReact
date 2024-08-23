import { useEffect, useState } from "react";
import { handleFetch } from "../../utils";
import { API_KEY } from "../../config";

// fetching astronomy
function AstronomyContainer({ astronomyData, setAstronomy, setError }) {
  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${location}&dt=`)
      if (data) setAstronomy(data)
      if (error) setError(error)

      console.log(data)
    }

    doFetch();

  }, [])

  // if (error) return <p>{error.message}</p>

  return (
    <div>
      {astronomyData.location && (
        <>
          <h3>{astronomyData.location.name}</h3>
          <p></p>
        </>
      )}
    </div>
  )
}

export default AstronomyContainer