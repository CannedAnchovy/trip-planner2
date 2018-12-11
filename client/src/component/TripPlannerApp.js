import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const reducer = () => {};
const store = createStore(reducer);

class TripPlannerApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>hi</div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default TripPlannerApp;

