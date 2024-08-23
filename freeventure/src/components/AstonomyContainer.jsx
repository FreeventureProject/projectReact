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

  if (loading) return <div>Loading...</div>;
  if (astronomyData.length === 0) return <div>No data available</div>;

  return (
    <div>
      <h1>Astronomy Data</h1>
      <ul>
        {astronomyData.map((data, index) => (
          <li key={index}>
            <h2>{data.location.name}</h2>
            <p>Sunrise: {data.astronomy.astro.sunrise}</p>
            <p>Sunset: {data.astronomy.astro.sunset}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default AstronomyContainer