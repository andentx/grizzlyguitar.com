import React from "react";
import { useProductsFiltersContext } from "../context/products_filters_context";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function ProductsSortMenu() {
  const { selectedSort, updateProductsSelectedSort } =
    useProductsFiltersContext();

  const handleSortChange = (selectedOption) => {
    updateProductsSelectedSort(selectedOption);
  };

  const sortOptions = [
    { name: "Alphabetical: A to Z", value: "az" },
    { name: "Price: Low to High", value: "lowToHigh" },
    { name: "Price: High to Low", value: "highToLow" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="p-2 ">
      <div className="flex justify-end mx-auto max-w-7xl">
        <Menu as="div" className="relative inline-block">
          <div className="flex">
            <Menu.Button className="inline-flex items-center justify-center p-2 text-lg font-medium text-gray-700 rounded-md group hover:text-gray-900 focus:ring focus:ring-amber-400 focus:outline-none">
              {selectedSort}
              <ChevronDownIcon
                className="flex-shrink-0 w-6 h-6 ml-1 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-2xl w-44 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {sortOptions.map((option) => (
                <Menu.Item key={option.name}>
                  {({ active }) => (
                    <button
                      onClick={() => handleSortChange(option)}
                      className={classNames(
                        option.name === selectedSort
                          ? "font-medium text-gray-900"
                          : "text-gray-500 font-normal",
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm w-full text-right"
                      )}
                    >
                      {option.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
