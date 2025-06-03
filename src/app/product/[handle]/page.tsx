import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/footer";
import { ProductCard } from "@/components/product/product-card";
import { ProductCarousel } from "@/components/product/product-carousel";
import { ProductProvider } from "@/components/product/product-context";
import { ProductDescription } from "@/components/product/product-description";
import { ProductGallery } from "@/components/product/product-gallery";
import { HIDDEN_PRODUCT_TAG } from "@/lib/constants";
import { getProduct, getProductRecommendations } from "@/lib/shopify";
import { Image } from "@/lib/shopify/types";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    alternates: {
      canonical: `https://www.grizzlyguitar.com/product/${params.handle}`,
    },
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          type: "website",
          description:
            "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="mx-auto flex w-full max-w-2xl grow flex-col items-center px-4 pt-12 pb-24 sm:px-6 lg:max-w-[1440px] lg:px-8">
        <Link
          href="/shop"
          className="mb-8 inline-flex items-center self-start rounded-md p-2 text-gray-600 hover:text-black focus-visible:ring focus-visible:ring-amber-400 focus-visible:outline-none"
        >
          <ArrowLongLeftIcon className="mr-2 h-5 w-5" aria-hidden="true" />
          <span>Back to All Products</span>
        </Link>
        <div className="grid grid-cols-1 items-start pb-24 lg:grid-cols-2 lg:gap-x-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Suspense
              fallback={
                <div className="relative aspect-[1/1] h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              <ProductGallery
                images={product.images.slice(0, 5).map((image: Image) => ({
                  src: image.url,
                  altText: image.altText,
                }))}
              />
            </Suspense>
          </div>

          <div className="">
            <Suspense fallback={null}>
              <ProductDescription product={product} />
            </Suspense>
          </div>
        </div>
        <RelatedProducts id={product.id} />
      </div>
      <Footer />
    </ProductProvider>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <h2 className="mb-4 font-[family-name:var(--font-averia-regular)] text-2xl font-bold tracking-tight text-gray-900">
        Related Products
      </h2>
      <ProductCarousel>
        {relatedProducts.map((product) => (
          <li
            key={product.handle}
            className="w-[calc(100%+2rem)] flex-none snap-start sm:w-[calc(50%+0.5rem)] md:w-[calc(33.333%)] lg:w-[calc(25%-0.25rem)]"
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ProductCarousel>
    </div>
  );
}
