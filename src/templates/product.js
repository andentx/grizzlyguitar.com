import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { useCartContext } from "../context/cart_context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Head = ({ pageContext }) => {
  return (
    <>
      <title>{`Grizzly Guitar | ${pageContext.product.title}`}</title>
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
};

export default function ProductTemplate({ pageContext }) {
  const { product } = pageContext;
  const variants = product.variants;
  const [gaugesTable, setGaugesTable] = useState(null);
  const { addVariantToCart, loading, didJustAddToCart } = useCartContext();

  useEffect(() => {
    if (product.metafieldGaugesTable && product.metafieldGaugesTable.value) {
      try {
        setGaugesTable(JSON.parse(product.metafieldGaugesTable.value));
      } catch (error) {
        console.error("Error parsing metafieldGaugesTable:", error);
      }
    }
  }, [product.metafieldGaugesTable]);

  const initialSelectedVariant =
    (variants && variants.find((variant) => variant.inventoryQuantity > 0)) ||
    (variants && variants[0]);

  const [currentlySelectedVariant, setCurrentlySelectedVariant] = useState(
    initialSelectedVariant
  );

  const onVariantChange = (e, variant) => {
    e.preventDefault();
    setCurrentlySelectedVariant(variant);
    handleSelectedVariantChange(variant);
  };

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleQuantityInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleQuantityInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVariantToCart(currentlySelectedVariant.shopifyId, quantity);
  };

  const handleSelectedVariantChange = (variant) => {
    setCurrentlySelectedVariant(variant);
  };

  const hasMultipleVariants = variants.length > 1;

  const isCurrentlySelectedVariantInStock = () => {
    if (variants && variants.length > 1) {
      return currentlySelectedVariant.inventoryQuantity > 0;
    } else {
      return product.totalInventory > 0;
    }
  };

  const [isInStock, setIsInStock] = useState(
    isCurrentlySelectedVariantInStock()
  );

  useEffect(() => {
    const isStockAvailable = hasMultipleVariants
      ? currentlySelectedVariant.inventoryQuantity > 0
      : product.totalInventory > 0;

    setIsInStock(isStockAvailable);
  }, [currentlySelectedVariant, hasMultipleVariants, product.totalInventory]);

  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-2xl px-4 pt-12 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
          <Link
            to="/shop"
            className="inline-flex items-center p-2 mb-8 text-gray-600 transition-colors ease-in-out rounded-md hover:text-black focus:outline-none focus:ring focus:ring-amber-400"
          >
            <ArrowLongLeftIcon className="w-5 h-5 mr-2" aria-hidden="true" />
            <span>Back to All Products</span>
          </Link>

          <div className="grid items-start grid-cols-1 lg:grid-cols-2 lg:gap-x-8">
            <div className="flex flex-col-reverse">
              <div className="w-full aspect-h-1 aspect-w-1">
                <img
                  src={currentlySelectedVariant.media[0].image.src}
                  alt={currentlySelectedVariant.media[0].image.altText}
                  className="object-cover object-center w-full h-full rounded-lg shadow"
                />
              </div>
            </div>

            <div className="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.title}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Variant</h2>
                <h2 className="text-2xl tracking-tight text-gray-900">
                  {currentlySelectedVariant.title}
                </h2>
              </div>

              <div className="mt-3">
                <h3 className="sr-only">Price</h3>
                <h3 className="text-3xl tracking-tight text-gray-900">
                  ${currentlySelectedVariant.price}
                </h3>
              </div>

              <div className="mt-6">
                <h4 className="sr-only">Description</h4>

                <div
                  className="space-y-6 text-base text-gray-700"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              </div>

              <form className="mt-6 mb-16" onSubmit={handleSubmit}>
                {hasMultipleVariants && (
                  <div className="mt-10 mb-10">
                    <div
                      role="radiogroup"
                      aria-labelledby="variant-label"
                      className="flex items-center justify-between"
                    >
                      <h4
                        id="variant-label"
                        className="mb-4 text-lg font-medium text-gray-900"
                      >
                        Choose Gauges:
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {variants.map((variant) => (
                        <button
                          type="button"
                          key={variant.shopifyId}
                          role="radio"
                          aria-checked={
                            currentlySelectedVariant.shopifyId ===
                            variant.shopifyId
                              ? "true"
                              : "false"
                          }
                          onClick={(e) => onVariantChange(e, variant)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              onVariantChange(e, variant);
                            }
                          }}
                          disabled={variant.inventoryQuantity < 1}
                          tabIndex={0}
                          className={classNames(
                            variant.inventoryQuantity >= 1
                              ? "cursor-pointer border-black shadow  hover:bg-amber-400 active:bg-amber-600"
                              : "cursor-not-allowed bg-gray-50 text-gray-200 border-gray-300",
                            variant.shopifyId ===
                              currentlySelectedVariant.shopifyId
                              ? "  bg-amber-400 border-solid  text-gray-900"
                              : "",
                            "border w-44 h-12 border-solid rounded-md focus:outline-none  transition-colors ease-in-out focus:ring focus:ring-offset-4 focus:ring-amber-400"
                          )}
                        >
                          <span>{variant.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="custom-input-number"
                    className="block mb-4 text-lg font-medium text-gray-900 "
                  >
                    Choose Quantity:
                  </label>
                  <div className="flex justify-between w-48 h-12 border border-black border-solid rounded-md shadow">
                    <button
                      type="button"
                      aria-label="Decrease quantity by 1"
                      data-action="decrement"
                      onClick={decrementQuantity}
                      className="w-12 text-gray-700 transition-colors ease-in-out bg-gray-200 border-r border-gray-700 border-solid outline-none cursor-pointer focus:border rounded-l-5px focus:z-10 focus:ring focus:ring-amber-400 focus:ring-offset-4 hover:bg-gray-300 active:bg-gray-400 focus:outline-none"
                    >
                      <span className="text-xl font-medium">−</span>
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="99"
                      className="flex items-center w-24 font-medium text-center text-gray-700 bg-white border-gray-700 border-solid outline-none sm:focus:border focus:z-10 focus:ring focus:ring-amber-400 focus:outline-none focus:ring-offset-4 hover:text-black focus:text-black"
                      id="custom-input-number"
                      name="custom-input-number"
                      value={quantity}
                      onChange={handleQuantityInputChange}
                      onKeyDown={handleQuantityInputKeyDown}
                    />
                    <button
                      type="button"
                      data-action="increment"
                      aria-label="Increase quantity by 1"
                      onClick={incrementQuantity}
                      className="w-12 text-gray-700 transition-colors ease-in-out bg-gray-200 border-l border-gray-700 border-solid outline-none cursor-pointer focus:border rounded-r-5px focus:z-10 focus:ring focus:ring-amber-400 focus:ring-offset-4 hover:bg-gray-300 active:bg-gray-400 focus:outline-none"
                    >
                      <span className="text-xl font-medium ">+</span>
                    </button>
                  </div>
                </div>

                <div className="flex mt-10">
                  <button
                    type="submit"
                    disabled={!isInStock || didJustAddToCart || loading}
                    className={`flex items-center  transition-colors ease-in-out justify-center w-64 px-8 py-3 text-base font-medium text-black border border-black border-solid rounded-md ${
                      loading
                        ? "bg-amber-200 pointer-events-none"
                        : didJustAddToCart
                        ? "bg-amber-300 pointer-events-none"
                        : isInStock
                        ? "bg-amber-400 hover:bg-amber-500"
                        : "bg-gray-400 pointer-events-none"
                    } focus:outline-none focus:ring focus:ring-amber-400 focus:ring-offset-4 shadow`}
                  >
                    {loading
                      ? "Adding to cart..."
                      : didJustAddToCart
                      ? "Added to cart!"
                      : isInStock
                      ? "Add to bag"
                      : "Out of Stock"}
                  </button>
                </div>
              </form>
              {product.metafieldGaugesTable && (
                <>
                  <div className="w-full ">
                    <h4 className="mb-4 text-lg font-medium text-gray-900 ">
                      Gauges:
                    </h4>

                    <div className="overflow-x-auto">
                      <div className="inline-block pb-2 align-middle">
                        <div className="overflow-hidden border border-gray-700 border-solid rounded-md shadow ">
                          <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 pl-6"
                                >
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Title
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {gaugesTable &&
                                gaugesTable.gauges &&
                                gaugesTable.gauges.map((variant, index) => (
                                  <tr key={index} className="">
                                    <td className="py-4 pl-6 pr-3 text-sm font-medium text-gray-900 align-middle w-44">
                                      {variant["variant-name"]}
                                    </td>
                                    <td className="px-3 py-3">
                                      <div className="flex items-center text-sm text-gray-500">
                                        {variant.gauges.map(
                                          (gauge, gaugeIndex) => (
                                            <p
                                              className="py-1 mx-2 text-center text-gray-700 bg-gray-200 rounded w-14"
                                              key={gaugeIndex}
                                            >
                                              {gauge}
                                            </p>
                                          )
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
