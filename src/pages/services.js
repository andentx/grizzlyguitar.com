import * as React from "react";

import Layout from "../components/Layout";

export const Head = () => (
  <>
    <title>Grizzly Guitar | Services</title>
    <meta name='description' content='Description for Grizzly Guitar.' />
    <meta name='author' content='Andrew' />

    <meta name='theme-color' content='hsl(0, 0%, 0%)' />
  </>
);

const ServicesPage = () => {
  return (
    <>
      <Layout>
        <h1>Services</h1>
      </Layout>
    </>
  );
};

export default ServicesPage;
