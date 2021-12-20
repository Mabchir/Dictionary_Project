import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("Welcome");
  let [results, setResults] = useState();
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    console.log(response);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelKey = "563492ad6f917000010000017d590a72119842aa8a0977010f5ac738";
    let pexelUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    let header = { Authorization: `Bearer ${pexelKey}` };
    axios.get(pexelUrl, { headers: { header } }).then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              placeholder="Enter Word"
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
