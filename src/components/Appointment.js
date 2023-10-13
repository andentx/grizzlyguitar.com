import * as React from "react";
import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import ContactForm from "./ContactForm";

const Appointment = () => {
  return (
    <div className="relative bg-white isolate">
      <div className="flex flex-col items-center max-w-3xl px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Book an appointment
        </h2>
        <p className="max-w-xl my-4 mb-16 text-gray-500">
          Services are offered by appointment only. Each appointment starts with
          a conversation, so please fill out the form below or send an e-mail to
          get started.
        </p>
      </div>

      <div className="grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
        <div className="relative px-6 pb-20 lg:static lg:px-8 ">
          <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
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
              <div className="flex gap-x-2">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="w-6 text-gray-400 h-7"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="p-2 transition-colors ease-in-out rounded-md focus:ring focus:ring-amber-400 focus:outline-none hover:text-gray-900 active:text-black "
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
  );
};

export default Appointment;
