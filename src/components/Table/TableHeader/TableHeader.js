import React from "react";
import downArrow from '../../../assets/images/down-arrow.svg'
import upArrow from '../../../assets/images/up-arrow.svg'

function TableHeader(props) {
  if (props.sortedColumn === props.columnName.toLowerCase()) {
    return (
      <>
        <th onClick={props.sortData}>
          {props.columnName}
          {props.sortedDirection
            ? <img src={upArrow} width='15px' alt='down arrow' />
            : <img src={downArrow} width='15px' alt='up arrow' />}
        </th>
      </>
    );
  } else {
    return (
      <th onClick={props.sortData}>{props.columnName}</th>
    );
  }


}

export default TableHeader;
