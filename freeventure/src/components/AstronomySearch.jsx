import { useState } from "react";

const AstronomySearch = ({ onSubmit }) => {

  const [query, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="formContainer">
      <form onSubmit={(event) => onSubmit(event, query)}>
        <label htmlFor="searchInput">Enter a Search Term </label>
        <input type="text" className="searchBarInput" id="searchInput" value={query} onChange={handleChange} placeholder="Enter Location" />
        <button type="submit" className="btn btn-success">Search</button>
      </form>
    </div>
  )
}

export default AstronomySearch