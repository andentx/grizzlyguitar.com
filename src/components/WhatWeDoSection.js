import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const WhatWeDoSection = ({ whatWeDo }) => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl px-4 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 sm:pb-32 ">
          <div className="max-w-3xl py-32 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What we do
            </h2>
            <p className="my-4 text-gray-500">
              Grizzly Guitar offers personalized guitar setups, customizations,
              and repairs, as well as a curated selection of tools, parts and
              instruments for sale. We are dedicated to artistry, quality, and
              creating an experience that is as special and unique as your
              guitar.
            </p>
          </div>

          <div className="space-y-24 ">
            {whatWeDo.map((feature, featureIdx) => {
              const image = getImage(feature.node.image.asset.gatsbyImageData);

              return (
                <div
                  key={feature.node.id}
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                >
                  <div
                    className={classNames(
                      featureIdx % 2 === 0
                        ? "lg:col-start-1"
                        : "lg:col-start-8 xl:col-start-9",
                      "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                    )}
                  >
                    <h3 className="text-lg font-medium text-gray-900 font-averiaRegular">
                      {feature.node.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {feature.node.description}
                    </p>
                  </div>
                  <div
                    className={classNames(
                      featureIdx % 2 === 0
                        ? "lg:col-start-6 xl:col-start-5"
                        : "lg:col-start-1",
                      "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                    )}
                  >
                    <div className="overflow-hidden bg-gray-100 rounded-lg">
                      <GatsbyImage
                        image={image}
                        alt={feature.node.imageAltText}
                        className="object-cover object-center "
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDoSection;
