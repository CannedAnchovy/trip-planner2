import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Planner from './Planner';
import Editor from './Editor';
import PersonalPage from './PersonalPage';

class TripPlannerApp extends Component {
  render() {
    return (
        <div id="TripPlannerApp">
          <Header />
          <div id="Main">
            <Route exact path="/" component={ Home } />
            <Route path="/planner" component={ Planner } />
            <Route path="/editor" component={ Editor } />
            <Route path="/personalPage" component={ PersonalPage } />
          </div>
        </div>
    );
  }
}

export default TripPlannerApp;


