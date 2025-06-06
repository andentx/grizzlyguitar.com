import ContactForm from "@/components/contact/contact-form";
import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function AppointmentSection() {
  return (
    <>
      <div className="relative isolate">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <h2 className="font-[family-name:var(--font-averia-regular)] text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Book an appointment
          </h2>
          <p className="my-4 mb-16 max-w-xl text-gray-500">
            Services are offered by appointment only. Each appointment starts
            with a conversation, so please fill out the form below or send an
            e-mail to get started.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 lg:static lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="font-[family-name:var(--font-averia-regular)] text-2xl font-bold tracking-tight text-gray-900">
                Contact
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We offer services on-location in Vancouver, WA. as well as
                remotely via shipping.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-2">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="pl-2">Vancouver, WA</dd>
                </div>
                <div className="flex gap-x-2">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="rounded-md p-2 hover:text-gray-900 focus-visible:ring focus-visible:ring-amber-400 focus-visible:outline-none active:text-black"
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
    </>
  );
}
