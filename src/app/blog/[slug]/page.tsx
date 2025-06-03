import Footer from "@/components/layout/footer";
import { sanityFetch } from "@/sanity/lib/fetch";
import { BLOG_POST_QUERY } from "@/sanity/lib/queries";
import { BLOG_POST_QUERYResult } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return {
    description:
      "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
    openGraph: {
      type: "website",
      description:
        "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
    },
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
  };
}

export const revalidate = 60;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { data: post } = await sanityFetch<BLOG_POST_QUERYResult>({
    query: BLOG_POST_QUERY,
    params: { slug: resolvedParams.slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="container mx-auto flex grow flex-col items-center px-4 pt-16 pb-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-12 font-[family-name:var(--font-averia-regular)] text-5xl font-bold">
            {post.title}
          </h1>
          {post.mainImage?.asset?.url && (
            <div className="relative mb-8 aspect-[16/9]">
              <Image
                src={post.mainImage.asset.url}
                alt={post.title ?? "Blog post image"}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          )}
          <div className="prose-blog prose prose-lg mb-32 max-w-none">
            {post.content && <PortableText value={post.content} />}
          </div>

          <hr className="my-12" />

          <div className="mb-8 flex items-center">
            {post.author?.image?.asset?.url && (
              <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={post.author.image.asset.url}
                  alt={post.author.name ?? "Author"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="font-semibold">{post.author?.name}</p>
              <p className="text-gray-500">
                {post.publishedAt &&
                  new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              </p>
            </div>
          </div>

          <hr className="my-12" />

          <nav className="flex justify-between">
            <div className="flex-1">
              {post.previous?.slug?.current && (
                <Link
                  href={`/blog/${post.previous.slug.current}`}
                  className="-m-2 inline-flex items-center rounded-md p-2 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none active:text-black"
                >
                  ← {post.previous.title}
                </Link>
              )}
            </div>
            <div className="flex-1 text-right">
              {post.next?.slug?.current && (
                <Link
                  href={`/blog/${post.next.slug.current}`}
                  className="-m-2 inline-flex items-center rounded-md p-2 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none active:text-black"
                >
                  {post.next.title} →
                </Link>
              )}
            </div>
          </nav>
        </div>
      </article>
      <Footer />
    </>
  );
}
