import React from "react";
import "./index.scss";
import search from "../../assets/search.svg";

const Search = ({ onChange }) => {
  return (
    <div className="searchField">
      <img src={search} alt="search" />
      <input type="text" placeholder="Введите текст" onChange={onChange} />
    </div>
  );
};

export default Search;
