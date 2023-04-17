import { MOBILE_NAV_OPEN, MOBILE_NAV_CLOSE } from "../actions";

const navigation_reducer = (state, action) => {
  if (action.type === MOBILE_NAV_OPEN) {
    return { ...state, isMobileNavOpen: true };
  }
  if (action.type === MOBILE_NAV_CLOSE) {
    return { ...state, isMobileNavOpen: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default navigation_reducer;
