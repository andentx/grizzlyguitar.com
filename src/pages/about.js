import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Layout from "../components/Layout";

export const Head = () => (
  <>
    <title>Grizzly Guitar | About</title>
    <meta
      name="description"
      content="Your destination for instruments, parts and service guided by one principle - Craftsmanship."
    />
    <meta name="author" content="Andrew" />

    <meta property="og:title" content="Grizzly Guitar" />
    <meta
      property="og:description"
      content="Your destination for instruments, parts and service guided by one principle - Craftsmanship."
    />
    <meta
      property="og:image"
      content="https://grizzlyguitar.com/images/og-image.png"
    />
    <meta
      property="og:image:alt"
      content="A screenshot of the Grizzly Guitar website"
    />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://grizzlyguitar.com/" />

    <meta name="twitter:card" content="summary_large_image" />

    <meta name="theme-color" content="rgb(31 41 55)" />
  </>
);

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
        Over the years I've developed tools and skills related to playing
        guitar, and love being able to help musicians on an individual basis.
        <br />
        <br />
        Now, my goal is to expand the tools services that I offer, as well as
        increase the number of musicians that I'm able to help. Building Grizzly
        Guitar into a solid concept is a step towards bringing my ideas together
        and building upon them.
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
        <Link to="/services">
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
        <Link to="/contact">
          <u>send a message</u>
        </Link>{" "}
        and get to know me.
      </>
    ),
  },
];

const AboutPage = ({ data }) => {
  const mainImage = data.allSanityAboutMainImage?.edges[0].node || [];
  const whatIOffer = data.allSanityAboutWhatIOffer?.edges || [];

  return (
    <>
      <Layout>
        <main className="isolate">
          <div className="px-6 py-24 mx-auto max-w-7xl sm:py-24 lg:px-8">
            <div className="flex flex-col items-center max-w-2xl lg:max-w-none lg:flex-row lg:items-start ">
              <div className="flex flex-col lg:pr-6 lg:w-1/2">
                <h1 className="max-w-2xl mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Hi, I'm Andrew
                </h1>

                <div className="mb-12 lg:mb-0">
                  <p className="text-lg leading-8 text-gray-600">
                    and I'm a guitar player. But really more of a bass player. I
                    also make web-based projects, and this is one of them.
                    <br />
                    <br />I love to adjust, build, and change things, so
                    naturally I learned how to work on my own guitars. Now that
                    I've been helping and working with other musicians and their
                    instruments, I wanted to set up a website with more
                    information about what I do.
                    <br />
                    <br />
                    Over time, I've developed guides, techniques and tools that
                    helped me, and I share them here hoping they'll help you
                    too.
                  </p>
                </div>
              </div>

              <GatsbyImage
                image={mainImage.image.asset.gatsbyImageData}
                alt={mainImage.imageAltText}
                className="aspect-[6/5] lg:w-1/2 rounded-2xl object-cover shadow"
              />
            </div>
          </div>

          <div className="max-w-2xl px-6 pb-24 mx-auto lg:max-w-7xl sm:pb-32 lg:px-8 lg:pb-40">
            <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                Questions and Answers:
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900 rounded focus:outline-none focus:ring-offset-4 focus:ring focus:ring-amber-400">
                            <span className="text-base font-semibold leading-7">
                              {faq.question}
                            </span>
                            <span className="flex items-center ml-6 h-7">
                              {open ? (
                                <MinusSmallIcon
                                  className="w-6 h-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="w-6 h-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="pr-12 mt-2">
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
          <section
            aria-labelledby="collection-heading"
            className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <h2
              id="collection-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              What I Offer:
            </h2>

            <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
              {whatIOffer.map((offerLink) => {
                const image = getImage(
                  offerLink.node.image.asset.gatsbyImageData
                );
                return (
                  <Link
                    key={offerLink.node.title}
                    to={offerLink.node.url}
                    className="block rounded-lg group focus:outline-none focus:ring focus:ring-amber-400 focus:ring-offset-8"
                  >
                    <div
                      aria-hidden="true"
                      className="overflow-hidden transition-opacity ease-in-out rounded-lg shadow opacity-100 group-hover:opacity-80"
                    >
                      <GatsbyImage
                        image={image}
                        alt={offerLink.node.imageAltText}
                        className="object-cover object-center w-full h-full aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 "
                      />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-gray-900 transition-colors ease-in-out group-hover:text-gray-600">
                      {offerLink.node.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 transition-colors ease-in-out group-hover:text-gray-400">
                      {offerLink.node.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
          <div className="w-full h-40 " />
        </main>
      </Layout>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    allSanityAboutWhatIOffer(sort: { index: ASC }) {
      edges {
        node {
          id
          title
          description
          url
          image {
            asset {
              gatsbyImageData
            }
          }
          imageAltText
        }
      }
    }
    allSanityAboutMainImage {
      edges {
        node {
          image {
            asset {
              gatsbyImageData
            }
          }
          imageAltText
        }
      }
    }
  }
`;
