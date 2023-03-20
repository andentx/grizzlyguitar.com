import React from 'react';
import { Link, graphql } from 'gatsby';

const ProductsPage = ({ data }) => (
  <>
    <h1>Products</h1>
    <ul>
      {data.allShopifyProduct.edges.map(({ node }) => (
        <li key={node.shopifyId}>
          <h3>
            <Link to={`/products/${node.handle}`}>{node.title}</Link>
            {' - '}${node.priceRangeV2.minVariantPrice.amount}
          </h3>
          <p>{node.description}</p>
        </li>
      ))}
    </ul>
  </>
);

export default ProductsPage;

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
