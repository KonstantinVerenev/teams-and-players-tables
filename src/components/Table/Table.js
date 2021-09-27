import React from "react";
import './Table.css'
import TableRow from "./TableRow/tableRow";



function Table(props) {

  const tableRows = []

  props.data.squad.forEach(player => {
    if (player.name.toLowerCase().indexOf(props.searchValue.toLowerCase()) === -1) {
      return
    } else if (props.checkBoxValues.goalkeeperCheckBox && player.position !== 'Goalkeeper') {
      return
    } else {
      tableRows.push(
        <TableRow key={player.id} name={player.name} position={player.position} />
      )
    }
  });

  return (
    <div>
      <table>
        <tbody>
          {tableRows}
        </tbody>
      </table>

    </div>
  );
}

export default Table;
