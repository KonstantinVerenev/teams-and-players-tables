import React from "react";
import "./TableHeader.css"

function TableHeader(props) {
  if (props.sortedColumn === props.columnName.toLowerCase()) {
    return (
      <>
        <th onClick={props.sortData} className={props.sortedDirection ? ' upArrow' : 'downArrow'}>{props.columnName}</th>
      </>
    );
  } else {
    return (
      <th onClick={props.sortData} className='disableArrows'>{props.columnName}</th>
    );
  }


}

export default TableHeader;
