import React, { useState } from "react";
import './Table.css'
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";



function Table(props) {
  const [sortedTeamData, setSortedTeamData] = useState()
  const [sortedColumn, setSortedColumn] = useState('')
  const [sortedDirection, setSortedDirection] = useState(true)

  const sortData = (e) => {
    const columnName = e.target.innerText.toLowerCase()

    // sorting with null function
    function alphabetically(ascending, columnName) {
      return function (a, b) {
        // equal items sort equally
        if (a[columnName] === b[columnName]) {
          return 0;
        }
        // nulls sort after anything else
        else if (a[columnName] === null) {
          return 1;
        }
        else if (b[columnName] === null) {
          return -1;
        }
        // otherwise, if we're ascending, lowest sorts first
        else if (ascending) {
          return a[columnName] < b[columnName] ? -1 : 1;
        }
        // if descending, highest sorts first
        else {
          return a[columnName] < b[columnName] ? 1 : -1;
        }
      };
    }

    const sortedData = props.teamData.squad.slice().sort(alphabetically(sortedDirection, columnName))

    if (sortedColumn && sortedDirection) {
      setSortedColumn('')
      setSortedDirection(true)
      setSortedTeamData(props.teamData)
    } else {
      setSortedDirection(!sortedDirection)
      setSortedColumn(columnName)
      setSortedTeamData({
        ...props.teamData,
        squad: sortedData
      })
    }
  }

  const squadData = sortedTeamData ? sortedTeamData.squad : props.teamData.squad
  const tableRows = []

  squadData.forEach(player => {
    if (player.name.toLowerCase().indexOf(props.searchValue.toLowerCase()) === -1) {
      return
    } else if (props.checkBoxValues.goalkeeper && player.position !== 'Goalkeeper') {
      return
    } else if (props.checkBoxValues.defender && player.position !== 'Defender') {
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
            <TableHeader columnName={'Name'} sortData={sortData} sortedColumn={sortedColumn} sortedDirection={sortedDirection} />
            <TableHeader columnName={'Position'} sortData={sortData} sortedColumn={sortedColumn} sortedDirection={sortedDirection} />
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
