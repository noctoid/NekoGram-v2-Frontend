import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { profile } from './users.reducer';
import { myposts } from "./users.reducer";
import { posting } from "./data.reducer";
import { postStatus } from "./data.reducer";
import { mediaUrl } from './data.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  profile,
  myposts,
  posting,
  postStatus,
  mediaUrl,
  alert
});

export default rootReducer;
