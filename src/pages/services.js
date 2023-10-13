import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ServicesFAQ from "../components/ServicesFAQ";
import ServicesMenu from "../components/ServicesMenu";

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
