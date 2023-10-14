import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import ViewServicesMenu from "../components/ViewServicesMenu";
import Appointment from "../components/Appointment";

export const Head = () => (
  <>
    <title>Grizzly Guitar</title>
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

export default function IndexPage({ data }) {
  const whatWeDo = data.allSanityIndexWhatWeDo.edges;
  return (
    <Layout>
      <div className="w-full bg-white">
        <HeroSection />
        <WhatWeDoSection whatWeDo={whatWeDo} />
        <ViewServicesMenu />
        <Appointment />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allSanityIndexWhatWeDo(sort: { index: ASC }) {
      edges {
        node {
          id
          title
          description
          imageAltText
          image {
            asset {
              gatsbyImageData(width: 1200, aspectRatio: 2.5)
              url
            }
          }
        }
      }
    }
  }
`;
