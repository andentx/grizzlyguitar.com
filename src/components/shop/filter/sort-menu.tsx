"use client";

import { SortFilterItem, defaultSort } from "@/lib/constants";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FilterItem } from "./item";

export default function SortMenu({ list }: { list: SortFilterItem[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState(defaultSort.title);
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const sortParam = searchParams.get("sort");
    if (!sortParam) {
      setActive(defaultSort.title);
      return;
    }

    const selectedSort = list.find((listItem) => listItem.slug === sortParam);
    if (selectedSort) {
      setActive(selectedSort.title);
    }
  }, [list, searchParams]);

  return (
    <div className="group relative min-w-[20ch]" ref={ref}>
      <div
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
        className="flex w-full items-center justify-between rounded px-4 py-2 text-lg font-medium text-gray-700 group-hover:cursor-pointer group-hover:text-black"
      >
        <div>{active}</div>
        <ChevronDownIcon className="ml-1 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-700" />
      </div>
      {openSelect && (
        <div
          onClick={() => {
            setOpenSelect(false);
          }}
          className="absolute z-40 w-full rounded-md bg-white py-2 shadow-2xl ring-1 ring-black/5"
        >
          {list.map((item: SortFilterItem, i) => (
            <FilterItem key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
