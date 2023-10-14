import React, { useState, useEffect } from "react";
import { useCartContext } from "../context/cart_context";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export const Head = () => (
  <>
    <title>Grizzly Guitar | Cart</title>
    <meta
      name="description"
      content="Your destination for instruments, parts and service guided by one principle - Craftsmanship."
    />
    <meta name="author" content="Andrew" />

    <meta property="og:title" content="Grizzly Guitar" />
    <meta
      property="og:description"
      content="Your destination for instruments, parts and service guided by one principle - Craftsmanship."
    />
    <meta
      property="og:image"
      content="https://grizzlyguitar.com/images/og-image.png"
    />
    <meta
      property="og:image:alt"
      content="A screenshot of the Grizzly Guitar website"
    />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://grizzlyguitar.com/" />

    <meta name="twitter:card" content="summary_large_image" />

    <meta name="theme-color" content="rgb(31 41 55)" />
  </>
);

const CartPage = () => {
  const { checkout, removeLineItem, updateLineItem } = useCartContext();
  const [localCheckout, setLocalCheckout] = useState(null);
  const [isSubtotalLoading, setSubtotalLoading] = useState(true);

  useEffect(() => {
    setLocalCheckout(checkout);
    if (checkout && checkout.subtotalPriceV2) {
      setSubtotalLoading(false);
    }
  }, [checkout]);

  const handleQuantityChange = () => {
    setSubtotalLoading(true);
  };

  const handleQuantityInputChange = (checkoutID, lineItemID, e) => {
    handleQuantityChange();

    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setLocalCheckout((prevCheckout) => {
        const updatedLineItems = prevCheckout.lineItems.map((item) =>
          item.id === lineItemID ? { ...item, quantity: value } : item
        );
        return { ...prevCheckout, lineItems: updatedLineItems };
      });

      updateLineItem(checkoutID, lineItemID, value).catch(() => {
        setLocalCheckout(checkout);
      });
    }
  };

  const incrementQuantity = (checkoutID, lineItemID, currentQuantity) => {
    handleQuantityChange();

    setLocalCheckout((prevCheckout) => {
      const updatedLineItems = prevCheckout.lineItems.map((item) =>
        item.id === lineItemID
          ? { ...item, quantity: currentQuantity + 1 }
          : item
      );
      return { ...prevCheckout, lineItems: updatedLineItems };
    });

    updateLineItem(checkoutID, lineItemID, currentQuantity + 1).catch(() => {
      setLocalCheckout(checkout);
    });
  };

  const decrementQuantity = (checkoutID, lineItemID, currentQuantity) => {
    handleQuantityChange();

    if (currentQuantity > 1) {
      setLocalCheckout((prevCheckout) => {
        const updatedLineItems = prevCheckout.lineItems.map((item) =>
          item.id === lineItemID
            ? { ...item, quantity: currentQuantity - 1 }
            : item
        );
        return { ...prevCheckout, lineItems: updatedLineItems };
      });

      updateLineItem(checkoutID, lineItemID, currentQuantity - 1).catch(() => {
        setLocalCheckout(checkout);
      });
    }
  };

  const handleRemoveLineItem = (checkoutID, lineItemID) => {
    setSubtotalLoading(true);
    removeLineItem(checkoutID, lineItemID);
  };

  if (!localCheckout) return <div>Loading...</div>;

  const handleCheckout = () => {
    if (checkout && checkout.webUrl) {
      window.location.href = checkout.webUrl;
    } else {
      console.log(`error checking out`);
    }
  };

  return (
    <>
      <Layout>
        <div className="w-full max-w-2xl lg:max-w-4xl">
          <div className="max-w-4xl px-4 pb-16 mx-auto sm:pb-24 ">
            <div className="pt-12 border-gray-200 pb-10border-b ">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">
                Cart
              </h1>
            </div>

            <form className="flex flex-col">
              <h2 className="sr-only">Items in your shopping cart</h2>

              <ul className="">
                {localCheckout.lineItems.map((product, index) => {
                  const totalLineItemPrice =
                    product.variant.priceV2.amount * product.quantity;

                  const formattedPrice =
                    parseFloat(totalLineItemPrice).toFixed(2);

                  return (
                    <li
                      key={index}
                      className="flex py-6 border-b border-solid border-grey-400 "
                    >
                      <div className="flex-shrink-0 w-24 h-24 transition-opacity ease-in-out sm:h-32 sm:w-32 opacity-90 hover:opacity-100">
                        <Link
                          to={`/shop/${product.variant.product.handle}`}
                          className="inline-block w-24 h-24 rounded-lg shadow focus:ring focus:ring-amber-400 focus:outline-none focus:ring-offset-4 sm:h-32 sm:w-32"
                        >
                          <img
                            src={product.variant.image.src}
                            alt=""
                            className="object-cover object-center w-24 h-24 rounded-lg sm:h-32 sm:w-32"
                          />
                        </Link>
                      </div>

                      <div className="relative flex flex-col justify-between flex-1 ml-4 sm:ml-8 ">
                        <div className="flex justify-between sm:grid sm:grid-cols-2">
                          <div className="mr-6">
                            <h3 className="text-sm ">
                              <Link
                                to={`/shop/${product.variant.product.handle}`}
                                className="font-medium text-gray-700 transition-colors ease-in-out focus:rounded hover:text-black focus:ring focus:ring-amber-400 focus:outline-none focus:ring-offset-4"
                              >
                                {product.title}
                              </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 ">
                              {product.variant.title}
                            </p>
                          </div>

                          <p className="text-sm font-medium text-right text-gray-900 ">
                            ${formattedPrice}
                          </p>
                        </div>

                        <div className="flex flex-col mt-4 sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
                          <label
                            htmlFor={`custom-input-number-${index}`}
                            className="sr-only"
                          >
                            Quantity, {product.title}
                          </label>
                          <div className="flex justify-between mb-4 border border-black border-solid rounded-md shadow w-36 h-9">
                            <button
                              type="button"
                              aria-label="Decrease quantity by 1"
                              data-action="decrement"
                              onClick={() =>
                                decrementQuantity(
                                  checkout.id,
                                  product.id,
                                  product.quantity
                                )
                              }
                              className="text-gray-700 bg-gray-200 border-r border-gray-700 border-solid outline-none cursor-pointer w-9 focus:border rounded-l-5px focus:z-10 focus:ring focus:ring-amber-400 focus:ring-offset-4 hover:bg-gray-300 active:bg-gray-400 focus:outline-none"
                            >
                              <span className="text-xl font-medium">−</span>
                            </button>
                            <input
                              type="number"
                              min="1"
                              max="99"
                              className="flex items-center w-16 font-medium text-center text-gray-700 bg-white border-gray-700 border-solid outline-none sm:focus:border focus:z-10 focus:ring focus:ring-amber-400 focus:outline-none focus:ring-offset-4 hover:text-black focus:text-black"
                              id={`custom-input-number-${index}`}
                              name="custom-input-number"
                              value={product.quantity}
                              onChange={(e) =>
                                handleQuantityInputChange(
                                  localCheckout.id,
                                  product.id,
                                  e
                                )
                              }
                            />
                            <button
                              type="button"
                              data-action="increment"
                              aria-label="Increase quantity by 1"
                              onClick={() =>
                                incrementQuantity(
                                  localCheckout.id,
                                  product.id,
                                  product.quantity
                                )
                              }
                              className="text-gray-700 bg-gray-200 border-l border-gray-700 border-solid outline-none cursor-pointer w-9 focus:border rounded-r-5px focus:z-10 focus:ring focus:ring-amber-400 focus:ring-offset-4 hover:bg-gray-300 active:bg-gray-400 focus:outline-none"
                            >
                              <span className="text-xl font-medium ">+</span>
                            </button>
                          </div>

                          <div className="flex justify-center w-36">
                            <button
                              type="button"
                              className="text-sm font-medium text-gray-500 transition-colors ease-in-out focus:rounded hover:text-gray-600 active:text-gray-700 focus:ring focus:ring-amber-400 focus:outline-none focus:ring-offset-4"
                              onClick={() =>
                                handleRemoveLineItem(
                                  localCheckout.id,
                                  product.id
                                )
                              }
                            >
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <section
                aria-labelledby="summary-heading"
                className="self-end w-full max-w-md mt-10 "
              >
                <h2 id="summary-heading" className="sr-only">
                  Order summary
                </h2>

                <div className="">
                  <dl className="space-y-4">
                    <div className="flex items-center justify-between">
                      <dt className="text-base font-medium text-gray-900">
                        Subtotal
                      </dt>
                      <dd className="ml-4 text-base font-medium text-gray-900">
                        {isSubtotalLoading ? (
                          <div>Calculating...</div>
                        ) : (
                          checkout &&
                          checkout.subtotalPriceV2 && (
                            <p>
                              $
                              {parseFloat(
                                checkout.subtotalPriceV2.amount
                              ).toFixed(2)}
                            </p>
                          )
                        )}
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-1 text-sm text-gray-500">
                    Shipping and taxes will be calculated at checkout.
                  </p>
                </div>

                <div className="mt-10">
                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="w-full px-4 py-3 text-base font-medium text-gray-900 transition-colors ease-in-out border border-transparent rounded-md shadow active:bg-amber-600 bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring focus:ring-amber-400 focus:ring-offset-4"
                  >
                    Checkout
                  </button>
                </div>

                <div className="mt-6 text-sm text-center text-gray-500">
                  <p>
                    or
                    <Link
                      to="/shop"
                      className="ml-1 font-medium text-amber-500 hover:text-amber-600 active:text-amber-700 focus:ring focus:rounded focus:ring-amber-400 focus:outline-none focus:ring-offset-4"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </p>
                </div>
              </section>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default CartPage;
