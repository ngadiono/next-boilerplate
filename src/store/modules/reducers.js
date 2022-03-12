import { combineReducers } from 'redux';

import user from './user/reducers';

const reducers = combineReducers({
  user,
});

export default reducers;
