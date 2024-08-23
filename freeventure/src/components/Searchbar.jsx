import { useState } from "react"
import { useNavigate } from "react-router-dom"


const SearchBar = () => {

  const [value, setValue] = useState('');
  const navigate = useNavigate()


  const onSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?query=${value}`)
  }

  return (

    <div className="searchBarContainer">
      <div className="headingWeatherContainer">
        <h2>Today's Weather? </h2>
      </div>
      <div className="formContainer">
        <form onSubmit={onSubmit}>
          <label htmlFor="location-search">Find it here </label>
          <input type="text" id="location-search" value={value} onChange={(e) => setValue(e.target.value)} />
          <button type="submit" class="search-button">Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar