import SunriseIcon from "../assets/SunriseIcon.png"

// fetching astronomy
function AstronomyContainer({ astronomyData }) {
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