import { useState } from "react";

const ForecastSearch = ({ onSubmit }) => {

  const [query, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={(event) => onSubmit(event, query)}>
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input type="text" className="searchBarInput" id="searchInput" value={query} onChange={handleChange} placeholder="Enter Location" />
      <button type="submit" className="btn btn-success">Search</button>
    </form>
  )
}

export default ForecastSearch