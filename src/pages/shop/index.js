import React from "react";
import Layout from "../../components/Layout";
import ProductsFiltersMenuButton from "../../components/ProductsFiltersMenuButton.js";
import ProductsSortMenu from "../../components/ProductsSortMenu";
import ProductsFiltersMenuDesktop from "../../components/ProductsFiltersMenuDesktop";
import ProductsFiltersMenuMobile from "../../components/ProductsFiltersMenuMobile";
import ProductsGrid from "../../components/ProductsGrid";

export default function ShopPage() {
  return (
    <Layout>
      <div className="w-full">
        <main className="max-w-2xl px-4 mx-auto lg:max-w-7xl lg:px-8">
          <div className="pt-12 pb-10 border-b border-gray-200 ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              All Products
            </h1>
          </div>

          <div className="flex justify-between px-2 mb-4 border-t border-b border-gray-200 border-solid">
            <ProductsFiltersMenuButton />
            <ProductsSortMenu />
          </div>

          <div className="pt-4 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <ProductsFiltersMenuDesktop />
            <ProductsFiltersMenuMobile />
            <ProductsGrid />
          </div>
        </main>
      </div>
    </Layout>
  );
}
