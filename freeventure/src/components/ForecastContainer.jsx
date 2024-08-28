
function ForecastContainer({ forecast }) {
  return (
    <div className="forecastContainer">
      {forecast.location && (
        <div className="forecastListContainer">
          <h3 className="forecastHeader">{forecast.location.name}</h3>
          <ul className="forecastList">
            {forecast.forecast.forecastday.map((day, indx) => (
              <li key={indx}>
                <h4>{day.date}</h4>
                <img src={day.day.condition.icon} alt="" />
                <p>High: {day.day.maxtemp_f} °F</p>
                <p>Low: {day.day.mintemp_f} °F</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ForecastContainer
