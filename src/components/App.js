import React, { useState } from 'react'
import runtimeEnv from '@mars/heroku-js-runtime-env'
import Search from "./Search"
import Results from "./Results"
import Popup from "./Popup"
import axios from "axios"

function App() {
  const env = runtimeEnv()
  const API_URL = env.REACT_APP_API_URL

  const [state, setstate] = useState({
    s: "",
    results: [],
    selected: {}
  })

  const search = e => {
    if (e.key === "Enter") {
      axios(API_URL + "&s=" + state.s).then(({ data }) => {
        let results = data.Search.slice(0, 9)
        setstate(prevState => {
          return { ...prevState, results: results }
        })
      })
      document.getElementById("form").value = ""
    }
  }

  const handleInput = e => {
    let s = e.target.value;

    setstate(prevState => {
      return { ...prevState, s: s }
    })
  }

  const openPopup = id => {
    axios(API_URL + "&i=" + id).then(({ data }) => {
      let result = data;

      setstate(prevState => {
        return { ...prevState, selected: result }
      })
    })
  }

  const closePopup = () => {
    setstate(prevState => {
      return { ...prevState, selected: {} }
    })
  }

  return (
    <div className="App" onClick={closePopup}>
      <main>
        <Search
          handleInput={handleInput}
          search={search}
        />
        <Results
          results={state.results}
          openPopup={openPopup}
        />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
