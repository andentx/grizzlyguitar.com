"use client";

import { addItem } from "@/components/cart/actions";
import { useProduct } from "@/components/product/product-context";
import { Product, ProductVariant } from "@/lib/shopify/types";
import { PlusIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { useActionState } from "react";
import { useCart } from "./cart-context";

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const buttonClasses =
    "flex w-64 mb-32 items-center justify-center rounded-md border border-solid border-black px-8 py-3 text-base font-medium text-black shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-amber-400 focus-visible:ring-offset-4";
  const disabledClasses = "pointer-events-none bg-gray-200";

  if (!availableForSale) {
    return (
      <button disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        disabled
        className={clsx(buttonClasses, "pointer-events-none bg-amber-100")}
      >
        Add To Cart <PlusIcon className="ml-1 inline-block h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      aria-label="Add to cart"
      className={clsx(
        buttonClasses,
        "bg-amber-400 hover:cursor-pointer hover:bg-amber-500"
      )}
    >
      Add To Cart <PlusIcon className="ml-1 inline-block h-5 w-5" />
    </button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useActionState(addItem, null);

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const addItemAction = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find(
    (variant) => variant.id === selectedVariantId
  )!;

  return (
    <form
      action={async () => {
        addCartItem(finalVariant, product);
        addItemAction();
      }}
    >
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
