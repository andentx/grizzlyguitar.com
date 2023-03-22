import * as React from "react";

import Layout from "../components/Layout";

export const Head = () => (
  <>
    <title>Grizzly Guitar | Shop</title>
    <meta name='description' content='Description for Grizzly Guitar.' />
    <meta name='author' content='Andrew' />

    <meta name='theme-color' content='hsl(0, 0%, 0%)' />
  </>
);

const ShopPage = () => {
  return (
    <>
      <Layout>
        <h1>Shop</h1>
      </Layout>
    </>
  );
};

export default ShopPage;
