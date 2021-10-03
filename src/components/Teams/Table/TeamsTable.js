import React from "react";
import { Link } from "react-router-dom";
import style from './TeamsTable.module.css'

function TeamsTable(props) {
  const teamsData = props.tableData.standings[0].table

  const teamsTableRows = teamsData.map(teamData => {
    return (
      <tr key={teamData.team.id}>
        <td>
          <Link to={`/players/${teamData.team.id}`}>
            <div>{teamData.team.name}</div><img src={teamData.team.crestUrl} alt='logo' height='45px' />
          </Link>
        </td>
      </tr >
    )
  })

  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>{props.tableData.competition.name} ({props.tableData.competition.area.name})</th>
          </tr>
        </thead>
        <tbody>
          {teamsTableRows}
        </tbody>
      </table>
    </div>
  );
}

export default TeamsTable;
