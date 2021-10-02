import React from "react";
import style from "./TableHeader.module.css"

function TableHeader(props) {
  if (props.sortedColumn === props.columnName.toLowerCase()) {
    return (
      <>
        <th onClick={() => { props.sortData(props.columnName.toLowerCase()) }} className={props.sortedDirection ? style.upArrow : style.downArrow}>{props.columnName}</th>
      </>
    );
  } else {
    return (
      <th onClick={() => { props.sortData(props.columnName.toLowerCase()) }} className={style.disableArrows}>{props.columnName}</th>
    );
  }


}

export default TableHeader;
