import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ServicesMenu({ title, subtitle, menuItems, photos }) {
  let items = menuItems;
  let sectionTitle = title;
  let sectionSubtitle = subtitle;
  let sectionPhotos = photos;

  return (
    <>
      <div className="bg-white">
        <div className="grid items-start max-w-2xl grid-cols-1 px-4 py-16 mx-auto gap-x-8 gap-y-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-gray-500">{sectionSubtitle}</p>

            <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {items.map((feature) => {
                return (
                  <div
                    key={feature.id}
                    className="flex flex-col pt-4 border-t-2 border-gray-200 border-solid "
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.title}
                    </dt>
                    <dd className="mt-2 mb-2 text-sm text-gray-500 ">
                      <div>
                        {feature.description &&
                        Array.isArray(feature.description) ? (
                          feature.description.map((descriptionElement) => {
                            return (
                              <p
                                key={descriptionElement.children[0]._key}
                                className=""
                              >
                                {descriptionElement.children[0].text}
                              </p>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </div>
                      <ul>
                        {feature.descriptionBulleted &&
                        Array.isArray(feature.descriptionBulleted) ? (
                          feature.descriptionBulleted.map(
                            (descriptionElement) => {
                              return (
                                <li
                                  key={descriptionElement.children[0]._key}
                                  className="mb-4 ml-4 list-disc"
                                >
                                  {descriptionElement.children[0].text}
                                </li>
                              );
                            }
                          )
                        ) : (
                          <></>
                        )}
                      </ul>
                    </dd>
                    <dd className="mt-2 text-sm text-gray-900 font-montserratBold">
                      {feature.price}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 sm:mt-4 lg:gap-8 lg:mt-14">
            {sectionPhotos.map((photo) => {
              const image = getImage(photo.asset.gatsbyImageData);
              return (
                <GatsbyImage
                  image={image}
                  key={photo.asset._id}
                  alt=""
                  className="bg-gray-100 rounded-lg shadow"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
