import { combineReducers } from 'redux';

import mobile from './mobile/reducers';

const reducers = combineReducers({
  mobile,
});

export default reducers;
