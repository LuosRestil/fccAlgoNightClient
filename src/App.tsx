import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ViewParticipants from "./components/ViewParticipants";
import GroupParticipants from "./components/GroupParticipants";
import AdminHome from "./components/AdminHome";
import ParticipantHome from "./components/ParticipantHome";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ParticipantHome}/>
          <Route path="/admin" exact component={AdminHome} />
          <Route path="/admin/view-participants" exact component={ViewParticipants} />
          <Route path="/admin/group-participants" exact component={GroupParticipants} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
