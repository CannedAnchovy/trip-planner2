import React, { Component } from 'react';
import Header from './Header';
import { Icon } from 'semantic-ui-react';

class TripPlannerApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Icon name="home"/>
      </div>
    );
  }
}

export default TripPlannerApp;