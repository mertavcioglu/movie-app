import React from "react";
import noPoster from "../img/no-poster.jpg";

function Popup({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <p className="popup-title">
          {selected.Title} <span className="popup-year">({selected.Year})</span>
        </p>
        <p className="popup-genre">{selected.Genre}</p>
        <p className="popup-rating">
          IMDB Rating:
          <span className="popup-rating-number">{selected.imdbRating}</span>
        </p>
        <div className="popup-main">
          {selected.Poster !== "N/A" ? (
            <img src={selected.Poster} alt="poster" />
          ) : (
            <img src={noPoster} alt="poster" />
          )}
          <div className="popup-info">
            <p className="popup-plot">{selected.Plot}</p>
            <p className="popup-actors">{selected.Actors}</p>
            <p className="popup-awards">{selected.Awards}</p>
          </div>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default Popup;
