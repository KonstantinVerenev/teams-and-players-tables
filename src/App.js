import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Players from "./components/Players/Players";
import TeamsTable from "./components/Teams/Table/TeamsTable";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/teams">
            <TeamsTable />
          </Route>
          <Route path="/">
            <TeamsTable />
          </Route>
        </Switch>
      </div >
    </Router>
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