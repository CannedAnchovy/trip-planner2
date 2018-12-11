import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

const reducer = () => {};
const store = createStore(reducer);

class TripPlannerApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Button>Click Here</Button>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default TripPlannerApp;

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
