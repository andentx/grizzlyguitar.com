import React from "react";
import Layout from "../components/Layout";

import styled from "styled-components";

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  console.log(product.media[0].image.src);
  return (
    <>
      <Layout>
        <h1>Product page</h1>
        <h2>{product.title}</h2>
        <img src={product.media[0].image.src} style={{ width: "250px" }}></img>
        <p>price</p>
        <div>{product.description}</div>
      </Layout>
    </>
  );
};

export default ProductTemplate;
