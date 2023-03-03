import React from "react";
import noPoster from "../img/no-poster.jpg";

function Result({ selected, result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      {result.Poster !== "N/A" ? (
        <img src={result.Poster} alt="poster" />
      ) : (
        <img src={noPoster} alt="poster" />
      )}
      <h3>{result.Title}</h3>
    </div>
  );
}

export default Result;
