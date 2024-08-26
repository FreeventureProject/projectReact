// fetching astronomy
function AstronomyContainer({ astronomyData }) {
  return (
    <div>
      {astronomyData.location && (
        <>
          <h3>{astronomyData.location.name}</h3>
          <p>{astronomyData.astronomy.astro.sunrise}</p>
          <p>{astronomyData.astronomy.astro.sunset}</p>
        </>
      )}
    </div>
  )
}

export default AstronomyContainer