// Types
import * as types from './types';

export const actionLayoutDashboardSidebar = (payload) => (dispatch) => {
  dispatch({ type: types.OPEN, payload });
  return Promise.resolve();
};
