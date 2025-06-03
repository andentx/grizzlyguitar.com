"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Form from "next/form";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <Form action="/shop" className="relative w-full max-w-96">
      <label htmlFor="search-input" className="sr-only">
        Search for products
      </label>
      <input
        id="search-input"
        key={searchParams?.get("q")}
        type="text"
        name="q"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm"
      />
      <div className="absolute top-0 right-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4 text-black" />
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="relative">
      <label htmlFor="search-skeleton-input" className="sr-only">
        Search for products
      </label>
      <input
        id="search-skeleton-input"
        placeholder="Search for products..."
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500"
      />
      <div className="absolute top-0 right-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4 text-black" />
      </div>
    </form>
  );
}
