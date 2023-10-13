import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_filters_reducer";
import {
  MOBILE_PRODUCTS_FILTERS_OPEN,
  MOBILE_PRODUCTS_FILTERS_CLOSE,
  FILTER_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_PRODUCTS_SELECTED_SORT,
  UPDATE_PRODUCTS_SELECTED_FILTERS,
  CLEAR_PRODUCTS_SELECTED_FILTERS,
} from "../actions";

import { useProductsContext } from "./products_context";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  isProductsFiltersMobileOpen: false,
  selectedSort: "Price - Low to High",
  filters: {
    brands: [],
    categories: [],
    materials: [],
    windings: [],
  },
};

const ProductsFiltersContext = createContext();

export const ProductsFiltersProvider = ({ children }) => {
  const { allProducts } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (allProducts.length > 0) {
      dispatch({ type: SET_FILTERED_PRODUCTS, payload: allProducts });
    }
  }, [allProducts]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS, payload: allProducts });
    dispatch({ type: SORT_PRODUCTS });
  }, [allProducts, state.selectedSort, state.filters]);

  const openProductsFiltersMobile = () => {
    dispatch({ type: MOBILE_PRODUCTS_FILTERS_OPEN });
  };
  const closeProductsFiltersMobile = () => {
    dispatch({ type: MOBILE_PRODUCTS_FILTERS_CLOSE });
  };

  const updateProductsSelectedSort = (e) => {
    const name = e.name;

    dispatch({ type: UPDATE_PRODUCTS_SELECTED_SORT, payload: name });
  };

  const updateProductsSelectedFilters = (e) => {
    let sectionId = e.target.dataset.sectionId;
    let name = e.target.name;
    let value = e.target.value;
    let isChecked = e.target.checked;

    if (name === "brands") {
      value = e.target.dataset.brands;
    }
    if (name === "categories") {
      value = e.target.textContent;
    }
    if (name === "materials") {
      value = e.target.dataset.material;
    }
    if (name === "windings") {
      value = e.target.dataset.winding;
    }

    dispatch({
      type: UPDATE_PRODUCTS_SELECTED_FILTERS,
      payload: { sectionId, name, value, isChecked },
    });
  };

  const clearProductsSelectedFilters = () => {
    dispatch({ type: CLEAR_PRODUCTS_SELECTED_FILTERS });
  };

  return (
    <ProductsFiltersContext.Provider
      value={{
        ...state,
        openProductsFiltersMobile,
        closeProductsFiltersMobile,
        updateProductsSelectedSort,
        updateProductsSelectedFilters,
        clearProductsSelectedFilters,
      }}
    >
      {children}
    </ProductsFiltersContext.Provider>
  );
};

export const useProductsFiltersContext = () => {
  return useContext(ProductsFiltersContext);
};
