import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import Image from "next/image";

interface Service {
  _id: string;
  title: string | null;
  description?: any[] | null;
  price?: string | null;
}

interface ServiceImage {
  asset: {
    url: string | null;
  } | null;
  alt: string | null;
}

interface ServicesMenuSection {
  _id: string;
  index: number | null;
  title: string | null;
  subtitle: string | null;
  menuItems: Service[];
  images: ServiceImage[] | null;
}

export default async function ServicesSection() {
  const result = await sanityFetch({
    query: SERVICES_QUERY,
  });

  const servicesMenu = result.data as ServicesMenuSection[];

  return (
    <section aria-labelledby="services-heading" className="mb-16">
      <div className="mx-auto max-w-2xl px-4 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        {servicesMenu.map((section) => (
          <div
            key={section._id}
            className="mb-32 grid grid-cols-1 items-start gap-x-8 lg:grid-cols-2 lg:grid-rows-[auto_1fr]"
          >
            <div className="">
              <h2
                id="services-heading"
                className="mb-4 font-[family-name:var(--font-averia-regular)] text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="mb-12 text-lg text-gray-500 lg:mb-16">
                  {section.subtitle}
                </p>
              )}
            </div>

            <div className="mb-12 grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:row-span-2 lg:mb-8 lg:gap-8 lg:pt-14">
              {section.images?.map(
                (image: ServiceImage, index: number) =>
                  image.asset?.url && (
                    <div
                      key={index}
                      className="aspect-[1/1] overflow-hidden rounded-lg bg-gray-100 shadow"
                    >
                      <Image
                        src={urlFor(image).size(800, 800).url()}
                        alt={image.alt || `Service image ${index + 1}`}
                        className="h-full w-full object-cover object-center"
                        width={800}
                        height={800}
                      />
                    </div>
                  )
              )}
            </div>

            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {section.menuItems.map((service: Service) => (
                <div
                  key={service._id}
                  className="flex flex-col border-b-2 border-solid border-gray-200 pt-4 lg:border-t-2 lg:border-b-0"
                >
                  <dt className="mb-2 font-[family-name:var(--font-montserrat-bold)] font-bold text-gray-900">
                    {service.title}
                  </dt>
                  <dd className="mb-4 text-sm text-gray-500">
                    {service.description && (
                      <div className="prose-services">
                        <PortableText value={service.description} />
                      </div>
                    )}
                  </dd>
                  {service.price && (
                    <dd className="mb-16 font-[family-name:var(--font-montserrat-bold)] text-sm text-gray-900 lg:mb-0">
                      {service.price}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
