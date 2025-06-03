import Footer from "@/components/layout/footer";
import { sanityFetch } from "@/sanity/lib/fetch";
import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";
import { BLOG_POSTS_QUERYResult } from "@/sanity/types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  description:
    "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
  openGraph: {
    type: "website",
    description:
      "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
  },
  alternates: {
    canonical: "https://www.grizzlyguitar.com/blog",
  },
};

export default async function BlogPage() {
  const { data: posts } = await sanityFetch<BLOG_POSTS_QUERYResult>({
    query: BLOG_POSTS_QUERY,
  });

  return (
    <>
      <div className="flex h-full w-full grow flex-col items-center pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl pt-12 pb-10 lg:max-w-4xl">
            <h1 className="font-[family-name:var(--font-averia-regular)] text-4xl font-bold tracking-tight text-gray-900">
              From the blog
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Articles, guides and info related to getting the most out of your
              guitar.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post: any) => (
                <article
                  key={post._id}
                  className="group relative isolate flex flex-col gap-8 rounded-2xl lg:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[1/1] lg:w-64 lg:shrink-0">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      fill
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover shadow"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div>
                    <div className="relative max-w-xl">
                      <h2 className="mt-3 font-[family-name:var(--font-averia-regular)] text-2xl leading-6 font-semibold text-gray-900">
                        {post.title}
                      </h2>
                      <section className="mt-5 text-sm leading-6 text-gray-600">
                        {post.excerpt}
                      </section>
                      <Link
                        href={`/blog/${post.slug.current}`}
                        className="group/readmore mt-6 inline-flex items-center rounded text-sm font-bold text-gray-600 hover:text-amber-600 focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-white focus-visible:outline-none"
                      >
                        Read more
                        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-active/readmore:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
