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
    <meta name="description" content="Description for Grizzly Guitar." />
    <meta name="author" content="Andrew" />

    <meta name="theme-color" content="hsl(0, 0%, 0%)" />
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
