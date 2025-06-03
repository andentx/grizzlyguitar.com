import Image from "next/image";
import Link from "next/link";

export default function GuitarPhotoSection() {
  return (
    <div className="relative isolate mb-24">
      <div
        aria-hidden="true"
        className="flex justify-center px-4 pt-10 sm:px-6 lg:px-8"
      >
        <Image
          src="https://res.cloudinary.com/dsz45zrla/image/upload/v1734811156/DSC00868_a2hbgn.jpg"
          alt="A guitar on a workbench"
          width={2880}
          height={1620}
          className="w-full max-w-[1220px] rounded-lg object-cover object-center brightness-75 lg:h-auto lg:w-full"
          sizes="(max-width: 1340px) calc(100vw - 2rem), (min-width: 1340px) 1280px"
          priority={false}
          loading="lazy"
          quality={85}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h2 className="rounded-xl p-4 font-[family-name:var(--font-averia-regular)] text-4xl text-amber-50 drop-shadow-sm sm:text-6xl lg:text-8xl">
            Grizzly Blog
          </h2>
          <Link
            href="/blog"
            className="inline-block rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white shadow hover:text-amber-400"
          >
            View articles
          </Link>
        </div>
      </div>
    </div>
  );
}
