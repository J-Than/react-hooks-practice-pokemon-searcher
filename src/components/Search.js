import React from "react";

function Search({ search, onInput }) {

  function handleInput(e) {
    onInput(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={handleInput} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
