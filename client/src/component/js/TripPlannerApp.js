import React, { Component } from 'react';
import Header from './Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import '../../semantic/dist/semantic.min.css';

const reducer = () => {};
const store = createStore(reducer);

class TripPlannerApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Icon name="home"/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default TripPlannerApp;


