import { SET_ALL_PRODUCTS } from "../actions";

const products_reducer = (state, action) => {
  if (action.type === SET_ALL_PRODUCTS) {
    const { allProducts } = action.payload;
    return {
      ...state,
      allProducts,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
