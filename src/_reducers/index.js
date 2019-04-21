import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { myposts } from "./users.reducer";
import { posting } from "./data.reducer";
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  myposts,
  posting,
  alert
});

export default rootReducer;
