import React from "react";

function SearchBar({ sortBy, setSortBy, filterBy, setFilterBy }) {
  return (
    <div>
      <strong>Sort By:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={sortBy === "Alphabetically"}
          onChange={(e) => setSortBy(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={sortBy === "Price"}
          onChange={(e) => setSortBy(e.target.value)}
        />
        Price
      </label>

      <br /><br />

      <strong>Filter:</strong>
      <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Finance">Finance</option>
        <option value="Automotive">Automotive</option>
      </select>
    </div>
  );
}

export default SearchBar;
