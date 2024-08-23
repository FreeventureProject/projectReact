import { useEffect, useState } from "react";
import { handleFetch } from "../../utils";
import { API_KEY } from "../../config";

// fetching astronomy
function AstronomyContainer({ setError }) {
  const [astronomyData, setAstronomyData] = useState([]);

  useEffect(() => {
    const fetchAstronomyData = async () => {
      const AstronomyResponses = await Promise.all(
        locations.map(async (location) => {
          const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${location}&dt=`);
          if (error) setError(error);
          return data;
        })
      );
      setAstronomyData(AstronomyResponses);
    };

    fetchAstronomyData();
  }, [setError]);

}

export default AstronomyContainer