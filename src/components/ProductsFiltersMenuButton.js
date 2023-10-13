import React from "react";

import { useProductsFiltersContext } from "../context/products_filters_context";

import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";

export default function ProductsFiltersMenuButton() {
  const {
    isProductsFiltersMobileOpen,
    closeProductsFiltersMobile,
    openProductsFiltersMobile,
  } = useProductsFiltersContext();

  return (
    <div className="py-2">
      <div className="flex mx-auto space-x-6 text-sm divide-x divide-gray-200 max-w-7xl">
        <div>
          <button
            type="button"
            className="inline-flex items-center p-2 rounded-md focus:ring-amber-400 focus:ring focus:outline-none"
            onClick={
              isProductsFiltersMobileOpen
                ? closeProductsFiltersMobile
                : openProductsFiltersMobile
            }
          >
            <span className="text-lg font-medium text-gray-700">Filters</span>

            <div className="lg:hidden">
              {isProductsFiltersMobileOpen ? (
                <MinusIcon
                  className="flex-shrink-0 w-5 h-5 ml-1 text-gray-400"
                  aria-hidden="true"
                />
              ) : (
                <PlusIcon
                  className="flex-shrink-0 w-5 h-5 ml-1 text-gray-400"
                  aria-hidden="true"
                />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
