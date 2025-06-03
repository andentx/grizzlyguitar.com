"use client";

import type { SortFilterItem } from "@/lib/constants";
import { defaultSort } from "@/lib/constants";
import { createUrl } from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { ListItem, PathFilterItem } from ".";

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? "p" : Link;

  newParams.delete("q");

  return (
    <li className="mb-3 flex w-min flex-row">
      <DynamicTag
        href={createUrl(item.path, newParams)}
        className="flex items-center rounded-xs focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
      >
        <label className="flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={active}
            readOnly
            tabIndex={-1}
            className="h-4 w-4 rounded border-gray-300"
            aria-label={item.title}
          />
          <span className="ml-3 text-sm whitespace-nowrap text-gray-600">
            {item.title}
          </span>
        </label>
      </DynamicTag>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort");
  const active = sortParam
    ? sortParam === item.slug
    : item.slug === defaultSort.slug;
  const q = searchParams.get("q");
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug }),
    })
  );
  const DynamicTag = active ? "p" : Link;

  return (
    <DynamicTag
      prefetch={!active ? false : undefined}
      href={href}
      className={clsx("flex items-center text-sm", {
        "hover:bg-gray-100": !active,
        "text-gray-950": active,
        "text-gray-500": !active,
      })}
    >
      <label className="flex w-full cursor-pointer items-center">
        <input
          type="checkbox"
          checked={active}
          readOnly
          className="mr-2 h-4 w-4"
          aria-label={item.title}
        />
        <span className="w-full px-4 py-2">{item.title}</span>
      </label>
    </DynamicTag>
  );
}

export function FilterListItem({ item }: { item: ListItem }) {
  return "path" in item ? (
    <PathFilterItem item={item} />
  ) : (
    <SortFilterItem item={item} />
  );
}
