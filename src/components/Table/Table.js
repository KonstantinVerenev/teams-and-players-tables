import React from "react";
import './Table.css'
import TableRow from "./TableRow/tableRow";



function Table(props) {

  const tableRows = []

  props.data.squad.forEach(player => {
    if (player.name.toLowerCase().indexOf(props.searchValue.toLowerCase()) === -1) {
      return
    } else if (props.checkBoxValues.goalkeeper && player.position !== 'Goalkeeper') {
      return
    } else if (props.checkBoxValues.midfielder && player.position !== 'Midfielder') {
      return
    } else if (props.checkBoxValues.attacker && player.position !== 'Attacker') {
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
        <thead>
          <td>Name</td>
          <td>Position</td>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>

    </div>
  );
}

export default Table;
