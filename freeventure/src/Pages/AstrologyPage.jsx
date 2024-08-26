import AstronomyContainer from "../components/AstonomyContainer"
import { useState } from "react";
import AstronomySearch from "../components/AstronomySearch";
import { handleFetch } from "../../utils";
import { API_KEY } from "../../config";
import AstronomyWebpage from "../assets/AstronomyWebpage.jpg";


const AstronomyPage = () => {
  const [astronomyData, setAstronomy] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (event, query) => {
    event.preventDefault();
    if (!query) {
      setError("Please enter a location")
      return;
    };
    const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${query}&dt=`)
    if (data) {
      setAstronomy(data)
      setError(null)
    } else {
      setError(error)
    }
  }

  return (
    <div>
      <img src={AstronomyWebpage} alt="Planets" />
      <AstronomySearch onSubmit={handleSubmit} />
      {error && <p>{error}</p>}
      {astronomyData ? (
        <AstronomyContainer astronomyData={astronomyData} />
      ) : (
        !error && <p>Please enter a location to see the astronomy</p>
      )}
    </div>
  )
}


export default AstronomyPage
