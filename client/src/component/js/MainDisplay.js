import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Planner from './Planner/Planner'
import '../css/MainDisplay.css';

class MainDisplay extends Component {
  render() {
    return (
        <div className="mainDisplay">
          <Route path='/planner' component={Planner} />
        </div>
    );
  }
}

export default MainDisplay;


