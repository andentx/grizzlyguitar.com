import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { SET_ALL_PRODUCTS } from "../actions";
import { graphql, useStaticQuery } from "gatsby";

const ProductsContext = createContext();

const initialState = {
  allProducts: [],
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = useStaticQuery(graphql`
    query AllProductsQuery {
      allShopifyProduct(
        sort: { priceRangeV2: { minVariantPrice: { amount: ASC } } }
      ) {
        edges {
          node {
            title
            handle
            descriptionHtml
            id
            shopifyId
            priceRangeV2 {
              minVariantPrice {
                amount
              }
              maxVariantPrice {
                amount
              }
            }
            media {
              ... on ShopifyMediaImage {
                image {
                  src
                  altText
                  gatsbyImageData(width: 600)
                }
                id
                image {
                  src
                  altText
                  gatsbyImageData(width: 600)
                }
              }
            }
            tags
            metafieldCategory: metafield(namespace: "custom", key: "category") {
              key
              value
            }
            metafieldBrand: metafield(namespace: "custom", key: "brand") {
              key
              value
            }
            metafieldMaterial: metafield(namespace: "custom", key: "material") {
              key
              value
            }
            metafieldStringCoating: metafield(
              namespace: "custom"
              key: "string_coating_2"
            ) {
              key
              value
            }
            metafieldWindings: metafield(namespace: "custom", key: "windings") {
              key
              value
            }
            metafieldGaugesTable: metafield(
              namespace: "custom"
              key: "test_gauge_table_01"
            ) {
              key
              value
            }
            totalInventory
            variants {
              title
              media {
                ... on ShopifyMediaImage {
                  id
                }
              }
              id
              shopifyId
              price
              inventoryQuantity
            }
          }
        }
      }
    }
  `);

  const setAllProducts = (allProducts) => {
    const products = allProducts.map(({ node }) => node);
    dispatch({ type: SET_ALL_PRODUCTS, payload: { allProducts: products } });
  };

  useEffect(() => {
    if (data) {
      setAllProducts(data.allShopifyProduct.edges);
    }
  }, [data]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        setAllProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
