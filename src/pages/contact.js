import * as React from "react";
import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

export const Head = () => (
  <>
    <title>Grizzly Guitar | Contact</title>
    <meta
      name="description"
      content="Your destination for instruments, parts and service guided by one principle - Craftsmanship."
    />
    <meta name="author" content="Andrew" />
    <meta name="theme-color" content="rgb(31 41 55)" />
  </>
);

const ContactPage = () => {
  return (
    <>
      <Layout>
        <div className="relative bg-white isolate">
          <div className="grid grid-cols-1 pt-24 mx-auto max-w-7xl lg:grid-cols-2 sm:pt-32 lg:py-48">
            <div className="relative px-6 pb-20 lg:static lg:px-8 ">
              <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Contact
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We offer services on-location in Baltimore, MD. as well as
                  remotely via shipping.
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-2">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <BuildingOffice2Icon
                        className="w-6 text-gray-400 h-7"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="pl-2">Baltimore, MD</dd>
                  </div>
                  <div className="flex gap-x-2 group">
                    <dt className="flex-none ">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon
                        className="w-6 text-gray-400 transition-colors ease-in-out h-7 group-hover:text-gray-900"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <a
                        className="p-2 transition-colors ease-in-out rounded-md focus:ring focus:ring-amber-400 focus:outline-none group-hover:text-gray-900 active:text-black "
                        href="mailto:hello@grizzlyguitar.com"
                      >
                        hello@grizzlyguitar.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ContactPage;
