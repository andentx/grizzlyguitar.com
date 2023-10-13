import React from "react";
import { ProductsProvider } from "./src/context/products_context";
import { ProductsFiltersProvider } from "./src/context/products_filters_context";
import { CartProvider } from "./src/context/cart_context";

export const wrapRootElement = ({ element }) => {
  return (
    <ProductsProvider>
      <ProductsFiltersProvider>
        <CartProvider>{element}</CartProvider>
      </ProductsFiltersProvider>
    </ProductsProvider>
  );
};

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" });

  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/MontserratBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="montserratBold"
    />,
    <link
      rel="preload"
      href="/fonts/MontserratRegular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="montserratRegular"
    />,
    <link
      rel="preload"
      href="/fonts/AveriaRegular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="averiaRegular"
    />,
    <link
      rel="preload"
      href="/fonts/AveriaLight.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="averiaLight"
    />,
  ]);
};
