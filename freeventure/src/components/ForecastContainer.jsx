
function ForecastContainer({ forecast }) {
  return (
    <div className="forecastContainer">
      {forecast.location && (
        <>
          <h3 className="forecastHeader">{forecast.location.name}</h3>
          <ul className="forecastList">
            {forecast.forecast.forecastday.map((day, indx) => (
              <li key={indx}>
                <h4>{day.date}</h4>
                <p>{day.day.maxtemp_f}</p>
                <p>{day.day.mintemp_f}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ForecastContainer
