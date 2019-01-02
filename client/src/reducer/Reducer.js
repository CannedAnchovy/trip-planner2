import { combineReducers } from 'redux';
import { plannerReducer } from './Planner';

export const reducer = combineReducers({
  planner: plannerReducer
});
