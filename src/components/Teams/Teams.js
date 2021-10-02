import React, { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import TeamsTable from "./Table/TeamsTable";

function Teams() {
  const [tableData, setTableData] = useState()

  useEffect(() => {
    fetch(`http://api.football-data.org/v2/competitions/2021/standings`, {
      headers: {
        'X-Auth-Token': '061f154cba17464c936d726dac2d34b2'
      }
    })
      .then(response => response.json())
      .then(response => setTableData(response))
  }, [])

  if (!tableData) {
    return <Preloader />
  }

  return (
    <TeamsTable tableData={tableData} />
  );
}

export default Teams;
