import Image from "next/image";
import Link from "next/link";

export default function LandingHero() {
  return (
    <div className="relative isolate">
      <div
        aria-hidden="true"
        className="flex justify-center px-4 pt-10 sm:px-6 lg:px-8"
      >
        <Image
          src="https://res.cloudinary.com/dsz45zrla/image/upload/w_2880,q_auto,f_auto,dpr_auto/v1687379760/brightercolorsa_1_wkaunm.png"
          alt="A guitar on a workbench"
          className="h-[460px] w-full rounded-lg object-cover object-bottom lg:h-[41rem] lg:w-[1280px]"
          sizes="(max-width: 1340px) calc(100vw - 2rem), (min-width: 1340px) 1280px"
          width={1280}
          height={720}
          priority
          quality={100}
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center px-16 pt-24 text-center lg:pt-36">
        <h1 className="mb-4 font-[family-name:var(--font-averia-regular)] text-4xl text-gray-800 uppercase sm:text-6xl lg:text-8xl">
          Grizzly Guitar
        </h1>
        <p className="mb-12 max-w-lg text-xl text-black">
          Your destination for instruments, parts and service guided by one
          principle - Craftsmanship.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/services"
            className="inline-block rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium text-white shadow hover:text-amber-400"
          >
            View Services
          </Link>
          <Link
            href="/shop"
            className="inline-block rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white shadow hover:text-amber-400"
          >
            View Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
