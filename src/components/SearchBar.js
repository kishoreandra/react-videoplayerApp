import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onUserInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const onUserSearch = (event) => {
    event.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <div className="ui secondary inverted segment">
      <form onSubmit={onUserSearch}>
        <div className="ui fluid icon input">
          <input
            onChange={onUserInput}
            type="text"
            value={searchTerm}
            placeholder="Search For a Video ..."
          />
          <i className="search icon"></i>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
