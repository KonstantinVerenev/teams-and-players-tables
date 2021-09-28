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
        Goalkeepers
        <input
          type="checkbox"
          name='goalkeeper'
          checked={props.checkBoxValues.goalkeeper}
          onChange={props.CheckBoxesOnChange}
        />
      </label>
      <label>
        Midfielder
        <input
          type="checkbox"
          name='midfielder'
          checked={props.checkBoxValues.midfielder}
          onChange={props.CheckBoxesOnChange}
        />
      </label>
      <label>
        Attacker
        <input
          type="checkbox"
          name='attacker'
          checked={props.checkBoxValues.attacker}
          onChange={props.CheckBoxesOnChange}
        />
      </label>
    </form>
  );
}

export default SearchBar;
