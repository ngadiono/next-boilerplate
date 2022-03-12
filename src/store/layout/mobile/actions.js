// Types
import * as types from './types';

export const actionLayoutStatus = (status, message) => (dispatch) => {
  return dispatch({
    type: types.STATUS,
    payload: {
      status,
      message,
    },
  });
};
