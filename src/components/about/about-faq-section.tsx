"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const faqs = [
  {
    question: "What is Grizzly Guitar?",
    answer:
      "Grizzly Guitar is the name I'm using for some of my guitar related projects. These projects include resources and tools for musicians, a guitar service and repair workshop, an online store, and more.",
  },
  {
    question: "What started the Grizzly Guitar project?",
    answer: (
      <>
        Over the years I&apos;ve developed tools and skills related to playing
        guitar, and love being able to help musicians on an individual basis.
        <br />
        <br />
        Now, my goal is to expand the tools services that I offer, as well as
        increase the number of musicians that I&apos;m able to help. Building
        Grizzly Guitar into a solid concept is a step towards bringing my ideas
        together and building upon them.
      </>
    ),
  },
  {
    question: "What's the meaning behind the name Grizzly Guitar?",
    answer: "I like the bear and I like the z's.",
  },
  {
    question: "What services do you offer?",
    answer: (
      <>
        Guitar maintenance, setups, customization, repairs and restoration.{" "}
        <Link href="/services">
          <u>Click here to see full menu.</u>
        </Link>
      </>
    ),
  },
  {
    question: "Is the guitar shop open to the public?",
    answer: (
      <>
        Not really. Currently, services are only offered at my home and by
        appointment only. Services are only available to those who I know, but
        feel free to{" "}
        <Link href="/contact">
          <u>send a message</u>
        </Link>{" "}
        and get to know me.
      </>
    ),
  },
];

export default function AboutFaqSection() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 pb-24 sm:pb-32 lg:max-w-7xl lg:px-8 lg:pb-40">
      <div className="mx-auto max-w-4xl">
        <h2 className="border-b border-gray-900/10 pb-8 font-[family-name:var(--font-averia-regular)] text-2xl leading-10 font-bold tracking-tight text-gray-900">
          Questions and Answers:
        </h2>
        <dl className="">
          {faqs.map((faq) => (
            <Disclosure
              as="div"
              key={faq.question}
              className="border-b border-gray-900/10 py-6"
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between rounded text-left text-gray-900 focus-visible:ring focus-visible:ring-amber-400 focus-visible:ring-offset-4 focus-visible:outline-none">
                      <span className="text-base leading-7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
