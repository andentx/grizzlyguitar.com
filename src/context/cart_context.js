import React, { createContext, useContext, useReducer, useEffect } from "react";
import cart_reducer from "../reducers/cart_reducer";
import { SET_CHECKOUT, SET_LOADING, SET_JUST_ADDED } from "../actions";
import fetch from "isomorphic-fetch";
import Client from "shopify-buy";

const client = Client.buildClient(
  {
    domain: process.env.GATSBY_SHOPIFY_STORE_URL,
    storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
  },
  fetch
);

const initialState = {
  loading: false,
  didJustAddToCart: false,
  client,
  checkout: {
    lineItems: [],
  },
};

export const CartContext = createContext(initialState);

const isBrowser = typeof window !== `undefined`;
const localStorageKey = `shopify_checkout_id`;

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);

  const setCheckoutItem = (checkout) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id);
    }
    dispatch({ type: SET_CHECKOUT, payload: checkout });
  };

  useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser
        ? localStorage.getItem(localStorageKey)
        : null;

      if (existingCheckoutID && existingCheckoutID !== `null`) {
        try {
          const existingCheckout = await client.checkout.fetch(
            existingCheckoutID
          );
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout);
            return;
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, null);
        }
      }

      const newCheckout = await client.checkout.create();
      setCheckoutItem(newCheckout);
    };

    initializeCheckout();
  }, []);

  const addVariantToCart = (variantId, quantity) => {
    dispatch({ type: SET_LOADING, payload: true });

    const checkoutID = state.checkout.id;

    const lineItemsToUpdate = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    return client.checkout
      .addLineItems(checkoutID, lineItemsToUpdate)
      .then((res) => {
        dispatch({ type: SET_CHECKOUT, payload: res });
        dispatch({ type: SET_LOADING, payload: false });
        dispatch({ type: SET_JUST_ADDED, payload: true });
        setTimeout(
          () => dispatch({ type: SET_JUST_ADDED, payload: false }),
          1200
        );
      });
  };

  const removeLineItem = (checkoutID, lineItemID) => {
    dispatch({ type: SET_LOADING, payload: true });

    return client.checkout
      .removeLineItems(checkoutID, [lineItemID])
      .then((res) => {
        dispatch({ type: SET_CHECKOUT, payload: res });
        dispatch({ type: SET_LOADING, payload: false });
      });
  };

  const updateLineItem = (checkoutID, lineItemID, quantity) => {
    dispatch({ type: SET_LOADING, payload: true });

    const lineItemsToUpdate = [
      { id: lineItemID, quantity: parseInt(quantity, 10) },
    ];

    return client.checkout
      .updateLineItems(checkoutID, lineItemsToUpdate)
      .then((res) => {
        dispatch({ type: SET_CHECKOUT, payload: res });
        dispatch({ type: SET_LOADING, payload: false });
      });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addVariantToCart,
        removeLineItem,
        updateLineItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
