import AstronomyContainer from "../components/AstonomyContainer"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchAstrology = ({ setError }) => {
  const [astronomyData, setAstronomyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParamas = new URLSearchParams(location.search)
  const query = queryParamas.get("query")


  useEffect(() => {
    const fetchAstronomyData = async () => {
      setLoading(true);
      const [data, error] = await handleFetch(`http://api.weatherapi.com/v1/astronomy.json?key=${API_KEY}&q=${location}&dt=`);
      if (error) {
        setError(error);
        setAstronomyData(null);
      } else {
        setAstronomyData(data);
      }
      setLoading(false);
    };

    if (query) {
      fetchAstronomyData();
    }
  }, [query, setError]);

  return (
    <>
      <AstronomyContainer />
      <useNavigate />
      <div className="astronomyDataContainer">
        {loading ? (
          <p>Loading...</p>
        ) : astronomyData ? (
          <div className="astronomyIdxContainer">
            <h3 className='nameLocation'>{astronomyData.location.name}</h3>
            <p>{(astronomyData.astro.sunrise)}</p>
            <p>{(astronomyData.astro.sunset)}</p>
          </div>
        ) : (
          <p>No data available for the specified location.</p>
        )}

      </div>
    </>
  )
}

export default AstrologyPage
