import * as React from "react";
import { ProductsProvider } from "./src/context/products_context";
import { ProductsFiltersProvider } from "./src/context/products_filters_context";
import { CartProvider } from "./src/context/cart_context";

import "./src/styles/reset.css";
import "./src/styles/global.css";
import "./src/styles/fonts.css";

export const wrapRootElement = ({ element }) => {
  return (
    <ProductsProvider>
      <ProductsFiltersProvider>
        <CartProvider>{element}</CartProvider>
      </ProductsFiltersProvider>
    </ProductsProvider>
  );
};
