import * as React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xayzrked");

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="px-6 pb-24 sm:pb-40 lg:px-8"
    >
      <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                style={{ WebkitAppearance: "none" }}
              />
              <ValidationError
                prefix="FirstName"
                field="first-name"
                errors={state.errors}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                style={{ WebkitAppearance: "none" }}
              />
              <ValidationError
                prefix="LastName"
                field="last-name"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                style={{ WebkitAppearance: "none" }}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                style={{ WebkitAppearance: "none" }}
              />
              <ValidationError
                prefix="PhoneNumber"
                field="phone-number"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900 "
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                defaultValue={""}
                style={{ WebkitAppearance: "none" }}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            disabled={state.submitting || state.succeeded}
            className={`rounded-md bg-gray-800 px-3.5 py-2.5  hover:text-amber-400  transition-colors ease-in-out text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-4  focus:ring-amber-400 ${
              state.succeeded ? "bg-gray-900" : ""
            }`}
          >
            {state.succeeded ? "Message Sent!" : "Send message"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
