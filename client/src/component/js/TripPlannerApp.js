import React, { Component } from 'react';
import Header from './Header';
import MainDisplay from './MainDisplay';
import '../css/TripPlannerApp.css';

class TripPlannerApp extends Component {
  render() {
    return (
        <div className="tripPlannerApp">
          <Header />
          <MainDisplay />
        </div>
    );
  }
}

export default TripPlannerApp;


