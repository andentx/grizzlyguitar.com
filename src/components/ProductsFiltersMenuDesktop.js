import React from "react";
import { useProductsFiltersContext } from "../context/products_filters_context";
import { productsFilters } from "../data/productsFilters";

const ProductFiltersMenuDesktop = () => {
  const {
    filters,
    updateProductsSelectedFilters,
    clearProductsSelectedFilters,
  } = useProductsFiltersContext();

  const handleCategoryChange = (event) => {
    updateProductsSelectedFilters(event);
  };

  const handleClearFilters = () => {
    clearProductsSelectedFilters();
  };

  return (
    <>
      <aside className="hidden lg:block" aria-label="Product Filters">
        <h2 className="sr-only">Filters</h2>
        <div className="hidden lg:block">
          <form
            className="space-y-10 divide-y divide-gray-200"
            aria-label="Filter Products"
          >
            {productsFilters.map((section) => (
              <div key={section.id}>
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-900">
                    {section.title}
                  </legend>
                  <div className="pt-6 space-y-3">
                    {section.options.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`${section.id}-${option.value}-desktop`}
                          name={`${option.value}`}
                          data-section-id={section.id}
                          defaultValue={option.value}
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded focus:outline-amber-400 "
                          checked={filters[section.id]?.includes(option.value)}
                          onChange={handleCategoryChange}
                        />
                        <label
                          id={`${section.id}-${option.value}-label-desktop`}
                          htmlFor={`${section.id}-${option.value}-desktop`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            ))}
            <div className="pt-10">
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors ease-in-out bg-gray-200 rounded-md shadow hover:bg-gray-300 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-amber-400"
                  aria-label="Clear all filters"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
};

export default ProductFiltersMenuDesktop;
