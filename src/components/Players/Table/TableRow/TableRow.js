import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>{props.firstColumn}</td>
      <td>{props.secondColumn}</td>
      <td>{props.thirdColumn}</td>
    </tr>
  );
}

export default TableRow;
