import React from "react";
import './Table.css'
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";



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
            <TableHeader columnName={'Name'} sortData={props.sortData} sortedColumn={props.sortedColumn} sortedDirection={props.sortedDirection} />
            <TableHeader columnName={'Position'} sortData={props.sortData} sortedColumn={props.sortedColumn} sortedDirection={props.sortedDirection} />
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
