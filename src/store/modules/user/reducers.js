import * as types from './types';

// Initial state user
const initialModuleUserState = {
  status: false,
};

// Tab reducer
export default (state = initialModuleUserState, { type, payload }) => {
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
