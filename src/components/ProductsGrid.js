import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useProductsFiltersContext } from "../context/products_filters_context";

const ProductGrid = () => {
  const { filteredProducts } = useProductsFiltersContext();

  return (
    <>
      <section
        aria-labelledby="product-heading"
        className="lg:col-span-2 xl:col-span-3"
      >
        <h2 id="product-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 lg:gap-x-6 xl:grid-cols-3">
          {filteredProducts.map((product) => {
            const image = getImage(product.media[0].image.gatsbyImageData);
            return (
              <Link
                to={`/shop/${product.handle}`}
                key={product.id}
                className="relative flex flex-col p-2 overflow-hidden bg-white rounded-lg group focus:outline-none focus:ring focus:ring-amber-400"
              >
                <div className="transition-opacity bg-gray-200 rounded-lg sm:group-hover:opacity-80">
                  <GatsbyImage
                    image={image}
                    alt=""
                    className="object-cover object-center w-full h-full rounded-lg shadow sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-4 space-y-2">
                  <div>
                    <h3 className="text-sm text-gray-900">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-xs italic text-gray-500">
                      {product.tags.includes("stainless-steel")
                        ? "stainless steel"
                        : product.tags.includes("nickel")
                        ? "nickel"
                        : product.tags.includes("coated")
                        ? "coated"
                        : ""}
                    </p>
                    <div className="flex flex-col justify-end flex-1">
                      <p className="mb-2 text-xs italic text-gray-500">
                        {product.tags.includes("flatwound")
                          ? "flatwound"
                          : product.tags.includes("roundwound")
                          ? "roundwound"
                          : ""}{" "}
                      </p>
                      <p className="text-base font-medium text-gray-900">
                        ${product.priceRangeV2.minVariantPrice.amount}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductGrid;
