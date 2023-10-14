import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ServicesFAQ from "../components/ServicesFAQ";
import ServicesMenu from "../components/ServicesMenu";

export const Head = () => (
  <>
    <title>Grizzly Guitar | Services</title>
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

const ServicesPage = ({ data }) => {
  const sections = data.allSanityServicesMenuSection?.edges || [];

  return (
    <>
      <Layout>
        <div className="w-full pt-24 bg-white sm:pt-32">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Services
            </h2>
          </div>
        </div>

        {sections.length > 0 ? (
          sections.map((section) => {
            const { node } = section;
            return (
              <ServicesMenu
                key={node?.title || "default-key"}
                title={node?.title || "Default Title"}
                subtitle={node?.subtitle || ""}
                menuItems={node?.menuItems || []}
                photos={node?.images || []}
              />
            );
          })
        ) : (
          <p>No service sections available.</p>
        )}

        <ServicesFAQ />
      </Layout>
    </>
  );
};

export default ServicesPage;

export const query = graphql`
  query {
    allSanityServicesMenuSection(sort: { index: ASC }) {
      edges {
        node {
          title
          index
          subtitle
          id
          menuItems {
            title
            id
            description {
              children {
                _key
                _type
                marks
                text
              }
            }
            descriptionBulleted {
              children {
                _key
                _type
                marks
                text
              }
            }
            price
          }
          images {
            asset {
              _id
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
