import { useEffect, useState } from "react";
import { handleFetch } from "../../utils";
import { API_KEY } from "../../config";


const locations = ['new york', 'london', 'tokyo'];

// fetching multiple 
function WeatherContainer({ setError }) {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const weatherResponses = await Promise.all(
        locations.map(async (location) => {
          const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`);
          if (error) setError(error);
          return data;
        })
      );
      setWeatherData(weatherResponses);
    };

    fetchWeatherData();
  }, [setError]);

  return (
    <div className="weatherDataContainer">
      {weatherData.length > 0 ? (
        weatherData.map((weather, index) => (
          <div className="weatherIdxContainer" key={index}>
            <h3 className="nameLocation">{weather.location.name}</h3>
            <p>{weather.current.condition.text}</p>
            <p>{Math.floor(weather.current.temp_f)} °F</p>


            <p>Feels like: {Math.floor(weather.current.feelslike_f)} °F</p>
            <p>Wind Speed (mph): {Math.floor(weather.current.wind_mph)}</p>
            <p>(kph): {Math.floor(weather.current.wind_kph)}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherContainer