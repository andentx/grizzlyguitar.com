import ProductPrice from "@/components/product/product-price";
import { Product } from "@/lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.handle}`}
      prefetch={true}
      className="group block rounded-lg focus-visible:ring focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-50 focus-visible:outline-none"
    >
      <div className="flex flex-col gap-4 rounded-lg">
        {product.featuredImage?.url ? (
          <Image
            src={product.featuredImage.url}
            alt={product.title}
            className="h-full w-full rounded-md object-cover group-hover:opacity-80"
            width={500}
            height={500}
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        ) : (
          <div className="flex aspect-[1/1] h-full w-full items-center justify-center rounded-md bg-gray-100">
            <span className="text-gray-400">No image</span>
          </div>
        )}
        <div className="flex flex-1 flex-col justify-between space-y-2 px-4">
          <div>
            <h3 className="font-[family-name:var(--font-montserrat-bold)] text-sm text-gray-900 group-hover:text-gray-600">
              {product.title}
            </h3>
          </div>
          <div>
            <p className="text-xs text-gray-500 italic">
              {product.tags.includes("stainless-steel")
                ? "stainless steel"
                : product.tags.includes("nickel")
                  ? "nickel"
                  : product.tags.includes("coated")
                    ? "coated"
                    : ""}
            </p>
            <div className="flex flex-1 flex-col justify-end">
              <p className="mb-2 text-xs text-gray-500 italic">
                {product.tags.includes("flatwound")
                  ? "flatwound"
                  : product.tags.includes("roundwound")
                    ? "roundwound"
                    : ""}{" "}
              </p>
              <ProductPrice
                amount={product.priceRange.maxVariantPrice.amount}
                currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                className="mb-8 text-base font-medium text-gray-900"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
