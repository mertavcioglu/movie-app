import React, { useState } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
import axios from "axios";
import "./App.css";

function App() {
  const API_URL = "http://www.omdbapi.com/?apikey=ecd629ee";

  const [state, setstate] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const search = (e) => {
    if (e.key === "Enter") {
      axios(API_URL + "&s=" + state.s).then(({ data }) => {
        let results = data.Search.slice(0, 9);
        setstate((prevState) => {
          return { ...prevState, results: results };
        });
      });
      document.getElementById("form").value = "";
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setstate((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    axios(API_URL + "&i=" + id).then(({ data }) => {
      let result = data;

      setstate((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setstate((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App" onClick={closePopup}>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
