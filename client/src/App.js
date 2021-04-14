import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Books from "./components/Books";
import Header from "./components/Header";
import TitleCard from "./components/TitleCard";


function App() {
  return (
    <Router>
    <div>
      <div>
      <Header>
    </ Header>
    </div>
    <div>
      <TitleCard>
      </TitleCard>
    </div>
    <div>
      <Books>
      </Books>
    </div>
    </div>
  </Router>
  );
}

export default App;
