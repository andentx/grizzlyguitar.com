import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import "../styles/blog-post.css";

import Layout from "../components/Layout";

export const Head = ({ pageContext }) => {
  return (
    <>
      <title>{`Grizzly Guitar | ${pageContext.title}`}</title>
      <meta
        name="description"
        content="Your destination for instruments, parts and service guided by one principle - Craftsmanship."
      />
      <meta name="author" content="Andrew" />

      <meta name="theme-color" content="rgb(31 41 55)" />
    </>
  );
};

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.altText || "",
  };

  return (
    <Layout>
      <div className="pb-24 bg-white">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl pt-12 pb-10 mx-auto lg:max-w-4xl">
            <article className="mb-24 blog-post">
              <header>
                <h1>{parse(post.title)}</h1>
                {featuredImage?.data && (
                  <GatsbyImage
                    image={featuredImage.data}
                    alt={featuredImage.alt}
                    className="featured-image"
                  />
                )}
              </header>

              {!!post.content && (
                <section itemProp="articleBody">{parse(post.content)}</section>
              )}
            </article>
            <hr />

            <nav className="">
              <ul className="flex flex-wrap justify-between p-0 text-gray-600 list-none ">
                <li>
                  {previous && (
                    <Link
                      to={previous.uri}
                      rel="prev"
                      className="p-2 transition-colors ease-in-out rounded-md focus:ring focus:ring-amber-400 focus:outline-none hover:text-gray-900 active:text-black "
                    >
                      ← {parse(previous.title)}
                    </Link>
                  )}
                </li>

                <li>
                  {next && (
                    <Link
                      to={next.uri}
                      rel="next"
                      className="p-2 transition-colors ease-in-out rounded-md focus:ring focus:ring-amber-400 focus:outline-none hover:text-gray-900 active:text-black "
                    >
                      {parse(next.title)} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`;
