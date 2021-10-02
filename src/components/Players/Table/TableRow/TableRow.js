import React from "react";

function TableRow(props) {
  return (
    <tr className='playerTr'>
      <td>{props.firstColumn}</td>
      <td>{props.secondColumn}</td>
      <td>{props.thirdColumn}</td>
    </tr>
  );
}

export default TableRow;
