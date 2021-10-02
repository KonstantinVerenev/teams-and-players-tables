import React from "react";
import './SearchBar.css'

function SearchBar(props) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search by name..."
        value={props.searchValue}
        onChange={props.searchValueOnChange}
      />
      <div className='positionLabels'>
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
          Defender
          <input
            type="checkbox"
            name='defender'
            checked={props.checkBoxValues.defender}
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
      </div>
    </form>
  );
}

export default SearchBar;
