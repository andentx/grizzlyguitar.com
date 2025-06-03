import ProductGrid from "@/components/product/product-grid";
import { ProductImageThumbnail } from "@/components/product/product-image-thumbnail";
import { Product } from "@/lib/shopify/types";
import Link from "next/link";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product) => (
        <ProductGrid.Item key={product.handle} className="animate-fadeIn">
          <Link
            prefetch={true}
            href={`/product/${product.handle}`}
            className="group block rounded-lg focus-visible:ring focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-50 focus-visible:outline-none"
          >
            <div className="flex flex-col gap-4 rounded-lg">
              <div className="relative aspect-[1/1] w-full overflow-hidden rounded-md">
                <ProductImageThumbnail
                  alt={product.title}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </div>
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
                    <p className="mb-8 text-base font-medium text-gray-900">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency:
                          product.priceRange.maxVariantPrice.currencyCode,
                      }).format(
                        parseFloat(product.priceRange.maxVariantPrice.amount)
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </ProductGrid.Item>
      ))}
    </>
  );
}
