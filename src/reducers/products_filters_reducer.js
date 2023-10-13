import {
  MOBILE_PRODUCTS_FILTERS_OPEN,
  MOBILE_PRODUCTS_FILTERS_CLOSE,
  SET_FILTERED_PRODUCTS,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_PRODUCTS_SELECTED_SORT,
  UPDATE_PRODUCTS_SELECTED_FILTERS,
  CLEAR_PRODUCTS_SELECTED_FILTERS,
} from "../actions";

const products_filters_reducer = (state, action) => {
  if (action.type === MOBILE_PRODUCTS_FILTERS_OPEN) {
    return { ...state, isProductsFiltersMobileOpen: true };
  }
  if (action.type === MOBILE_PRODUCTS_FILTERS_CLOSE) {
    return { ...state, isProductsFiltersMobileOpen: false };
  }
  if (action.type === UPDATE_PRODUCTS_SELECTED_SORT) {
    const selectedOption = action.payload;
    return { ...state, selectedSort: selectedOption };
  }

  if (action.type === SORT_PRODUCTS) {
    const { selectedSort, filteredProducts } = state;
    let tempProducts = [...filteredProducts];

    if (selectedSort === "Price: Low to High") {
      tempProducts.sort(
        (a, b) =>
          a.priceRangeV2.minVariantPrice.amount -
          b.priceRangeV2.minVariantPrice.amount
      );
    } else if (selectedSort === "Price: High to Low") {
      tempProducts.sort(
        (a, b) =>
          b.priceRangeV2.minVariantPrice.amount -
          a.priceRangeV2.minVariantPrice.amount
      );
    } else if (selectedSort === "Alphabetical: A to Z") {
      tempProducts.sort((a, b) => a.title.localeCompare(b.title));
    }

    return { ...state, filteredProducts: tempProducts };
  }

  if (action.type === UPDATE_PRODUCTS_SELECTED_FILTERS) {
    const { sectionId, value, isChecked } = action.payload;

    const updatedFilters = { ...state.filters };

    // Check if the filter category exists, if not initialize it as an empty array
    if (!updatedFilters[sectionId]) {
      updatedFilters[sectionId] = [];
    }

    // If box is checked, add value to filter array
    if (isChecked) {
      // Add the filter item to the array only if it's not already there
      if (!updatedFilters[sectionId].includes(value)) {
        updatedFilters[sectionId].push(value);
      }
    } else {
      // If box is unchecked, remove value from filter array
      updatedFilters[sectionId] = updatedFilters[sectionId].filter(
        (item) => item !== value
      );
    }

    // Return new state with updated filters
    return { ...state, filters: updatedFilters };
  }

  if (action.type === SET_FILTERED_PRODUCTS) {
    return {
      ...state,
      filteredProducts: [...action.payload],
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { filters } = state;
    const filteredProducts = action.payload;
    const { text, categories, brands, materials, windings, price } = filters;
    let tempProducts = [...filteredProducts];

    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().startsWith(text.toLowerCase())
      );
    }
    if (categories.length !== 0) {
      tempProducts = tempProducts.filter((product) => {
        if (!product.metafieldCategory) return false;
        return categories.includes(product.metafieldCategory.value);
      });
    }
    if (brands.length !== 0) {
      tempProducts = tempProducts.filter((product) => {
        if (!product.metafieldBrand) return false;
        return brands.includes(product.metafieldBrand.value);
      });
    }
    if (materials.length !== 0) {
      tempProducts = tempProducts.filter((product) => {
        if (!product.metafieldMaterial) return false;
        return materials.includes(product.metafieldMaterial.value);
      });
    }
    if (windings.length !== 0) {
      tempProducts = tempProducts.filter((product) => {
        if (!product.metafieldWindings) return false;
        return windings.includes(product.metafieldWindings.value);
      });
    }
    if (price) {
      tempProducts = tempProducts.filter((product) => product.price <= price);
    }

    return { ...state, filteredProducts: tempProducts };
  }

  if (action.type === CLEAR_PRODUCTS_SELECTED_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        brands: [],
        categories: [],
        materials: [],
        windings: [],
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_filters_reducer;
