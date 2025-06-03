import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { ABOUT_MAIN_IMAGE_QUERY } from "@/sanity/lib/queries";
import type { ABOUT_MAIN_IMAGE_QUERYResult } from "@/sanity/types";
import Image from "next/image";

export default async function AboutMeSection() {
  const { data: aboutMainImage } =
    await sanityFetch<ABOUT_MAIN_IMAGE_QUERYResult>({
      query: ABOUT_MAIN_IMAGE_QUERY,
    });

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-24 lg:px-8">
      <div className="flex max-w-2xl flex-col items-center lg:max-w-none lg:flex-row lg:items-start">
        <div className="flex flex-col lg:w-1/2 lg:pr-6">
          <h1 className="mb-6 max-w-2xl font-[family-name:var(--font-averia-regular)] text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hi, I&apos;m Andrew
          </h1>

          <div className="mb-12 lg:mb-0">
            <p className="text-lg leading-8 text-gray-600">
              and I&apos;m a guitar player. But really more of a bass player. I
              also make web-based projects, and this is one of them.
              <br />
              <br />I love to adjust, build, and change things, so naturally I
              learned how to work on my own guitars. Now that I&apos;ve been
              helping and working with other musicians and their instruments, I
              wanted to set up a website with more information about what I do.
              <br />
              <br />
              Over time, I&apos;ve developed guides, techniques and tools that
              helped me, and I share them here hoping they&apos;ll help you too.
            </p>
          </div>
        </div>

        {aboutMainImage[0]?.image?.asset?.url ? (
          <div className="relative aspect-[6/5] w-full lg:w-1/2">
            <Image
              src={urlFor(aboutMainImage[0].image).url()}
              alt={aboutMainImage[0].imageAltText || "Andrew playing the bass"}
              className="rounded-2xl object-cover shadow"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        ) : (
          <div className="flex aspect-[6/5] items-center justify-center rounded-2xl bg-gray-100 lg:w-1/2">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
      </div>
    </div>
  );
}
