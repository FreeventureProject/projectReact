import { useState } from "react"


const SearchBar = ({ handleSubmit }) => {

  const [value, setValue] = useState('');

  const onSubmit = () => {
    handleSubmit(value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="location-search">Find it here! </label>
      <input type="text" id="location-search" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" class="search-button">Search</button>
    </form>
  )
}

export default SearchBar