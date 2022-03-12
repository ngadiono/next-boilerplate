// Types
import * as types from './types';

export const actionModuleUserStatus = (status) => (dispatch) => {
  return dispatch({
    type: types.STATUS,
    payload: {
      status,
    },
  });
};
