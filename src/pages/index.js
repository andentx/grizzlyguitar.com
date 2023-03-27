import * as React from "react";

import Layout from "../components/Layout";

export const Head = () => (
  <>
    <title>Grizzly Guitar</title>
    <meta name='description' content='Description for Grizzly Guitar.' />
    <meta name='author' content='Andrew' />

    <meta name='theme-color' content='hsl(0, 0%, 0%)' />
  </>
);

const IndexPage = () => {
  return (
    <>
      <Layout>
        <h1>Grizzly Guitar</h1>
        <h2>Top Photo</h2>
        <h2>About Section</h2>
        <h2>Services Section</h2>
        <h2>Featured Items Section</h2>
        <h2></h2>
      </Layout>
    </>
  );
};

export default IndexPage;
