import React, { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import SearchBar from "./SearchBar/SearchBar";
import PlayersTable from "./Table/PlayersTable";

const PlayersPage = () => {
  const [tableData, setTableData] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [checkBoxValues, setCheckBoxValues] = useState({
    goalkeeper: false,
    defender: false,
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
      .then(response => setTableData(response))
  }, [])

  const searchValueOnChange = (e) => {
    setSearchValue(e.target.value)
  }

  const CheckBoxesOnChange = (e) => {
    const position = e.target.name
    setCheckBoxValues({
      ...checkBoxValues,
      [position]: !checkBoxValues[position]
    })
  }

  if (!tableData) {
    return <Preloader />
  }

  return (
    <>
      <div className='teamTitle'>
        <b>{tableData.name}</b>
        <img src={tableData.crestUrl} alt='logo' width='24' />
      </div>
      <SearchBar
        searchValue={searchValue}
        searchValueOnChange={searchValueOnChange}
        checkBoxValues={checkBoxValues}
        CheckBoxesOnChange={CheckBoxesOnChange}
      />
      <PlayersTable
        tableData={tableData}
        searchValue={searchValue}
        checkBoxValues={checkBoxValues}
      />
    </>
  )
}

export default PlayersPage