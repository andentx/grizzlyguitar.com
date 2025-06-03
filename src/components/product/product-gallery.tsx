"use client";

import { useProduct, useUpdateURL } from "@/components/product/product-context";
import { ProductImageThumbnail } from "@/components/product/product-image-thumbnail";
import Image from "next/image";

export function ProductGallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  return (
    <form>
      <div className="relative mx-auto mb-12 flex aspect-square h-full max-h-[550px] overflow-hidden rounded-lg lg:mx-0">
        {images[imageIndex] && (
          <Image
            className="h-full w-full rounded-lg object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}
      </div>

      {images.length > 1 ? (
        <ul className="mx-auto mb-10 flex max-w-[550px] flex-wrap items-center gap-2">
          {images.map((image, index) => {
            const isActive = index === imageIndex;

            return (
              <li key={image.src} className="h-20 w-20">
                <button
                  formAction={() => {
                    const newState = updateImage(index.toString());
                    updateURL(newState);
                  }}
                  aria-label="Select product image"
                  className="h-full w-full"
                >
                  <ProductImageThumbnail
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
}
