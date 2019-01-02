import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Planner from './Planner/Planner'
import '../css/MainDisplay.css';

class MainDisplay extends Component {
  render() {
    return (
        <div className="mainDisplay">
          <Route path="/" exact component={Home} />
          <Route path="/planner" component={Planner} />
        </div>
    );
  }
}

export default MainDisplay;


