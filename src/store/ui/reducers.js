import { combineReducers } from 'redux';

import alert from './alert/reducers';

const reducers = combineReducers({
  alert,
});

export default reducers;
