import React, { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import SearchBar from "./components/SearchBar/SearchBar";
import Table from "./components/Table/Table";

const data = {
  "id": 18,
  "area": {
    "id": 2088,
    "name": "Germany"
  },
  "name": "Borussia Mönchengladbach",
  "shortName": "M'gladbach",
  "tla": "BMG",
  "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg",
  "address": "Hennes-Weisweiler-Allee 1 Mönchengladbach 41179",
  "phone": "+49 (02161) 92930",
  "website": "http://www.borussia.de",
  "email": "info@borussia.de",
  "founded": 1900,
  "clubColors": "Black / White / Green",
  "venue": "Stadion im Borussia-Park",
  "squad": [
    {
      "id": 3470,
      "name": "Yann Sommer",
      "position": "Goalkeeper",
      "dateOfBirth": "1988-12-17T00:00:00Z",
      "countryOfBirth": "Switzerland",
      "nationality": "Switzerland",
      "role": "PLAYER"
    },
    {
      "id": 3655,
      "name": "Thorgan Hazard",
      "position": "Midfielder",
      "dateOfBirth": "1993-03-29T00:00:00Z",
      "countryOfBirth": "Belgium",
      "nationality": "Belgium",
      "role": "PLAYER"
    },
    {
      "id": 6682,
      "name": "Christoph Kramer",
      "position": "Midfielder",
      "dateOfBirth": "1991-02-19T00:00:00Z",
      "countryOfBirth": "Germany",
      "nationality": "Germany",
      "role": "PLAYER"
    },
    {
      "id": 6687,
      "name": "Denis Zakaria",
      "position": "Midfielder",
      "dateOfBirth": "1996-11-20T00:00:00Z",
      "countryOfBirth": "Congo DR",
      "nationality": "Switzerland",
      "role": "PLAYER"
    }
  ],
  "lastUpdated": "2018-06-23T12:50:44Z"
}

function App() {
  const [teamData, setTeamData] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [checkBoxValues, setCheckBoxValues] = useState({ goalkeeperCheckBox: false })

  useEffect(() => {
    // тут будет запрос с сервера
    setTeamData({ ...data })
  }, [])

  const searchBarOnChange = (e) => {
    setSearchValue(e.target.value)
  }

  const goalkeeperCheckBoxOnChange = () => {
    setCheckBoxValues({
      ...checkBoxValues,
      goalkeeperCheckBox: !checkBoxValues.goalkeeperCheckBox
    })
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
      <SearchBar searchValue={searchValue} searchBarOnChange={searchBarOnChange} checkBoxValues={checkBoxValues} goalkeeperCheckBoxOnChange={goalkeeperCheckBoxOnChange} />
      < Table data={teamData} searchValue={searchValue} checkBoxValues={checkBoxValues} />
    </div>
  );
}

export default App;
