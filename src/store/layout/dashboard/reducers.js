import * as types from './types';

// Initial state layout dashboard
const initialLayoutDashboardState = {
  sidebarOpen: false,
};

// Drawer reducer
export default (state = initialLayoutDashboardState, { type, payload }) => {
  switch (type) {
    case types.OPEN:
      return {
        ...state,
        sidebarOpen: payload,
      };
    default:
      return state;
  }
};
