import Footer from "@/components/layout/footer";
import ProductsFiltersMenuButton from "@/components/product/products-filters-menu-button";
import Collections from "@/components/shop/collections";
import SortBy from "@/components/shop/filter/sort-by";
import { sorting } from "@/lib/constants";
import { getCollections } from "@/lib/shopify";
import { Suspense } from "react";
import ChildrenWrapper from "./children-wrapper";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <>
      <div className="flex w-full grow flex-col items-center pt-12">
        <div className="mx-auto w-full max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <h1 className="mb-10 font-[family-name:var(--font-averia-regular)] text-4xl font-bold tracking-tight text-gray-900">
            All Products
          </h1>
          <div className="mb-4 flex justify-between border-t border-b border-solid border-gray-200 p-2">
            <ProductsFiltersMenuButton collections={collections} />
            <SortBy list={sorting} />
          </div>
          <div className="mx-auto flex w-full max-w-(--breakpoint-2xl) flex-col gap-8 pt-4 text-black md:flex-row">
            <div className="order-first hidden w-full flex-none md:max-w-[280px] lg:block">
              <Collections />
            </div>
            <div className="order-last mb-12 min-h-screen w-full md:order-none">
              <Suspense fallback={null}>
                <ChildrenWrapper>{children}</ChildrenWrapper>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
