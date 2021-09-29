import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import SearchBar from "./components/SearchBar/SearchBar";
import Table from "./components/Table/Table";

function App() {
  const [teamData, setTeamData] = useState()
  const [sortedTeamData, setSortedTeamData] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [sortedColumn, setSortedColumn] = useState('')
  const [sortedDirection, setSortedDirection] = useState(true)
  const [checkBoxValues, setCheckBoxValues] = useState({
    goalkeeper: false,
    midfielder: false,
    attacker: false
  })

  useEffect(() => {
    fetch('http://api.football-data.org/v2/teams/61', {
      headers: {
        'X-Auth-Token': '061f154cba17464c936d726dac2d34b2'
      }
    })
      .then(response => response.json())
      .then(response => setTeamData(response))
  }, [])

  const searchBarOnChange = (e) => {
    setSearchValue(e.target.value)
  }

  const CheckBoxesOnChange = (e) => {
    const position = e.target.name
    setCheckBoxValues({
      ...checkBoxValues,
      [position]: !checkBoxValues[position]
    })
  }

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

    const sortedData = teamData.squad.slice().sort(alphabetically(sortedDirection, columnName))

    if (sortedColumn && sortedDirection) {
      setSortedColumn('')
      setSortedDirection(true)
      setSortedTeamData(teamData)
    } else {
      setSortedDirection(!sortedDirection)
      setSortedColumn(columnName)
      setSortedTeamData({
        ...teamData,
        squad: sortedData
      })
    }
  }

  if (!teamData) {
    return <Preloader />
  }

  return (
    <div>
      <div className='teamTitle'>
        <b>{teamData.name}</b>
        <img src={teamData.crestUrl} alt='logo' width='24' />
      </div>
      <SearchBar searchValue={searchValue} searchBarOnChange={searchBarOnChange} checkBoxValues={checkBoxValues} CheckBoxesOnChange={CheckBoxesOnChange} />
      <Table squadData={sortedTeamData ? sortedTeamData.squad : teamData.squad} searchValue={searchValue} checkBoxValues={checkBoxValues} sortData={sortData} sortedColumn={sortedColumn} sortedDirection={sortedDirection} />
    </div>
  );
}

export default App;

// const testData = {
//   "id": 18,
//   "area": {
//     "id": 2088,
//     "name": "Germany"
//   },
//   "name": "Borussia Mönchengladbach",
//   "shortName": "M'gladbach",
//   "tla": "BMG",
//   "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg",
//   "address": "Hennes-Weisweiler-Allee 1 Mönchengladbach 41179",
//   "phone": "+49 (02161) 92930",
//   "website": "http://www.borussia.de",
//   "email": "info@borussia.de",
//   "founded": 1900,
//   "clubColors": "Black / White / Green",
//   "venue": "Stadion im Borussia-Park",
//   "squad": [
//     {
//       "id": 3470,
//       "name": "Yann Sommer",
//       "position": "Goalkeeper",
//       "dateOfBirth": "1988-12-17T00:00:00Z",
//       "countryOfBirth": "Switzerland",
//       "nationality": "Switzerland",
//       "role": "PLAYER"
//     },
//     {
//       "id": 3655,
//       "name": "Thorgan Hazard",
//       "position": "Midfielder",
//       "dateOfBirth": "1993-03-29T00:00:00Z",
//       "countryOfBirth": "Belgium",
//       "nationality": "Belgium",
//       "role": "PLAYER"
//     },
//     {
//       "id": 6682,
//       "name": "Christoph Kramer",
//       "position": "Midfielder",
//       "dateOfBirth": "1991-02-19T00:00:00Z",
//       "countryOfBirth": "Germany",
//       "nationality": "Germany",
//       "role": "PLAYER"
//     },
//     {
//       "id": 6687,
//       "name": "Denis Zakaria",
//       "position": "Midfielder",
//       "dateOfBirth": "1996-11-20T00:00:00Z",
//       "countryOfBirth": "Congo DR",
//       "nationality": "Switzerland",
//       "role": "PLAYER"
//     },
//     {
//       "id": 8443,
//       "name": "Alassane Pléa",
//       "position": "Attacker",
//       "dateOfBirth": "1993-03-10T00:00:00Z",
//       "countryOfBirth": "France",
//       "nationality": "France",
//       "role": "PLAYER"
//     }
//   ],
//   "lastUpdated": "2018-06-23T12:50:44Z"
// }