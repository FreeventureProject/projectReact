import AstronomyContainer from "../components/AstonomyContainer"
import { useState } from "react";
import AstronomySearch from "../components/AstronomySearch";

const AstronomyPage = () => {
  const [astronomyData, setAstronomy] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (query) => {
    event.preventDefault();
    const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${query}&dt=`)
    if (data) setAstronomy(data)
    if (error) setError(error)


  }

  return (
    <div>
      <AstronomySearch handleSubmit={handleSubmit} />
      <AstronomyContainer astronomyData={astronomyData} setAstronomy={setAstronomy} setError={setError} />
    </div>
  )
}


export default AstronomyPage
