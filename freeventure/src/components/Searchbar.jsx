const SearchBar = () => {
  return (
    <form>
      <label htmlFor="search-bar">Find it here </label>
      <input type="text" id="location-search" placeholder="Location" />
      <button type="submit" class="search-button">Search</button>
    </form>
  )
}

export default SearchBar