import * as React from "react";

import Layout from "../components/Layout";

export const Head = () => (
  <>
    <title>Grizzly Guitar | Blog</title>
    <meta name='description' content='Description for Grizzly Guitar.' />
    <meta name='author' content='Andrew' />

    <meta name='theme-color' content='hsl(0, 0%, 0%)' />
  </>
);

const BlogPage = () => {
  return (
    <>
      <Layout>
        <h1>Blog</h1>
      </Layout>
    </>
  );
};

export default BlogPage;
