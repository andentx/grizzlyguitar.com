import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = () => {
  return (
    <>
      <div className="relative ">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex justify-center px-4 pt-10 overflow-hidden sm:px-6 lg:px-8 "
        >
          <StaticImage
            src="https://res.cloudinary.com/dsz45zrla/image/upload/v1687379760/brightercolorsa_1_wkaunm.png"
            alt="A guitar on a workbench"
            placeholder="none"
            className="object-cover object-center w-full h-full rounded-lg max-w-7xl"
            objectPosition="bottom center"
            formats={["auto", "webp", "avif"]}
            quality={95}
          />
        </div>

        <div className="relative flex flex-col items-center max-w-5xl px-6 pt-24 mx-auto text-center pb-44 lg:pt-36 lg:pb-72">
          <h1 className="mb-4 text-4xl text-gray-800 uppercase sm:text-6xl lg:text-8xl">
            Grizzly Guitar
          </h1>
          <p className="max-w-lg mb-12 text-xl text-black ">
            Your destination for instruments, parts and service guided by one
            principle - Craftsmanship.
          </p>
          <Link
            to="/services"
            className="inline-block px-8 py-3 text-base font-medium text-white transition-colors ease-in-out bg-gray-800 border border-transparent rounded-md shadow hover:text-amber-400 focus:ring-amber-400 focus:outline-none focus:ring-4"
          >
            view services menu
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
