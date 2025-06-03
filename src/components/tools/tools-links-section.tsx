import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { TOOLS_QUERY } from "@/sanity/lib/queries";
import type { TOOLS_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";

export default async function ToolsLinksSection() {
  const { data: tools } = await sanityFetch<TOOLS_QUERYResult>({
    query: TOOLS_QUERY,
  });

  return (
    <section
      aria-labelledby="tools-heading"
      className="mx-auto mb-40 max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2
        id="tools-heading"
        className="font-[family-name:var(--font-averia-regular)] text-2xl font-bold tracking-tight text-gray-900"
      >
        Tools
      </h2>

      <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-8">
        {tools.map((tool) => {
          return (
            <div key={tool._id} className="block rounded-lg">
              <div
                aria-hidden="true"
                className="overflow-hidden rounded-lg shadow"
              >
                {tool.image?.asset?.url && (
                  <Image
                    src={urlFor(tool.image).size(1600, 900).url()}
                    alt={tool.imageAltText || ""}
                    className="aspect-[16/9] h-full w-full object-cover object-center"
                    width={1600}
                    height={900}
                  />
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {tool.title}
              </h3>
              <p className="mt-2 min-h-[4lh] text-sm text-gray-500">
                {tool.description}
              </p>
              <div className="flex w-full justify-end">
                <Link
                  href={tool.url || ""}
                  className="group block rounded-md px-4 py-2 text-center text-base font-semibold text-gray-800 hover:text-amber-600 active:text-amber-700"
                >
                  {tool.linkText || "View all services"}{" "}
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
