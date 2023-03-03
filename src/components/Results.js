import React from "react";
import Result from "./Result";

function Results({ results, openPopup }) {
  return (
    <div className="error-text">
      <section className="results">
        {typeof results != "undefined" ? (
          results.map((result) => (
            <Result key={result.imdbID} result={result} openPopup={openPopup} />
          ))
        ) : (
          <h1>Movie not found!</h1>
        )}
      </section>
    </div>
  );
}

export default Results;
