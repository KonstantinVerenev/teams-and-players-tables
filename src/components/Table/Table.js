import React from "react";
import './Table.css'
import TableRow from "./TableRow/tableRow";



function Table(props) {

  const tableRows = []

  props.squadData.forEach(player => {
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
          <tr>
            <th onClick={() => props.sortData('name')}>Name</th>
            <th onClick={() => props.sortData('position')}>Position</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>

    </div>
  );
}

export default Table;
