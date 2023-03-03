import React from "react";

function Search({ handleInput, search }) {
  return (
    <section className="search-box-wrapper">
      <input
        id="form"
        autoFocus
        autoComplete="off"
        type="text"
        className="search-box"
        placeholder="Search for a movie..."
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}

export default Search;
