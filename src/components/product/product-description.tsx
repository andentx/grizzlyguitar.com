import { AddToCart } from "@/components/cart/add-to-cart";
import ProductDescriptionProse from "@/components/product/product-description-prose";
import { ProductGaugeTable } from "@/components/product/product-gauge-table";
import ProductPrice from "@/components/product/product-price";
import { Product } from "@/lib/shopify/types";
import { ProductVariantSelector } from "./product-variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col">
        <h1 className="mb-3 font-[family-name:var(--font-averia-regular)] text-3xl font-bold">
          {product.title}
        </h1>
        {product.variants.length > 1 && (
          <>
            <h2 className="sr-only">Variant</h2>
            <h2 className="mb-3 font-[family-name:var(--font-averia-regular)] text-2xl tracking-tight text-gray-900">
              <div className="flex flex-col gap-2">
                <span>{product.variants[0]!.title}</span>
              </div>
            </h2>
          </>
        )}
        <div className="">
          <h3 className="sr-only">Price</h3>
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">
            <ProductPrice
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </h3>
        </div>
      </div>
      {product.descriptionHtml ? (
        <ProductDescriptionProse
          className="mb-6 text-sm leading-tight"
          html={product.descriptionHtml}
        />
      ) : null}
      <ProductVariantSelector
        options={product.options}
        variants={product.variants}
      />
      <AddToCart product={product} />
      <ProductGaugeTable product={product} />
    </>
  );
}
