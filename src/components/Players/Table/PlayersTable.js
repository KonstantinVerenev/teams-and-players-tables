import React, { useState } from "react";
import './PlayersTable.css'
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";



function PlayersTable(props) {
  const [sortedData, setSortedData] = useState()
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

    const sortedData = props.tableData.squad.slice().sort(alphabetically(sortedDirection, columnName))

    if ((sortedColumn && sortedDirection)) {
      setSortedColumn('')
      setSortedDirection(true)
      setSortedData(props.tableData)
    } else if (sortedColumn && (sortedColumn !== columnName)) {
      setSortedColumn('')
      setSortedDirection(true)
      setSortedData(props.tableData)
    } else {
      setSortedColumn(columnName)
      setSortedDirection(!sortedDirection)
      setSortedData({
        ...props.tableData,
        squad: sortedData
      })
    }
  }

  const squadData = sortedData ? sortedData.squad : props.tableData.squad

  const tableRows = []

  squadData.forEach(playerData => {
    if (playerData.name.toLowerCase().indexOf(props.searchValue.toLowerCase()) === -1) {
      return
    } else if (props.checkBoxValues.goalkeeper && playerData.position !== 'Goalkeeper') {
      return
    } else if (props.checkBoxValues.defender && playerData.position !== 'Defender') {
      return
    } else if (props.checkBoxValues.midfielder && playerData.position !== 'Midfielder') {
      return
    } else if (props.checkBoxValues.attacker && playerData.position !== 'Attacker') {
      return
    } else {
      tableRows.push(
        <TableRow
          key={playerData.id}
          firstColumn={playerData.name}
          secondColumn={playerData.position}
          thirdColumn={playerData.nationality}
        />
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
            <TableHeader columnName={'Nationality'} sortData={sortData} sortedColumn={sortedColumn} sortedDirection={sortedDirection} />
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
}

export default PlayersTable;
