import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { LANDING_FEATURED_CATEGORIES_QUERY } from "@/sanity/lib/queries";
import type { LANDING_FEATURED_CATEGORIES_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
export default async function LandingFeaturedCategories() {
  const { data } = await sanityFetch({
    query: LANDING_FEATURED_CATEGORIES_QUERY,
  });
  const categories = data as LANDING_FEATURED_CATEGORIES_QUERYResult;

  return (
    <div className="mx-auto mb-24 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="font-[family-name:var(--font-averia-regular)] text-2xl font-bold tracking-tight text-gray-900">
        Shop the Store
      </h2>
      <p className="mt-4 text-base text-gray-500">
        A curated selection of recommended strings, tools, parts, and more.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:space-y-0 sm:gap-x-8">
        {categories.map((category) => (
          <a
            key={category._id}
            href={category.url || "#"}
            className="group mb-8 block rounded-lg focus-visible:ring-offset-8 focus-visible:ring-offset-neutral-50"
          >
            <h3 className="mb-4 font-[family-name:var(--font-averia-regular)] text-base font-semibold text-gray-900">
              {category.title}
            </h3>
            {category.image?.asset?.url ? (
              <Image
                src={urlFor(category.image).size(500, 500).url()}
                alt=""
                className="aspect-[5/6] rounded-lg object-cover group-hover:opacity-75"
                width={500}
                height={500}
                quality={90}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            ) : (
              <div className="flex aspect-[5/6] w-full items-center justify-center rounded-lg bg-gray-200">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
          </a>
        ))}
        {categories.length === 3 && (
          <div className="block sm:hidden">
            <div className="h-10 w-full"></div>
            <div className="flex aspect-[5/6] w-full items-center justify-center">
              <Link
                href="/shop"
                className="flex h-full w-full items-center justify-center rounded-lg bg-gray-200 hover:bg-gray-400"
              >
                <span className="text-base font-semibold text-gray-900">
                  Shop all{" "}
                  <span
                    className="inline-block transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="group hidden justify-end text-center sm:flex">
        <Link
          href="/shop"
          className="group block rounded-md px-4 py-2 text-center text-lg font-semibold text-gray-800 hover:text-amber-600 active:text-amber-700"
        >
          Shop all{" "}
          <span
            className="inline-block transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
