import * as types from './types';

// Initial state alert
const initialAlertState = {
  status: true,
};

// Tab reducer
export default (state = initialAlertState, { type, payload }) => {
  switch (type) {
    case types.STATUS:
      return {
        ...state,
        status: payload.status,
      };
    default:
      return state;
  }
};
