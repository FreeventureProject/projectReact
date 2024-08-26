import { useLocation } from 'react-router-dom'
import { API_KEY } from '../../config';
import { handleFetch } from '../../utils';
import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const SearchPage = ({ setError }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParamas = new URLSearchParams(location.search)
  const query = queryParamas.get("query")

  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#1B2222' : '#EBEBEB',
    color: darkTheme ? '#CEDEDA' : '#173B3B',
    minHeight: '100vh',
    transition: 'background-color 0.3s, color 0.3s',
  };


  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=yes`);
      if (error) {
        setError(error);
        setWeatherData(null);
      } else {
        setWeatherData(data);
      }
      setLoading(false);
    };

    if (query) {
      fetchWeatherData();
    }
  }, [query, setError]);

  return (
    <div className="weatherDataContainer">
      {loading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <div className="weatherIdxContainer">
          <h3 className='nameLocation'>{weatherData.location.name}</h3>
          <p>{Math.floor(weatherData.current.temp_f)} °F</p>
          <p>feels like: {Math.floor(weatherData.current.feelslike_f)} °F</p>
          <p>{weatherData.current.condition.text}</p>
        </div>
      ) : (
        <p>No data available for the specified location.</p>
      )}
    </div>
  );

}

export default SearchPage