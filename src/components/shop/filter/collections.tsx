import { Suspense } from "react";
import type { PathFilterItem } from ".";
import { FilterListItem } from "./filter-list-item";

function CollectionItemList({ list }: { list: PathFilterItem[] }) {
  return (
    <>
      {list.map((item: PathFilterItem, i) => (
        <FilterListItem key={i} item={item} />
      ))}
    </>
  );
}

export default function Collections({ list }: { list: PathFilterItem[] }) {
  return (
    <nav>
      <h2 className="mb-6 font-[family-name:var(--font-montserrat-bold)] text-sm font-medium text-gray-900 md:block">
        Category
      </h2>
      <ul className="block">
        <Suspense fallback={null}>
          <CollectionItemList list={list} />
        </Suspense>
      </ul>
    </nav>
  );
}
