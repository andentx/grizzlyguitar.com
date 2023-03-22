import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

export const Head = () => (
  <>
    <title>Grizzly Guitar | Shop</title>
    <meta name='description' content='Description for Grizzly Guitar.' />
    <meta name='author' content='Andrew' />

    <meta name='theme-color' content='hsl(0, 0%, 0%)' />
  </>
);

const ShopPage = ({ data }) => (
  <>
    <Layout>
      <h1>Shop</h1>
      <ul>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <li key={node.shopifyId}>
            <h3>
              <Link to={`/products/${node.handle}`}>{node.title}</Link>
              {" - "}${node.priceRangeV2.minVariantPrice.amount}
            </h3>
            <p>{node.description}</p>
          </li>
        ))}
      </ul>
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
