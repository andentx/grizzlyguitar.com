import * as React from "react";

import Layout from "../components/Layout";

export const Head = () => (
  <>
    <title>Grizzly Guitar | About</title>
    <meta name='description' content='Description for Grizzly Guitar.' />
    <meta name='author' content='Andrew' />

    <meta name='theme-color' content='hsl(0, 0%, 0%)' />
  </>
);

const AboutPage = () => {
  return (
    <>
      <Layout>
        <h1>About</h1>
      </Layout>
    </>
  );
};

export default AboutPage;
