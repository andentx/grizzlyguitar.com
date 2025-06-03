import CartModal from "@/components/cart/modal";
import Logo from "@/components/logo";
import { getMenu } from "@/lib/shopify";
import { Menu } from "@/lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="relative mx-auto flex h-[4.75rem] w-full max-w-[1440px] items-center justify-between bg-gray-800 p-4 lg:px-8">
      <div className="flex w-full items-center justify-between lg:justify-start">
        <div className="mr-4 block flex-none lg:mr-0 lg:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex flex-shrink-0">
          <Link
            href="/"
            prefetch={true}
            className="group flex w-full items-center justify-center rounded-md p-1 hover:cursor-pointer focus:ring-2 focus:ring-amber-300 focus:outline-none"
          >
            <Logo className="mr-3 h-6 w-12 group-hover:fill-amber-400 group-active:fill-amber-500" />
            <span className="h-4 w-[1px] bg-white group-hover:bg-amber-400 group-active:bg-amber-500"></span>
            <div className="ml-3 flex-none font-[family-name:var(--font-averia-regular)] text-lg leading-4 font-medium text-white uppercase group-hover:text-amber-400 group-active:text-amber-500 lg:block">
              {SITE_NAME}
            </div>
          </Link>
        </div>
        <div className="hidden w-full justify-end px-8 lg:flex">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        {menu.length ? (
          <ul className="mr-6 hidden gap-2 text-sm lg:flex lg:items-center">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  prefetch={true}
                  className="rounded-md px-2 py-1 text-amber-50 hover:text-amber-300 focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:outline-none active:text-amber-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="ml-4 flex justify-end lg:ml-0">
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
