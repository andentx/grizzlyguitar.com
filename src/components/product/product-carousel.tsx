"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface ProductCarouselProps {
  children: React.ReactNode;
}

export function ProductCarousel({ children }: ProductCarouselProps) {
  return (
    <div className="relative px-12">
      <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full p-2">
        <ChevronLeftIcon className="h-6 w-6" />
      </div>

      <ul className="scrollbar-hide no-scrollbar flex w-full snap-x snap-mandatory gap-4 overflow-x-auto p-4">
        {children}
      </ul>

      <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full p-2">
        <ChevronRightIcon className="h-6 w-6" />
      </div>
    </div>
  );
}
