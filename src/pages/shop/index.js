import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/Layout";

import styled from "styled-components";

export const Head = () => (
  <>
    <title>Grizzly Guitar | Shop</title>
    <meta name='description' content='Description for Grizzly Guitar.' />
    <meta name='author' content='Andrew' />

    <meta name='theme-color' content='hsl(0, 0%, 0%)' />
  </>
);

const ProductCard = styled.div`
  background-color: darkgoldenrod;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 1rem;

  margin: 1rem;

  * {
    margin-bottom: 1rem;
  }

  img {
    width: 250px;
    height: 250px;
  }
`;

const ShopPage = ({ data }) => (
  <>
    <Layout>
      <h1>Shop</h1>
      <div>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <ProductCard key={node.shopifyId}>
            <Link to={`/shop/${node.handle}`}>
              <img src={node.media[0].image.src} />
              <h3>
                {node.title}
                {" - "}${node.priceRangeV2.minVariantPrice.amount}
              </h3>
              <p>{node.description}</p>
            </Link>
          </ProductCard>
        ))}
      </div>
    </Layout>
  </>
);

export default ShopPage;

export const query = graphql`
  {
    allShopifyProduct(sort: { title: ASC }) {
      edges {
        node {
          title
          shopifyId
          description
          media {
            ... on ShopifyMediaImage {
              id
              image {
                src
              }
            }
          }
          handle
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`;
