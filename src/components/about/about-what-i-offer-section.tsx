import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { ABOUT_WHAT_I_OFFER_QUERY } from "@/sanity/lib/queries";
import type { ABOUT_WHAT_I_OFFER_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";

export default async function WhatIOfferSection() {
  const { data: whatIOffer } =
    await sanityFetch<ABOUT_WHAT_I_OFFER_QUERYResult>({
      query: ABOUT_WHAT_I_OFFER_QUERY,
    });

  return (
    <section
      aria-labelledby="collection-heading"
      className="mx-auto mb-40 max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2
        id="collection-heading"
        className="font-[family-name:var(--font-averia-regular)] text-2xl font-bold tracking-tight text-gray-900"
      >
        What I Offer:
      </h2>

      <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-8">
        {whatIOffer.map((offerLink) => {
          return (
            <div key={offerLink._id} className="block rounded-lg">
              <div
                aria-hidden="true"
                className="overflow-hidden rounded-lg shadow"
              >
                {offerLink.image?.asset?.url && (
                  <Image
                    src={urlFor(offerLink.image).size(1600, 900).url()}
                    alt={offerLink.imageAltText || ""}
                    className="aspect-[16/9] h-full w-full object-cover object-center"
                    width={1600}
                    height={900}
                  />
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {offerLink.title}
              </h3>
              <p className="mt-2 min-h-[4lh] text-sm text-gray-500">
                {offerLink.description}
              </p>
              <div className="flex w-full justify-end">
                <Link
                  href={offerLink.url || ""}
                  className="group block rounded-md px-4 py-2 text-center text-base font-semibold text-gray-800 hover:text-amber-600 active:text-amber-700"
                >
                  {offerLink.linkText || "View all services"}{" "}
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
        })}
      </div>
    </section>
  );
}
