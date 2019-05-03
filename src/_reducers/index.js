import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { profile } from './users.reducer';
import { posts } from "./users.reducer";
import { newProfile } from "./users.reducer";
import { posting } from "./data.reducer";
import { postStatus } from "./data.reducer";
import { mediaUrl } from './data.reducer';
import { likeResult } from "./data.reducer";
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  profile,
  posts,
  newProfile,
  posting,
  postStatus,
  mediaUrl,
  likeResult,
  alert
});

export default rootReducer;
