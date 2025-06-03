"use client";

import type { PathFilterItem } from "@/components/shop/filter";
import CollectionsFilter from "@/components/shop/filter/collections";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";

interface ProductsFiltersMenuButtonProps {
  collections: PathFilterItem[];
}

export default function ProductsFiltersMenuButton({
  collections,
}: ProductsFiltersMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group inline-flex items-center rounded-md p-2 hover:cursor-pointer focus-visible:ring focus-visible:ring-amber-400 focus-visible:outline-none lg:hidden"
      >
        <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900">
          Filters
        </span>
        {isOpen ? (
          <MinusIcon
            className="ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-700"
            aria-hidden="true"
          />
        ) : (
          <PlusIcon
            className="ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-700"
            aria-hidden="true"
          />
        )}
      </button>

      <span className="hidden items-center p-2 text-lg font-medium text-gray-700 lg:inline-flex">
        Filters
      </span>

      {isOpen && (
        <div className="absolute z-40 mt-2 w-60 rounded-md bg-white px-4 py-2 shadow-2xl ring-1 ring-black/5 lg:hidden">
          <CollectionsFilter list={collections} />
        </div>
      )}
    </div>
  );
}
