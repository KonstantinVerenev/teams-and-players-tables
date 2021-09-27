import React from "react";
import './SearchBar.css'

function SearchBar(props) {
  return (
    <form>
      <input
        type="text"
        placeholder="Поиск..."
        value={props.searchValue}
        onChange={props.searchBarOnChange}
      />
      <label>
        Goalkeeper
        <input
          type="checkbox"
          checked={props.checkBoxValues.goalkeeperCheckBox}
          onChange={props.goalkeeperCheckBoxOnChange}
        />
      </label>
    </form>
  );
}

export default SearchBar;
