import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer/Reducer'
import { BrowserRouter } from 'react-router-dom';
import TripPlannerApp from './component/js/TripPlannerApp';
import * as serviceWorker from './serviceWorker';
import './semantic/dist/semantic.min.css';

const store = createStore(reducer);

store.subscribe(() => {
  console.log('State: ');
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <TripPlannerApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
