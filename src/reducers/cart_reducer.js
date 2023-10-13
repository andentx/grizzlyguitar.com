import { SET_CHECKOUT, SET_LOADING, SET_JUST_ADDED } from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case SET_CHECKOUT:
      return { ...state, checkout: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_JUST_ADDED:
      return { ...state, didJustAddToCart: action.payload };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cart_reducer;
