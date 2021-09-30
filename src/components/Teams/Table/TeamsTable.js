import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Preloader from "../../Preloader/Preloader";
import './TeamsTable.css'


const tableData = {
  "filters": {},
  "competition": {
    "id": 2021,
    "area": {
      "id": 2072,
      "name": "England"
    },
    "name": "Premier League",
    "code": "PL",
    "plan": "TIER_ONE",
    "lastUpdated": "2018-08-23T11:51:26Z"
  },
  "season": {
    "id": 151,
    "startDate": "2018-08-10",
    "endDate": "2019-05-12",
    "currentMatchday": 3,
    "availableStages": [
      "REGULAR_SEASON"
    ]
  },
  "standings": [
    {
      "stage": "REGULAR_SEASON",
      "type": "TOTAL",
      "group": null,
      "table": [
        {
          "position": 1,
          "team": {
            "id": 65,
            "name": "Manchester City FC",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
          },
          "playedGames": 2,
          "won": 2,
          "draw": 0,
          "lost": 0,
          "points": 6,
          "goalsFor": 8,
          "goalsAgainst": 1,
          "goalDifference": 7
        },
        {
          "position": 2,
          "team": {
            "id": 64,
            "name": "Liverpool FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg"
          },
          "playedGames": 2,
          "won": 2,
          "draw": 0,
          "lost": 0,
          "points": 6,
          "goalsFor": 6,
          "goalsAgainst": 0,
          "goalDifference": 6
        },
        {
          "position": 3,
          "team": {
            "id": 61,
            "name": "Chelsea FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"
          },
          "playedGames": 2,
          "won": 2,
          "draw": 0,
          "lost": 0,
          "points": 6,
          "goalsFor": 6,
          "goalsAgainst": 2,
          "goalDifference": 4
        },
        {
          "position": 4,
          "team": {
            "id": 346,
            "name": "Watford FC",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg"
          },
          "playedGames": 2,
          "won": 2,
          "draw": 0,
          "lost": 0,
          "points": 6,
          "goalsFor": 5,
          "goalsAgainst": 1,
          "goalDifference": 4
        },
        {
          "position": 5,
          "team": {
            "id": 73,
            "name": "Tottenham Hotspur FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg"
          },
          "playedGames": 2,
          "won": 2,
          "draw": 0,
          "lost": 0,
          "points": 6,
          "goalsFor": 5,
          "goalsAgainst": 2,
          "goalDifference": 3
        },
        {
          "position": 6,
          "team": {
            "id": 1044,
            "name": "AFC Bournemouth",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg"
          },
          "playedGames": 2,
          "won": 2,
          "draw": 0,
          "lost": 0,
          "points": 6,
          "goalsFor": 4,
          "goalsAgainst": 1,
          "goalDifference": 3
        },
        {
          "position": 7,
          "team": {
            "id": 62,
            "name": "Everton FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg"
          },
          "playedGames": 2,
          "won": 1,
          "draw": 1,
          "lost": 0,
          "points": 4,
          "goalsFor": 4,
          "goalsAgainst": 3,
          "goalDifference": 1
        },
        {
          "position": 8,
          "team": {
            "id": 338,
            "name": "Leicester City FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png"
          },
          "playedGames": 2,
          "won": 1,
          "draw": 0,
          "lost": 1,
          "points": 3,
          "goalsFor": 3,
          "goalsAgainst": 2,
          "goalDifference": 1
        },
        {
          "position": 9,
          "team": {
            "id": 66,
            "name": "Manchester United FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
          },
          "playedGames": 2,
          "won": 1,
          "draw": 0,
          "lost": 1,
          "points": 3,
          "goalsFor": 4,
          "goalsAgainst": 4,
          "goalDifference": 0
        },
        {
          "position": 10,
          "team": {
            "id": 354,
            "name": "Crystal Palace FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_%282013%29.png"
          },
          "playedGames": 2,
          "won": 1,
          "draw": 0,
          "lost": 1,
          "points": 3,
          "goalsFor": 2,
          "goalsAgainst": 2,
          "goalDifference": 0
        },
        {
          "position": 11,
          "team": {
            "id": 397,
            "name": "Brighton & Hove Albion FC",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg"
          },
          "playedGames": 2,
          "won": 1,
          "draw": 0,
          "lost": 1,
          "points": 3,
          "goalsFor": 3,
          "goalsAgainst": 4,
          "goalDifference": -1
        },
        {
          "position": 12,
          "team": {
            "id": 67,
            "name": "Newcastle United FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/5/56/Newcastle_United_Logo.svg"
          },
          "playedGames": 2,
          "won": 0,
          "draw": 1,
          "lost": 1,
          "points": 1,
          "goalsFor": 1,
          "goalsAgainst": 2,
          "goalDifference": -1
        },
        {
          "position": 13,
          "team": {
            "id": 340,
            "name": "Southampton FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg"
          },
          "playedGames": 2,
          "won": 0,
          "draw": 1,
          "lost": 1,
          "points": 1,
          "goalsFor": 1,
          "goalsAgainst": 2,
          "goalDifference": -1
        },
        {
          "position": 14,
          "team": {
            "id": 76,
            "name": "Wolverhampton Wanderers FC",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg"
          },
          "playedGames": 2,
          "won": 0,
          "draw": 1,
          "lost": 1,
          "points": 1,
          "goalsFor": 2,
          "goalsAgainst": 4,
          "goalDifference": -2
        },
        {
          "position": 15,
          "team": {
            "id": 328,
            "name": "Burnley FC",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png"
          },
          "playedGames": 2,
          "won": 0,
          "draw": 1,
          "lost": 1,
          "points": 1,
          "goalsFor": 1,
          "goalsAgainst": 3,
          "goalDifference": -2
        },
        {
          "position": 16,
          "team": {
            "id": 715,
            "name": "Cardiff City FC",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/3/3c/Cardiff_City_crest.svg"
          },
          "playedGames": 2,
          "won": 0,
          "draw": 1,
          "lost": 1,
          "points": 1,
          "goalsFor": 0,
          "goalsAgainst": 2,
          "goalDifference": -2
        },
        {
          "position": 17,
          "team": {
            "id": 57,
            "name": "Arsenal FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
          },
          "playedGames": 2,
          "won": 0,
          "draw": 0,
          "lost": 2,
          "points": 0,
          "goalsFor": 2,
          "goalsAgainst": 5,
          "goalDifference": -3
        },
        {
          "position": 18,
          "team": {
            "id": 63,
            "name": "Fulham FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/a8/Fulham_fc.svg"
          },
          "playedGames": 2,
          "won": 0,
          "draw": 0,
          "lost": 2,
          "points": 0,
          "goalsFor": 1,
          "goalsAgainst": 5,
          "goalDifference": -4
        },
        {
          "position": 19,
          "team": {
            "id": 563,
            "name": "West Ham United FC",
            "crestUrl": "http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg"
          },
          "playedGames": 2,
          "won": 0,
          "draw": 0,
          "lost": 2,
          "points": 0,
          "goalsFor": 1,
          "goalsAgainst": 6,
          "goalDifference": -5
        },
        {
          "position": 20,
          "team": {
            "id": 394,
            "name": "Huddersfield Town AFC",
            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/5/5a/Huddersfield_Town_A.F.C._logo.svg"
          },
          "playedGames": 2,
          "won": 0,
          "draw": 0,
          "lost": 2,
          "points": 0,
          "goalsFor": 1,
          "goalsAgainst": 9,
          "goalDifference": -8
        }
      ]
    }
  ]
}


function TeamsTable(props) {

  const teamsData = tableData.standings[0].table

  const teamsTableRows = teamsData.map(teamData => {
    return (
      <tr key={teamData.team.id}>
        <td>
          <Link to="/players">
            {teamData.team.name}<img src={teamData.team.crestUrl} alt='logo' width='20px' />
          </Link>
        </td>
      </tr>
    )
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{tableData.competition.name} ({tableData.competition.area.name})</th>
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