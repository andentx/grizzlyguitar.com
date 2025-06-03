import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { WHAT_WE_DO_FEATURES_QUERY } from "@/sanity/lib/queries";
import type { WHAT_WE_DO_FEATURES_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";

export default async function WhatWeDoSection() {
  const { data: whatWeDo } = await sanityFetch<WHAT_WE_DO_FEATURES_QUERYResult>(
    {
      query: WHAT_WE_DO_FEATURES_QUERY,
    }
  );

  return (
    <div className="mx-auto max-w-2xl px-4 pb-24 sm:px-6 sm:pb-32 lg:max-w-7xl lg:px-8">
      <div className="mx-auto max-w-3xl py-32 text-center">
        <h2 className="font-[family-name:var(--font-averia-regular)] text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What we do
        </h2>
        <p className="my-4 text-gray-500">
          Grizzly Guitar offers personalized guitar setups, customizations, and
          repairs, as well as a curated selection of tools, parts, and
          instruments for sale. We are dedicated to artistry, quality, and
          creating an experience that is as special and unique as your guitar.
        </p>
      </div>

      <div className="mb-8 space-y-24 sm:mb-16">
        {whatWeDo.map(
          (
            feature: WHAT_WE_DO_FEATURES_QUERYResult[number],
            featureIdx: number
          ) => {
            return (
              <div
                key={feature._id}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={
                    featureIdx % 2 === 0
                      ? "mt-6 lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:mt-0 xl:col-span-4"
                      : "mt-6 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-0 xl:col-span-4 xl:col-start-9"
                  }
                >
                  <h3 className="font-[family-name:var(--font-averia-regular)] text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={
                    featureIdx % 2 === 0
                      ? "flex-auto lg:col-span-7 lg:col-start-6 lg:row-start-1 xl:col-span-8 xl:col-start-5"
                      : "flex-auto lg:col-span-7 lg:col-start-1 lg:row-start-1 xl:col-span-8"
                  }
                >
                  <div className="overflow-hidden rounded-lg bg-gray-100">
                    {feature.image?.asset?.url ? (
                      <Image
                        src={urlFor(feature.image).size(1600, 640).url()}
                        alt={feature.imageAltText || ""}
                        className="object-cover object-center"
                        width={1600}
                        height={640}
                        quality={90}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="flex h-64 items-center justify-center bg-gray-200">
                        <span className="text-gray-500">
                          No image available
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="flex w-full justify-end">
        <Link
          href="/services"
          className="group block rounded-md px-4 py-2 text-center text-lg font-semibold text-gray-800 hover:text-amber-600 active:text-amber-700"
        >
          View all services{" "}
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
