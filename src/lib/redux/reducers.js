import { combineReducers } from 'redux';

// Layout
import layout from '@/store/layout/reducers';
import ui from '@/store/ui/reducers';
import i18n from '@/store/i18n/reducers';
import modules from '@/store/modules/reducers';

const combinedReducer = combineReducers({
  layout,
  ui,
  i18n,
  modules,
});

export default combinedReducer;
