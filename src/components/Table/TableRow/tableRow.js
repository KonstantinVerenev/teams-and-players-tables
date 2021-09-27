import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.position}</td>
    </tr>
  );
}

export default TableRow;
