import { combineReducers } from 'redux';

import todosReducer from './todos/reducer';

const rootReducer = combineReducers({
  todosReducer
});

export default rootReducer;