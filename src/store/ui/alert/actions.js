// Types
import * as types from './types';

export const actionUiAlertStatus = (status, message) => (dispatch) => {
  return dispatch({
    type: types.STATUS,
    payload: {
      status,
      message,
    },
  });
};
