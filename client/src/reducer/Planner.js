import { combineReducers } from 'redux';

const readerReducer = (state = {keyword: '', mode: 'searchJournal', tags: []}, action) => {
  switch(action.type) {

    case 'SET_READER_MODE':
      return Object.assign({}, state, {
        mode: action.payload.mode,
      });

    case 'EDIT_READER_TAG':
      if (action.payload.action === 'add')
        return Object.assign({}, state, {
          tags: [...state.tags, action.payload.tag],
        });
      else if (action.payload.action === 'delete')
        return Object.assign({}, state, {
          tags: state.tags.filter((tag) => tag !== action.payload.tag),
        });
      else
        return state;

    case 'SET_READER_KEYWORD':
      return Object.assign({}, state, {
        keyword: action.payload.keyword
      });

    default:
      return state;
  }
};

// reducer for state.planner
// combine multiple redu
export const plannerReducer = combineReducers({
  reader: readerReducer,
})
