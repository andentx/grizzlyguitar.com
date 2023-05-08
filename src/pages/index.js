import * as React from "react";

import Layout from "../components/Layout";

export const Head = () => (
  <>
    <title>Grizzly Guitar</title>
    <meta name="description" content="Description for Grizzly Guitar." />
    <meta name="author" content="Andrew" />

    <meta name="theme-color" content="hsl(0, 0%, 0%)" />
  </>
);

const IndexPage = () => {
  return (
    <>
      <Layout>
        <h2>Coming Soon</h2>
      </Layout>
    </>
  );
};

export default IndexPage;
