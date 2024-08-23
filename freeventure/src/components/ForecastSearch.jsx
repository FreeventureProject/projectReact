import { useState } from "react";

const ForecastSearch = ({ handleSubmit }) => {

  const [value, setValue] = useState('');

  const onSubmit = () => {
    handleSubmit(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input type="text" className="form-control" id="searchInput" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className="btn btn-success">Search</button>
    </form>
  )
}

export default ForecastSearch