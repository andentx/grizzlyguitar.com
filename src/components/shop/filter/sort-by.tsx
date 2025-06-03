import { SortFilterItem } from "@/lib/constants";
import { Suspense } from "react";
import SortMenu from "./sort-menu";

export default function SortBy({ list }: { list: SortFilterItem[] }) {
  return (
    <nav className="flex items-center">
      <Suspense fallback={null}>
        <SortMenu list={list} />
      </Suspense>
    </nav>
  );
}
