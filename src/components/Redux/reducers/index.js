// reducers/index.js
import { combineReducers } from 'redux';
import calendarReducer from '../calendarReducer';

const rootReducer = combineReducers({
  calendarEvents: calendarReducer,
});

export default rootReducer;
