import React from "react";
import { ProductsProvider } from "./src/context/products_context";
import { ProductsFiltersProvider } from "./src/context/products_filters_context";

export const wrapRootElement = ({ element }) => {
  return (
    <ProductsProvider>
      <ProductsFiltersProvider>{element}</ProductsFiltersProvider>
    </ProductsProvider>
  );
};

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};
