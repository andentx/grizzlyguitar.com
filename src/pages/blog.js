import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import parse from "html-react-parser";
import Layout from "../components/Layout";

export const Head = () => (
  <>
    <title>Grizzly Guitar | Blog</title>
    <meta
      name="description"
      content="Your destination for instruments, parts and service guided by one principle - Craftsmanship."
    />
    <meta name="author" content="Andrew" />
    <meta name="theme-color" content="rgb(31 41 55)" />
  </>
);

const BlogPage = ({ data }) => {
  const posts = data.allWpPost.nodes;

  return (
    <>
      <Layout>
        <div className="pb-24 bg-white ">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl pt-12 pb-10 mx-auto lg:max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 ">
                From the blog
              </h1>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Articles, guides and info related to getting the most out of
                your guitar.
              </p>
              <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                {posts.map((post) => {
                  return (
                    <Link
                      to={post.uri}
                      key={post.uri}
                      className="relative flex flex-col gap-8 rounded-2xl isolate lg:flex-row group focus:outline-none focus:ring focus:ring-amber-400 focus:ring-offset-4"
                    >
                      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[1/1] lg:w-64 lg:shrink-0">
                        <GatsbyImage
                          image={getImage(post.featuredImage.node.localFile)}
                          alt={post.featuredImage.node.altText}
                          className="absolute inset-0 object-cover w-full h-full transition-opacity ease-in-out shadow rounded-2xl bg-gray-50 sm:group-hover:opacity-80"
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div>
                        <div className="relative max-w-xl">
                          <h2 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 transition-colors ease-in-out sm:group-hover:text-gray-600">
                            <span className="absolute inset-0" />
                            {post.title}
                          </h2>
                          <section className="mt-5 text-sm leading-6 text-gray-600 transition-colors ease-in-out sm:group-hover:text-gray-500s">
                            {parse(post.excerpt)}
                          </section>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BlogPage;

export const postQuery = graphql`
  query WordPressPost {
    allWpPost(sort: { date: DESC }) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 600, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
