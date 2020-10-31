import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ViewParticipants from "./components/ViewParticipants";
import GroupParticipants from "./components/GroupParticipants";
import ParticipantHome from "./components/ParticipantHome";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ParticipantHome}/>
          <Route path="/admin" exact component={ViewParticipants} />
          <Route path="/admin/groups" exact component={GroupParticipants} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
